---
aliases: 
date_created: 2025-03-26
date_modified: 2025-03-26
tags: 
---

## Late 2022 – v0.1.x

#### How Have the System's Size and Complexity Changed Over Time?
- Deep-River (originally called **river-torch**) started with a modular design. The core package was split into subpackages even in its first release, including **classification**, **regression**, **anomaly**, and **utils**, plus a base module for shared functionality. This indicates a deliberate architecture to separate concerns from the outset.

- **Incremental Growth**: In its earliest releases (e.g. v0.1.1, Nov 2022), the repository already contained functionality for online classification, regression and anomaly detection, driving an early increase in code size.

- **Rolling Mechanisms**: “Rolling” classes allowed the model to adapt to evolving data distributions, but these features also introduced additional complexity by duplicating logic for each task.
	- [[What is Rolling in Deep-River]]

#### How Have the System's Architecture, Design, and Functionality Changed Over Time?

- From the outset, the system was structured around **multiple submodules** (classification, regression, anomaly), each mapping to a key functionality. The existence of rolling variants for classifiers and regressors reflected an early design focus on streaming adaptation.

- **Core Architecture**: Even at v0.1.x, A base module (`base.py`) introduced common functionality (`DeepEstimator`), ensuring that classification, regression, and anomaly detection each subclassed a shared interface.
- **Online Learning Focus**: Even at this early stage, there were classes for online classification (`Classifier`, `RollingClassifier`) and anomaly detection with autoencoders. This reveals that major functionality (online neural network training, anomaly scoring) was present from the first official releases.


#### What Factors Have Influenced the System's Changes?

- **Stream-Focused Requirements**: The deep-river project aimed to integrate seamlessly with River’s data-streaming architecture, so feature development (like rolling classes) aligned with River’s streaming API.

- **Need for Incremental Adaptation**: The streaming paradigm of River shaped the system’s design. To ensure compatibility, the early architecture closely mirrored River’s `Estimator` interface (`learn_one`, `predict_one`, `score_one`).
## Dec 2022 – V0.2.0

#### How Have the System's Size and Complexity Changed Over Time?

