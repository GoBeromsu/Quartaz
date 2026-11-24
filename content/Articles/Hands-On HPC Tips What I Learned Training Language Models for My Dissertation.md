---
aliases: []
date_created: 2025-09-11
date_modified: 2025-09-11
permalink: hands-on-hpc-tips-training-language-models
tags:
  - hpc
  - ai
  - llm
  - training
title: "Hands-On HPC Tips: What I Learned Training Language Models for My Dissertation"
---

![](/_attachments/medium-83f08a540f9a-01.png)

*In front of Information Commons*

As part of my dissertation project, I had the opportunity to fine-tune language models on HPC resources using both H100 and A100 GPUs. It was valuable to apply what I had learned in GPU Programming, and this note serves to my experience. I hope these tips will be useful to others.

## What is HPC

High Performance Computing (HPC) refers to the use of powerful, networked computing resources to solve problems that are too large for a standard workstation. At the University of Sheffield, these resources are provided by the Stanage cluster. Resources are structured in layers: login nodes for access and job submission, compute nodes for CPU, GPU, or high-memory workloads, and a shared parallel file system for storage. Specifically, **I used Stanage to train models with H100 GPUs.**

![](/_attachments/medium-83f08a540f9a-02.png)

*UoS recommended VPN : FortClient*

To access HPC, **one must apply for an account, connect through the university VPN, and log in via SSH with University account.** From there, all computation must be submitted through SLURM — direct computation on login nodes is prohibited. Understanding this layered architecture and the scheduling system is critical: efficient HPC usage depends on choosing the right partition, sizing CPU, memory, and GPU requests carefully, and making use of batch scripting for reproducibility.

## Tips

### Save your Commonly Used Commands

![](/_attachments/medium-83f08a540f9a-03.png)

*Termius snippets*

It is convenient to save frequently used commands so they can be pasted directly into the shell. I use the *Terminus* client for quick copy-and-paste access.

- `squeue --me` – view current queue status
- `squeue --start -j <jobid>` – estimate start time
- `sstat --jobs=<jobid> --format=JobID,MaxRSS,MaxVMSize,AveCPU` – monitor resource usage while running
- `sacct -j <jobid> --format=JobID,Elapsed,MaxRSS,ReqMem` – review resource usage after completion

## Use Interactive Sessions for Quick Debugging

Running code in an interactive session is the easiest way to check things in real time before committing to a long batch job. With a single command like

```
srun --partition=gpu --qos=gpu --gres=gpu:1 --pty bash

srun --partition=gpu-h100 \
     --qos=gpu \
     --gres=gpu:1 \
     --mem=36G \
     --pty bash
```

you can launch a short GPU session to test your environment and dependencies. I often used this when CUDA, PyTorch kept breaking due to version mismatches. Interactive jobs are capped at eight hours, so they are only suitable for setup or debugging, not full training. Memory is another limitation: the default is just 4 GB, which is too low for most models, so adding a flag such as `--mem=32G` is essential. If a session disconnects, you can reattach with `sattach <jobid>`.

For GPU choice, you need to specify either A100 or H100 nodes with `--partition=gpu` or `--partition=gpu-h100`. And for file I/O, the home directory is slow—large datasets should always be placed in the fastdata storage area to avoid bottlenecks.

### Match Your Specs to the Cluster Hardware

Stanage mixes Intel Ice Lake and AMD Zenver3 CPUs, and the architecture you get depends on which GPU node (A100 or H100) you request. This matters because CUDA compatibility is tied to the CPU–GPU combination. For example, H100 nodes require CUDA 11.8 or later (SM90), while A100 nodes work with CUDA 11+ (SM80). If you need a specific CUDA version, you must explicitly choose the right GPU partition.

Modules make it easier to manage versions — `module avail CUDA` shows what is installed, and `module load CUDA/12.1.1` activates the version you need. But mismatches still happen. CUDA, PyTorch, and the GPU driver must all align, and when they don’t, you may need to rebuild libraries to match the hardware constraints. For example, when switching to H100 nodes, rebuilding with `gencode=sm_90` is required.

Here’s a subset of my setup script that demonstrates how I handled rebuilds when versions did not line up:

```
# Install CUDA-specific PyTorch separately (avoid generic CPU wheel)
echo "Installing CUDA-specific PyTorch..."
python -m pip install torch==2.5.1+cu121 --index-url https://download.pytorch.org/whl/cu121

# Install flash-attn explicitly; --no-build-isolation ensures env compilers are used
echo "Installing flash-attn (no build isolation)..."
python -m pip install flash-attn==2.7.4.post1 --no-build-isolation

# Install application dependencies from pyproject extras (.[hpc])
cd "$REPO_DIR"
uv pip install -e ".[hpc]"

echo "Installing GPU-enabled llama-cpp-python (CUDA 12.1, SM_90)..."
uv pip uninstall llama-cpp-python
rm -rf ~/.cache/uv/ ~/.cache/pip/
CMAKE_ARGS="-DGGML_CUDA=on -DCMAKE_CUDA_ARCHITECTURES=90 -DCMAKE_VERBOSE_MAKEFILE:BOOL=ON" \
pip install llama-cpp-python --no-binary llama-cpp-python --no-cache-dir -v
```

### Link Hugging Face Cache to Fastdata

By default, Hugging Face saves all models, tokenizers, and datasets into `~/.cache/huggingface`. This works fine on a personal machine, but on Stanage the home directory quota is only 10 GB. A few large models will fill it instantly, and when the cache runs out of space your training jobs can crash.

The fix is simple: redirect the Hugging Face cache to *Fastdata*. Fastdata provides hundreds of gigabytes of temporary storage, is safe to wipe because files can always be re-downloaded, and is perfect for transient data like models or checkpoints.

You can set this up with a symlink:

```
mkdir -p /mnt/parscratch/users/$USER/.cache/huggingface
rm -rf ~/.cache/huggingface
ln -s /mnt/parscratch/users/$USER/.cache/huggingface ~/.cache/huggingface
```

Or by adding an environment variable to your shell config:

```
export HF_HOME=/mnt/parscratch/users/$USER/.cache/huggingface
```

Either way, this ensures Hugging Face caching works smoothly without hitting quota limits, and your jobs will stay stable.

### Automate Training → Inference

You don’t have to manually start inference after training finishes. SLURM lets you chain jobs so that inference begins automatically once training completes.

```
sbatch --dependency=afterok:<jobid> run_inference.sh
```

Use `afterok` if you want inference to run only when training ends successfully, or `afterany` if you want it to run regardless of outcome.

### Get Email Notifications

You can have SLURM notify you when jobs start, end, or fail without constantly checking the queue. Just add these lines to your batch script:

```
#SBATCH --mail-user=<your_uos_email>
#SBATCH --mail-type=BEGIN,END,FAIL
```

### Attach to Running Jobs

If a job is running slower than expected, you can jump into the node and inspect it directly.

```
srun --jobid=<jobid> --pty bash   # enter the node
sattach <jobid>                  # attach to job output
```

Once inside, tools like `nvidia-smi` and `htop` let you check GPU/CPU usage in real time. This is also the fastest way to spot I/O bottlenecks, memory shortages, or code errors while the job is still active.

---

*2025-09-11에 [Medium](https://beromkoh.medium.com/hands-on-hpc-tips-what-i-learned-training-language-models-for-my-dissertation-83f08a540f9a)에 쓴 글을 옮겼습니다.*
