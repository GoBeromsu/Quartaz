---
aliases: []
date_created: 2024-10-10
date_modified: 2024-10-10
permalink: data-normalization
tags:
  - machine-learning
title: "Data Normalization"
---

Data normalization is a crucial preprocessing step in Machine Learning and Data Analysis. It involves **adjusting the scales of features so that they contribute equally to the model’s learning process**. Without normalization, features with larger magnitudes can disproportionately influence the model, leading to biased results.

## Why is Normalization Necessary?

When datasets contain features with varying scales, **models can become biased toward features with larger values**. This imbalance can negatively impact the performance of algorithms that rely on distance calculations, such as k-nearest neighborsor Gradient Descent optimization in neural networks.

**Example: Classifying Malnourished Children**

Consider a dataset where we aim to classify whether a child is malnourished based on their weight and age:

Weight (kg) Age (years) Malnourished?

![](/_attachments/medium-1e897e718585-01.png)

- **The Problem**: The weight values are significantly larger than the age values. Algorithms that compute distances may focus mainly on weight, ignoring age.
- **The Solution**: Normalize the data so that weight and age contribute equally to the distance calculations.

## Data Normalization Strategies

Normalization techniques adjust the data to a common scale, ensuring that each feature contributes proportionately to the final result. Below are common normalization methods:

### 1. Min-Max Scaling

Min-max scaling rescales the data to a fixed range, typically \[0, 1\] or \[-1, 1\].

**Formula:**

**Characteristics:**

- **Advantages**: Preserves the relationships among the original data values.
- **Disadvantages**: Sensitive to outliers, which can skew the scaling.

### 2. Z-Score Normalization (Standardization)

This method transforms the data so that it has a mean of 0 and a standard deviation of 1.

**Formula:**

- ( \mu ) is the mean of the feature.
- ( \sigma ) is the standard deviation.

**Characteristics:**

- **Advantages**: Handles outliers better than min-max scaling.
- **Disadvantages**: Assumes the data is normally distributed.

## 3. Robust Scaling

Robust scaling uses the median and interquartile range, making it robust to outliers.

**Formula:**

- **IQR** is the Interquartile Range (Q3 — Q1).

**Characteristics:**

- **Advantages**: Minimizes the influence of outliers.
- **Disadvantages**: May not normalize the data to a specific range.

### 4. Log Transformation

Applies a logarithmic function to reduce skewness and handle exponential relationships.

**Formula:**

**Characteristics:**

- **Advantages**: Useful for positively skewed distributions.
- **Disadvantages**: Only applicable to positive values.

### 5. Decimal Scaling

Scales the data by moving the decimal point of values.

**Formula:**

- is the smallest integer such that

**Characteristics:**

- **Advantages**: Simple to implement.
- **Disadvantages**: Less common and may not handle all scaling needs.

## Summary

Normalization is essential for:

- **Reducing Bias**: Ensures that no single feature dominates due to scale.
- **Improving Convergence**: Helps optimization algorithms converge faster.
- **Enhancing Performance**: Leads to better model accuracy and reliability.

By selecting an appropriate normalization strategy, we can preprocess our data to improve model performance and achieve more accurate results.

If you want more information about this topic, Check this [link](https://berom.net/Machine-Learning/What-is-Normalization)

---

*2024-10-10에 [Medium](https://beromkoh.medium.com/data-normalization-1e897e718585)에 쓴 글을 옮겼습니다.*
