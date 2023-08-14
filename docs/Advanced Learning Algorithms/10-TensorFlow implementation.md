# 3 - TensorFlow implementation

## Implementing Inferencing Code with TensorFlow

### Introduction to TensorFlow

- TensorFlow is a leading framework for implementing deep learning algorithms.
- It is widely used for building neural networks and is the focus of this specialization.
- TensorFlow is highly versatile and often used for various applications in machine learning.

### Example: Optimizing Coffee Roasting

- Neural networks can be applied to optimize the quality of coffee beans during roasting.
- Two controllable parameters: temperature and duration of roasting.
- Dataset with different temperature, duration, and label (good or bad coffee).
- Goal: Use neural network inference to predict if a temperature and duration setting will produce good coffee.

### Neural Network Architecture

- Input features: Temperature and duration (e.g., 200 degrees Celsius for 17 minutes).
- Layer 1: Dense layer with 3 units and sigmoid activation function.
- Layer 2: Dense layer with 1 unit and sigmoid activation function.
- Output layer: Binary classification (positive or negative cross) after optional thresholding at 0.5.

### Forward Propagation in TensorFlow

1. Compute a1: Apply Layer 1 function to the input features x.

   - a1 = Layer1(x) = sigmoid(W1 \* x + b1)

1. Compute a2: Apply Layer 2 function to a1.

   - a2 = Layer2(a1) = sigmoid(W2 \* a1 + b2)

1. Compute the final output (a3) and optionally threshold it at 0.5 for binary prediction.

   - a3 = sigmoid(W3 \* a2 + b3)
   - y_hat = 1 if a3 >= 0.5 else 0

### Implementing Inferencing Code in TensorFlow

1. Load the TensorFlow library.
1. Load parameters W and b of the neural network.
1. Define the neural network architecture using dense layers and activation functions.
1. Compute the activations a1, a2, and a3 using forward propagation.
1. Optional: Threshold the output a3 to obtain a binary prediction y_hat.

### Example: Handwritten Digit Classification

- Input features: Pixel intensity values of handwritten digits.
- Layer 1: Dense layer with 25 units and sigmoid activation function.
- Layer 2: Dense layer for intermediate computation.
- Layer 3: Final dense layer for classification.
- Optional: Threshold the output for binary prediction.

### Conclusion

- TensorFlow is a powerful framework for implementing deep learning algorithms.

- Inferencing in neural networks involves forward propagation to compute activation values.

- TensorFlow provides functions for defining neural network architecture and computing activations.

- Proper handling of data structures, such as numpy arrays, is crucial in TensorFlow.

## Data Representation in NumPy and TensorFlow

### Introduction

- Consistent framework for representing data in NumPy and TensorFlow
- Inconsistencies between the two libraries due to their history
- Understanding conventions for correct code implementation

### Representing Data in TensorFlow

- Data set example: coffee features
- TensorFlow convention: `x` represented as a matrix
- Matrix representation: 2D array of numbers
- Convention: Dimension = Number of rows x Number of columns
- Storing matrix in code: `x = np.array([[1, 2, 3], [4, 5, 6]])`

### Examples of Matrix Dimensions

- Example 1: 2 rows, 3 columns (2x3 matrix)
- Example 2: 4 rows, 2 columns (4x2 matrix)
- Matrices can have different dimensions: 1x2, 2x1, etc.
- Representing input feature vectors:
  - Example 1: `x = np.array([[200, 17]])` (1x2 matrix)
  - Example 2: `x = np.array([[200], [17]])` (2x1 matrix)
  - Difference between double and single square brackets

### 1D Vectors in TensorFlow

- Convention: Use matrices to represent data in TensorFlow
- 1D vector vs. 2D matrix
- Code convention in TensorFlow: 2D matrices for data representation
- Efficiency advantage for large datasets in TensorFlow

### Tensor in TensorFlow

- Tensor: Data type for storing and computing on matrices efficiently
- Tensor is a way to represent matrices
- Conversion between tensor and NumPy array: `a1.numpy()`

### Activation Outputs in TensorFlow

- Example: Layer 2 with sigmoid activation
- Output `a2` is a 1x1 matrix (1D array)
- Conversion between tensor and NumPy array: `a2.numpy()`

### Conclusion

- Representing data in TensorFlow and NumPy
- Conversion between tensor and NumPy array
- Unfortunate history leading to inconsistencies
- Awareness of conventions when writing code

## Building Neural Networks in TensorFlow

### Introduction

- Recap of previous knowledge on TensorFlow
- Different approach to building neural networks
- Sequential function in TensorFlow for stringing together layers

### Creating a Neural Network

- Manual approach: Create layers and perform forward propagation step by step
- Sequential approach: Tell TensorFlow to string layers together automatically

### Training a Neural Network

- Input data: Training set (X) and target labels (Y)
- Store data in numpy arrays
- Two functions for training: `model.compile` and `model.fit`

### Inference with a Neural Network

- Forward propagation for new examples (X_new)
- Use `model.predict` to obtain output values (a2)
- Sequential model compiles and trains the neural network
- Inference can be done using the compiled model

### Simplifying the Code

- Convention in TensorFlow for compact code
- Sequential model with layers defined directly
- Example: Dense layers with sigmoid activation

### Applying the Approach to Digit Classification

- Similar process for different examples (e.g., digit classification)
- Define layers and string them together using sequential function
- Store data in a matrix and use `model.compile` and `model.fit`
- Inference with `model.predict`

### Understanding the Code

- Importance of understanding the code's functionality
- Implementing forward propagation from scratch for deeper understanding
- Using libraries efficiently but also comprehending the underlying processes

### Conclusion

- Building neural networks in TensorFlow
- Sequential function for stringing together layers
- Training and inference processes using model functions
- Balance between using libraries efficiently and understanding code functionality
