---
aliases: []
cmds:
  - "[[📚 602 Scripts]]"
  - "[[📚 601 Prompts]]"
  - "[[📚 801 Blog]]"
date_created: 2025-07-02
date_modified: 2026-01-28
permalink: pth-to-gguf-pipeline
tags: []
title: how to convert .pth to gguf pipeline
type:
  - articles
---

## Introduction

I'm currently working on small language models, especially Llama. Since I want to serve the model using LM Studio, I need to convert it into `GGUF` format

```
.pth (Meta Checkpoint)
  ↓ convert_llama_weights_to_hf.py
HF directory (config.json, tokenizer.model, .safetensors)
  ↓ convert-hf-to-gguf.py
GGUF file (compatible with llama.cpp / LM Studio)
```

## Requirement

- Clone and build the llama.cpp [repository](https://github.com/ggml-org/llama.cpp)
- Python 3.10 or higher environment (recommended: `venv` or `conda`)

- Required packages:

```bash
pip install torch numpy sentencepiece transformers huggingface_hub gguf
```

#### Llama Datafile

We can download Llama from [Class Leading, Open-Source AI \| Download Llama](https://www.llama.com/llama-downloads/)
For CodeLlama, you can use this link: [meta-llama/codellama](https://github.com/meta-llama/codellama)
After finishing the download, you can see these files in the directory

- `consolidated.pth`, `consolidated.01.pth`, etc. - **Model weight data** - Sharded (e.g., 13B model has 2 shards, 65B has 8) - `.pth` contains raw tensor data only, no model architecture
- `params.json` - Model hyperparameter settings (e.g., hidden size, vocab size, num_layers) - Used to generate HF config during conversion
- `tokenizer.model` - SentencePiece tokenizer model (used in all LLaMA variants) - Tokenisation schema - Converted to `tokenizer.json`, `tokenizer_config.json` in HF format

## PyTorch `.pth` → Hugging Face Format Conversion

Then change .pth to the Hugging Face format. Because to change .pth to GGUF files, we should extract HF format metadata. Since my disk usage is limited, I also need to save my models in Hugging Face

- Why convert `.pth` to Hugging Face format? - `.pth` cannot be directly used with LM Studio or `llama.cpp` - Hugging Face format is standardised and compatible with formats like `GGUF` - Separates tokenizer, config, and weights for clearer model management
- In the downloaded directory, use [transformers/models/llama/convert_llama_weights_to_hf.py](https://github.com/huggingface/transformers/blob/main/src/transformers/models/llama/convert_llama_weights_to_hf.py)

```bash
python convert_llama_weights_to_hf.py \
  --input_dir /path/to/CodeLlama-13B \
  --model_size 13B \
  --output_dir ./hf-codellama13b
```

This script (within `transformers`) converts Meta's CodeLlama `.pth` + `tokenizer` into Hugging Face sharded `.safetensors`.

## Hugging Face → GGUF Conversion

- Convert the Hugging Face format directory into GGUF:

```bash
cd llama.cpp
python llama.cpp/convert_hf_to_gguf.py CodeLlama-13b/output --outfile codellama13b.gguf --outtype f32
```

- Required files in the HF directory: - `config.json`, `tokenizer.json`, `tokenizer_config.json` - `tokenizer.model` - Sharded `.safetensors` files
- Ensure Python dependencies are correctly installed
- `--outtype` specifies output precision: - **`f32` (float‑32):** - Standard 32-bit floating point - Maximum accuracy; **lossless** weight reconstruction - Large file and memory footprint - **`f16` (float‑16):** - Half-precision 16-bit - Still **lossless** if source weights are 16-bit (e.g., BF16) - Smaller size (~50%), lower memory, faster inference

## How to Upload Model in to Hugging Face

```bash
❯ cd CodeLlama-7b
❯ huggingface-cli upload Berom0227/codellama-7b --type model
huggingface-cli: error: unrecognised arguments: --type model

❯ huggingface-cli repo create Berom0227/codellama-7b --type model
The --type argument is deprecated and will be removed in a future version. Use --repo-type instead.
Successfully created Berom0227/codellama-7b on the Hub.
Your repo is now available at https://huggingface.co/Berom0227/codellama-7b

❯ huggingface-cli upload Berom0227/codellama-7b . --include='*'
```

#### Hugging Face CLI Commands Explanation

- `huggingface-cli repo create <repo_id> --repo-type model` - Creates a new model repository on Hugging Face Hub - `--repo-type model` specifies the repository type - `--type` is deprecated and should not be used - Example: `huggingface-cli repo create Berom0227/codellama-7b --repo-type model`
- `huggingface-cli upload <repo_id> <local_path> --include='*'` - Uploads local files to the Hugging Face repository - `--include='*'` includes all files for upload - Example: `huggingface-cli upload Berom0227/codellama-7b . --include='*'`
- Error examples and solutions: - Error: `huggingface-cli: error: unrecognised arguments: --type model` - Solution: Use `--repo-type model` instead of deprecated `--type model`
