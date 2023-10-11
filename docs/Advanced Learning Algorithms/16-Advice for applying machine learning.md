# 9-Advice for applying machine learning

## Evaluating Machine Learning Models

### Introduction

- Evaluating a machine learning model's performance is crucial for improvement.
- Splitting data into training and test sets allows systematic evaluation.

### Model Example: Predicting Housing Prices

- Consider a model predicting housing prices based on size (features: x, x², x³, x⁴).
- Fit a fourth-order polynomial to training data.
- Concern: Model may not generalize to new data.

### Challenges in Visualization

- Visualizing complex models with multiple features becomes challenging.
- Difficult to visualize high-dimensional functions.

### Systematic Evaluation Technique

- Split the dataset into two subsets: Training Set (70%) and Test Set (30%).
- Train the model on the training set.
- Evaluate model performance on the test set.

#### Notation

- Training set: (x₁, y₁), ..., (xₘᵗᵣₐᵢₙ, yₘᵗᵣₐᵢₙ)
- Test set: (x₁ᵗᵉₛₜ, y₁ᵗᵉₛₜ), ..., (xₘᵗₑₛₜ, yₘᵗₑₛₜ)
- Number of training examples: mᵗᵣᵃᶦⁿ
- Number of test examples: mᵗᵉˢᵗ

### Regression Model Evaluation

- For linear regression with squared error cost:
  - Train by minimizing the cost function J(w, b).
  - Evaluate on test set: J*test(w, b) = (1 / (2 * m*test)) * Σ (f(xᵗᵉₛₜ) - yᵗᵉₛₜ)²
  - Training error: J*train(w, b) = (1 / (2 * m*train)) * Σ (f(xᵗᵣᵃᶦⁿ) - yᵗᵣᵃᶦⁿ)²
  - No regularization term in evaluation metrics.

### Classification Model Evaluation

- For logistic regression with logistic loss:
  - Train by minimizing the cost function J(w, b).
  - Evaluate on test set: J_test is the average logistic loss on the test set.
  - Training error: J_train is the average logistic loss on the training set.
- Alternatively, measure the misclassification rate:
  - Compute the fraction of misclassified examples in the test set.
  - Same for the training set.

### Conclusion

- Splitting data into training and test sets is vital for systematic model evaluation.
- Use evaluation metrics like squared error for regression and misclassification rate for classification.
- Evaluating both training and test errors helps assess model generalization.
- This approach lays the foundation for model selection and improvement.
