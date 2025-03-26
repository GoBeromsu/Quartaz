---
aliases: 
date_created: 2025-03-26
date_modified: 2025-03-26
tags: 
---
## Combining Deep-River with the River API

#### Implementation Approach

- Deep-River implements the same interface used by River’s estimators, including:
    - `learn_one` for incremental training on a single observation
    - `predict_one` (or `score_one` for anomaly detection) for producing a prediction

- Each Deep-River model inherits from River’s base classes (e.g. `River’s Estimator`) through a shared `DeepEstimator` in `deep_river.base`
	- ensure compatibility with the broader River ecosystem (like Pipelines, metrics, and rolling evaluations).

- Internally, the [[PyTorch]] training loop is encapsulated in `learn_one`.
	- When a new sample arrives, Deep-River converts it into a PyTorch tensor, performs a forward pass, calculates the loss, and backpropagates all within the single-step streaming paradigm.

#### Key Abstractions

- **DeepEstimator**: Defines how Deep-River models conform to River’s `Estimator` interface. It ensures any model can plug into River’s pipelines or be evaluated incrementally.

- **Classifier, Regressor, Anomaly Detector**: Specialized subclasses wrap PyTorch modules while preserving the `learn_one` / `predict_one` semantics. This design keeps the user-facing API identical to other River estimators (e.g. `River’s LogisticRegression`), reducing learning curve.

- **Rolling Mechanism**: Instead of re-initializing a model when data distribution changes or classes appear, Deep-River’s “rolling” logic adapts weights or expands output layers. Behind the scenes, this leverages PyTorch’s dynamic graph ability but still calls River’s methods.

#### Usage Patterns

- **Pipelines**: Users can chain data preprocessing with a Deep-River model in a typical River `Pipeline`. River orchestrates feature transformations (`learn_one` on the transformer) before passing data to the Deep-River model’s `learn_one`.

- **Metrics and Rolling Metrics**: Because Deep-River subclasses the same base interfaces as River’s native models, users can apply any of River’s metrics (e.g. `Accuracy`, `MAE`, `RollingROCAUC`) seamlessly, even in streaming or time-based evaluation loops.

- **Partial Fit**: In a continuous data stream, each incoming observation triggers a single PyTorch backpropagation step. This is handled natively in `learn_one` without requiring custom loops, letting River’s incremental evaluators manage performance tracking over time.

#### Additional Considerations

- Dependency Management: Deep-River requires PyTorch, while River remains the core streaming framework. Users install both libraries to ensure that the neural network logic (PyTorch) and streaming data tools (River) integrate without conflict.

- Consistent API: By adhering closely to River’s naming conventions and method signatures, Deep-River maintains straightforward code for incremental learning. Developers familiar with River can switch to Deep-River models with minimal adjustments.