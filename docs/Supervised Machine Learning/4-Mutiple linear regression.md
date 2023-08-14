# 4 - Mutiple linear regression

## Linear Regression with Multiple Features

### Introduction

- Linear regression can be extended to include multiple features for prediction.
- By considering additional features, we can gather more information to improve predictions.

### Notation

- Variables:
  - X₁, X₂, X₃, X₄: Denote the four features.
  - Xᵢⱼ: Refers to the jth feature of the ith training example.
  - Xᵢ: Represents the list of features for the ith training example.
  - n: Total number of features (n = 4 in this example).
- Example:
  - X²: Vector of features for the second training example: [1416, 3, 2, 40].

### Model with Multiple Features

- In the original linear regression, the model was defined as fₒᵤₜ(x) = wx + b.
- With multiple features, the model is defined as follows:
  - fₒᵤₜ(x) = w₁x₁ + w₂x₂ + w₃x₃ + w₄x₄ + b.
- Example for housing price prediction:
  - Model: f(x) = 0.1x₁ + 4x₂ + 10x₃ - 2x₄ + 80.
- Parameter interpretation:
  - b (80): Base price of a house with no features.
  - 0.1x₁: Price increase per square foot.
  - 4x₂: Price increase per bedroom.
  - 10x₃: Price increase per floor.
  - -2x₄: Price decrease per year of house age.

### General Model with n Features

- Model definition with n features: fₒᵤₜ(x) = w₁x₁ + w₂x₂ + ... + wₙxₙ + b.
- Introduction of vector notation:
  - W: List of parameters [w₁, w₂, ..., wₙ].
  - X: List of features [x₁, x₂, ..., xₙ].
- Model can be rewritten as: fₒᵤₜ(x) = W⋅X + b.
- Dot product of vectors:
  - Dot product of W and X: W⋅X = w₁x₁ + w₂x₂ + ... + wₙxₙ.
- Compact form of the model: fₒᵤₜ(x) = W⋅X + b.

### Multiple Linear Regression

- Linear regression with multiple input features is called multiple linear regression.
- It extends the concept of univariate regression, which has only one feature.

### Conclusion

- Linear regression can incorporate multiple features for better predictions.
- Multiple linear regression models are defined using vector notation.
- The dot product of vectors simplifies the model representation.
- Multiple linear regression extends univariate regression.
- Vectorization is a useful technique for implementing learning algorithms.

## Vectorization in Machine Learning part1

### Introduction

- Vectorization is a powerful concept in implementing learning algorithms.
- It makes code shorter and more efficient.
- Taking advantage of numerical linear algebra libraries and GPU hardware further enhances performance.

### Understanding Vectorization

- Vectorization allows concise and efficient code implementation.
- Parameters (w) and features (x) are represented as vectors.
- Indexing in Python starts from 0, unlike linear algebra where it starts from 1.
- NumPy library is widely used for numerical linear algebra operations in Python and machine learning.

### Non-Vectorized Implementation

- Non-vectorized code involves multiplying each parameter with its associated feature.
- It becomes inefficient when the number of features (n) is large.
- Using a for loop and summation can improve efficiency but still lacks vectorization.

### Vectorized Implementation

- Vectorized code leverages the dot product operation.
- The dot product is computed using the NumPy dot function.
- The dot function is a vectorized implementation of the dot product.
- It significantly improves efficiency, especially with large values of n.

### Benefits of Vectorization

- Vectorization has two main benefits:
  - Shorter code: It reduces the code to a single line.
  - Faster execution: It takes advantage of parallel hardware, such as GPUs.
- The NumPy dot function utilizes parallel hardware, making it more computationally efficient.

### Conclusion

- Vectorization is a powerful technique in machine learning.
- It simplifies code and improves its performance.
- By leveraging numerical linear algebra libraries and parallel hardware, vectorized code achieves faster execution.

## Vectorization in Machine Learning part2

### Introduction

- Vectorization is a technique that significantly improves the efficiency of machine learning algorithms.
- It involves performing operations on vectors rather than using explicit for loops.
- Vectorized code is concise, easier to understand, and utilizes parallel hardware for faster execution.

### Understanding Vectorization

- Vectorization allows for efficient implementation of algorithms by operating on entire vectors simultaneously.
- Non-vectorized code performs operations one step at a time, resulting in slower execution.
- Vectorized code takes advantage of parallel processing hardware to perform calculations in a single step.

### Benefits of Vectorization

- Code Efficiency: Vectorized code is shorter and more concise, reducing the number of lines required.
- Faster Execution: By leveraging parallel hardware, vectorized code performs calculations much faster than non-vectorized code.
- Scalability: Vectorization is crucial for handling large datasets and training complex models.

### Example: Multiple Linear Regression

- In multiple linear regression, vectorization plays a key role in updating the parameters efficiently.
- Without vectorization, each parameter is updated individually using a for loop.
- With vectorization, the computer performs parallel computations to update all parameters simultaneously.

### Implementation with NumPy

- NumPy is a popular Python library for numerical computations and vectorization.
- It provides functions like dot product (dot) that operate on vectors efficiently.
- NumPy arrays, or vectors, are used to store and manipulate data in a vectorized manner.

### Benefits of Vectorization in Machine Learning

- Improved Efficiency: Vectorization significantly speeds up the execution of learning algorithms.
- Handling Large Datasets: Vectorized code is essential for processing large amounts of data effectively.
- Scaling Machine Learning Algorithms: Vectorization enables algorithms to scale well to handle complex models and datasets.

### Conclusion

- Vectorization is a powerful technique in machine learning for efficient algorithm implementation.
- It leverages parallel processing hardware and libraries like NumPy to perform calculations on vectors.
- Vectorized code is concise, faster, and crucial for handling large datasets and complex models.

## Gradient Descent for Multiple Linear Regression with Vectorization

### Introduction

- Review of multiple linear regression and vector notation.
- Applying gradient descent to multiple linear regression with vectorization.

### Multiple Linear Regression in Vector Notation

- Parameters w_1 to w_n and b are combined into a parameter vector w.
- Model: f_w, b(x) = w⋅x + b (dot product notation).
- Cost function: J(w, b).

### Gradient Descent for Multiple Linear Regression

- Update rule for each parameter w_j: w_j = w_j - α \* ∂J/∂w_j.
- Update rule for b: b = b - α \* ∂J/∂b.
- Derivative of J with respect to w*1: ∂J/∂w_1 = (1/m) * ∑(f*w,b(x) - y) * x_1.
- For multiple features (n > 1): ∂J/∂w*j = (1/m) * ∑(f*w,b(x) - y) * x_j.
- Update all parameters w_1 to w_n and b iteratively.

### Normal Equation Method (Side Note)

- Alternative method to find w and b for linear regression.
- Solves for w and b directly without iterations.
- Only applicable to linear regression.
- Not generalized to other learning algorithms.
- Slow for large number of features.
- Often used in mature machine learning libraries.

### Conclusion

- Gradient descent with vectorization is a powerful approach for multiple linear regression.
- Parameters are updated iteratively using derivative calculations.
- Normal equation method provides an alternative, but less flexible, approach.
- Gradient descent is widely used and offers better scalability and generality.