- **Project Rename**:
	- The project was renamed from “river-torch” to **deep-river** in December 2022 (v0.2.0). This required a broad refactoring of the codebase (moving files, updating import paths, documentation, etc.)
		- [Comparing v0.1.2...v0.2.0 · online-ml/deep-river](https://github.com/online-ml/deep-river/compare/v0.1.2...v0.2.0)
- The rename itself was **neutral for complexity** – it mostly improved clarity and branding rather than altering internal logic.

#### How Have the System's Architecture, Design, and Functionality Changed Over Time?

- Alongside the rename, the team stabilized the core API interface to mirror River’s style. Deep-River continued to use `learn_one`, `predict_one`, `score_one`, preserving user-facing consistency as the codebase evolved.
	- [[Combining Deep-River with the River API]]

- **Consistent Naming and Branding**: Aligning the library name with its function (“deep-river”) clarified the project’s goal as a deep-learning extension to River.

#### What Factors Have Influenced the System's Changes?

- **Brand Cohesion**: The rename addressed confusion about whether the project was an official River component or a standalone deep-learning library for River.

- **Cleaner Internal Structure**: Ongoing refactoring efforts were driven by maintainers’ desire to reduce complexity and duplication, preparing the library for the next phase of feature expansion.


## Feature Expansion and Growth (2022-2023)

#### How Have the System's Size and Complexity Changed Over Time?

- Deep-River’s functionality expanded significantly, naturally increasing the code size. This included:

    - **Incremental Sequence Models**: The team merged PR #58 “Add LSTM incremental classes to RollingClassifier,” introducing recurrent neural nets (LSTMs) for online learning. This added +258/-95 lines across several files, signaling a notable jump in complexity for recurrent model handling.

    - **Multi-Output and Regression Enhancements**: A `MultiTargetRegressor` class was eventually introduced, allowing a single model to predict multiple outputs in a stream. Although this increased code size, it consolidated logic, reducing the need for separate ad-hoc “rolling_regressor” approaches for each new output dimension.

    - **Anomaly Detection and Clustering**: Refinements to the autoencoder-based anomaly detection included variants like the **probability-weighted autoencoder**. This expanded the anomaly module, increasing the system’s scope but also compartmentalizing new features in dedicated classes.

- Lines of code and the number of commits continued to rise. New classes, tests, and documentation contributed to the codebase’s quantitative growth.
#### How Have the System's Architecture, Design, and Functionality Changed Over Time?

- **Sequence Models**: LSTM-based online training for classification and regression represented a major expansion, enabling streaming applications for sequential data.

- **Multi-Output Learning**: A `MultiTargetRegressor` introduced multi-dimensional output prediction, centralizing the logic for handling varying output dimensions without proliferating specialized classes.
	- [Pull requests · online-ml/deep-river](https://github.com/online-ml/deep-river/pull/82)

- **Anomaly Detection Improvements**: Variants like the probability-weighted autoencoder refined the anomaly module. These features deepened functionality while keeping consistent submodule boundaries (e.g. `anomaly`).

#### What Factors Have Influenced the System's Changes?

- **Alignment with Upstream Libraries**: The project tracked PyTorch and River updates, ensuring it stayed compatible with the broader ecosystem’s evolving APIs and Python versions.

- **User Experience**: Developers introduced new modules in ways that preserved a uniform interface. For instance, multi-output tasks were folded into the existing regression framework rather than forming an entirely separate system.

## Maturity and Refinement (2024 – Early 2025)

#### How Have the System's Size and Complexity Changed Over Time?

- **Slower Growth**: As of early 2025, major structural additions had tapered off. Code size continued to rise due to documentation, minor feature tweaks, and example notebooks rather than large-scale new modules.

- **Incremental Enhancements**: New tools (e.g. a `draw()` method that relies on GraphViz/torchviz) introduced small pockets of complexity but were implemented as optional dependencies, containing the overall impact.


#### How Have the System's Architecture, Design, and Functionality Changed Over Time?

- **Stable Architectural Core**: The same high-level layout (classification, regression, anomaly, plus a base) remained. No major re-architecture was necessary, suggesting the original design was robust.

- Enhanced documentation, refined examples, and optional features (like network visualization) reflect a push toward usability. Refactoring efforts also replaced some “rolling” classes with more transparent mechanisms, reducing duplication.

#### What Factors Have Influenced the System's Changes?

- **Peer Review and Publication**: A submission to the Journal of Open Source Software (JOSS) in 2024 prompted final refinements in documentation, code quality, and versioning.

- **Maintainer and Community Feedback**: Developers continued to streamline the library based on feedback from users adopting the system in production and academic research settings.

- **Long-Term Maintainability**: With the core functionality in place, the team focused on polishing, ensuring that new features aligned with the existing design philosophy and minimized technical debt.

## Summary of Trajectory

#### How Have the System's Size and Complexity Changed Over Time?

- Grew steadily from late 2022 to 2025, with major leaps during the introduction of rolling classes, LSTM support, and multi-output regression.

- Complexity was tempered by periodic refactoring (e.g. unifying rolling logic, cleaning up code duplication). The architecture has remained modular and stable.


#### How Have the System's Architecture, Design, and Functionality Changed Over Time?

- Maintained a consistent River-style interface (`learn_one`, `predict_one`), anchored by a base `DeepEstimator`.

- Expanded from core classification/regression to robust anomaly detection, sequence modeling, and multi-output learning—all under a cohesive, submodule-based structure.


#### What Factors Have Influenced the System's Changes?

- Real-world streaming challenges (e.g. evolving classes, sequential data, multi-output tasks).

- Upstream library updates (PyTorch, River).

- A commitment to usability and maintainability, seen in careful refactoring, thorough documentation, and alignment with community feedback.


## References

- **Initial Package Structure (v0.1.1)**
    [Deep-River at 61e1c8a190 (Classification Module)](https://github.com/online-ml/deep-river/tree/61e1c8a1906280e0672204f205da44ebdb50b8f5/river_torch/classification#:~:text=classifier)
    [Deep-River at 61e1c8a190 (Anomaly Module)](https://github.com/online-ml/deep-river/tree/61e1c8a1906280e0672204f205da44ebdb50b8f5/river_torch/anomaly#:~:text=probability_weighted_ae)

- **Refactoring Rolling Classes**
    [v0.1.2 Release Notes](https://github.com/online-ml/deep-river/releases#:~:text=Refactoring%20Rolling%20Classes)

- **Rename to Deep-River (v0.2.0)**
    [Commit Updating Version](https://github.com/online-ml/deep-river/commit/73520c1c50998c48bd2cb48bfdb837bc8c3600f7#:~:text=%601%60%60%60%60)

- **LSTM Support (PR #58)**
    [Add LSTM Incremental Classes](https://github.com/online-ml/deep-river/commit/65b353fea80041f8dc9b1a67f6884d5918d2c945#:~:text=%2B258)

- **Dependency Updates**
    [Torch and River Bumps](https://github.com/online-ml/deep-river/commit/12670adcb69444ff087bc4a6a4c6881976cda30a#:~:text=%6018%60%60%60%60)

- **JOSS Review (Oct 2024)**
    [Review Discussion](https://github.com/openjournals/joss-reviews/issues/7226#:~:text=Regarding%20the%20repo%3A)