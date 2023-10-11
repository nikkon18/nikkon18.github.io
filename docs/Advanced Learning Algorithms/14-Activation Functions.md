# 7-Activation Functions

## Alternatives to the sigmoid activation

### Introduction

- Activation functions determine the output of a neuron and introduce non-linearity to neural networks.
- Different activation functions can make neural networks more powerful.
- Let's explore alternative activation functions and their implications.

### Modeling Awareness

- Example: Demand prediction for a t-shirt based on price, shipping cost, marketing, and material.
- Previous approach: Model awareness as a binary number (0 or 1).
- Consideration: Awareness can vary on a continuous scale.
- New approach: Allow awareness to be any non-negative number.

### ReLU Activation Function

- ReLU (Rectified Linear Unit) is a commonly used activation function.
- Mathematical equation: g(z) = max(0, z)
- Graphical representation: 0 to the left, straight line to the right.

### Other Activation Functions

1. Sigmoid Activation Function:

   - Mathematical equation: g(z) = 1 / (1 + e^(-z))
   - Range: 0 to 1

1. Linear Activation Function:

   - Mathematical equation: g(z) = z
   - Range: -∞ to +∞

### Choosing Activation Functions

- Sigmoid: Suitable for binary classification problems.
- ReLU: Commonly used for hidden layers in deep neural networks.
- Linear: Used for regression problems or when no activation is desired.

### Conclusion

- Activation functions introduce non-linearity to neural networks.
- Sigmoid, ReLU, and linear are commonly used activation functions.
- The choice depends on the problem and the layer in the neural network.
- These activation functions enable the construction of powerful neural networks.

## Choosing Activation Functions in Neural Networks

### Introduction

- Activation functions are crucial in neural networks for determining the output of neurons.
- Different activation functions are selected based on the layer and the type of problem being solved.

### Activation Functions for the Output Layer

- The choice of activation function for the output layer depends on the target label or ground truth label, y.
- For binary classification problems (y = 0 or 1), the sigmoid activation function is the most natural choice.
  - Sigmoid predicts the probability that y equals one.
- For regression problems (continuous values), the linear activation function is recommended.
  - Example: Predicting stock price changes.
- For non-negative values (e.g., predicting house prices), the ReLU activation function is the most suitable choice.

### Activation Functions for Hidden Layers

- The ReLU activation function is the most common choice for hidden layers in modern neural networks.
- Historically, sigmoid activation functions were widely used, but ReLU has become more prevalent.
- ReLU is preferred due to its computational efficiency and the fact that it avoids flat regions, which can slow down learning.

### Recommendations for Choosing Activation Functions

- Output Layer:
  - Binary classification: Use sigmoid activation function.
  - Regression: Use linear activation function.
  - Non-negative values: Use ReLU activation function.
- Hidden Layers: Use ReLU as the default activation function.
  - Implement in TensorFlow using the appropriate syntax.

### Other Activation Functions

- Researchers have proposed various activation functions beyond sigmoid and ReLU.
- These include tanh, LeakyReLU, and swish, which may offer slight performance improvements in specific cases.
- However, for most applications, sigmoid and ReLU are sufficient and widely used.

### Importance of Activation Functions

- Activation functions are necessary components of neural networks.
- Linear activation functions or the absence of activation functions do not work effectively.
- Activation functions enable neural networks to learn complex patterns and make non-linear transformations.

### Conclusion

- Choosing the right activation functions is crucial for neural network performance.
- Sigmoid is recommended for binary classification, linear for regression, and ReLU for hidden layers.
- ReLU has become the most common choice due to its efficiency and avoidance of flat regions.
- Other activation functions exist but are typically not necessary for most applications.
- Activation functions are essential for enabling neural networks to learn and make non-linear transformations.

## Why do we need a activation functions?

### Introduction

- Neural networks require activation functions for their proper functioning.
- Using a linear activation function in every neuron of a neural network leads to issues.
- Linear activation in all nodes results in a neural network equivalent to linear regression.
- This defeats the purpose of using a neural network for complex modeling.

### Example of a Neural Network

- Consider a neural network with one input node (x), one hidden unit (a1), and one output unit (a2).
- Parameters: w1, b1, w2, b2.
- Activation function: g(z) = z.

### Computation in the Neural Network

- a1 = w1 \* x + b1 (using the activation function g)
- a2 = w2 \* a1 + b2 (using the activation function g)

### Simplification and Linear Function

- By substituting the expression for a1, a2 becomes w2 _ (w1 _ x + b1) + b2.
- Simplifying further, a2 = w _ x + b (where w = w2 _ w1 and b = w2 \* b1 + b2).
- Thus, a2 is just a linear function of the input x.

### Linear Activation and Linear Regression

- Using a neural network with one hidden layer and one output layer with linear activation is equivalent to linear regression.
- Multiple layers in a neural network cannot compute more complex features than a linear function.
- Linear algebra supports this observation as a linear function of a linear function is still linear.

### Equivalent Models

- Using linear activation in all hidden layers and the output layer yields an output equivalent to linear regression.
- Alternatively, using linear activation in hidden layers and a logistic activation in the output layer makes the model equivalent to logistic regression.
- The output a4 can be expressed as 1 / (1 + e^(-wx + b)) for certain values of w and b.

### Importance of Activation Functions

- Neural networks require activation functions other than linear activation.
- Using linear activation in hidden layers restricts the network's ability to learn complex features.
- Common practice is to use ReLU activation for hidden layers.

### Conclusion

- Neural networks need activation functions for effective function approximation.
- Linear activation functions limit the network's potential compared to more sophisticated models.
- Neural networks are versatile and can handle binary classification and regression problems.
