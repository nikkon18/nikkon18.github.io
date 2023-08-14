# 2 - Neural network layer

## Neural Networks layer

### Introduction

- Neural networks consist of layers of neurons
- Layers can be combined to form larger neural networks

### Layer of Neurons

- Example: Demand prediction with input features and output neuron
- Hidden layer contains three neurons

#### Neuron Computation

- Neurons in hidden layer perform logistic regression
- Each neuron has parameters w and b
- Activation value a is computed using logistic function g

#### Neuron Outputs

- Each neuron in hidden layer produces an activation value
- Activation values form a vector passed to the output layer

### Layer Indexing

- Different layers in neural networks are numbered
- Hidden layer is layer 1, output layer is layer 2
- Input layer can be called layer 0
- Superscripts in square brackets denote layer indexing

### Layer 1 Computation

- Layer 1 takes input from the input layer
- Neurons in layer 1 compute activation values using parameters w and b

### Layer 2 Computation

- Layer 2 takes input from layer 1
- Output layer contains a single neuron
- Neuron computes activation value using sigmoid function g

### Binary Prediction

- Optional step: Thresholding for binary prediction
- Output value can be thresholded at 0.5 for binary classification

### Conclusion

- Neural networks consist of layers of neurons
- Each layer performs computations using parameters and activation functions
- Layers are combined to build complex neural network models

## Complex neural Networks

### Introduction

- Neural networks consist of layers of neurons.
- Each layer performs computations using parameters and activation functions.
- Layers are combined to build complex neural network models.

### Neural Network Layers

- Neural network layers take input vectors and produce output vectors.
- Layers are numbered, with the input layer as Layer 0.

### Layer Computation

- Neurons in a layer compute activation values using parameters and activation functions.
- Activation values are computed for each neuron in the layer.

### Layer Indexing

- Layers are indexed using superscripts in square brackets.
- Hidden layers are numbered starting from 1.
- Output layer is the final layer of the network.

### Layer 3 Computation

- Layer 3 takes input from the previous layer (Layer 2).
- Neurons in Layer 3 compute activation values using parameters and activation functions.
- Activation values form a vector, denoted as a_3.

### General Equation for Layer Activation

- The activation of a unit j in layer l is computed using the sigmoid function.
- The activation is calculated as the sigmoid of the dot product of weights and the activation values of the previous layer, plus the bias term.

### Activation Function

- The sigmoid function is commonly used as the activation function in neural networks.
- The activation function outputs the activation values for each unit in a layer.

### Notation and Input Vector

- Input vector X can be denoted as a_0 for consistency.
- The activation values of any layer can be computed using parameters and the activations of the previous layer.

### Inference Algorithm

- The computed activation values can be used for making predictions.
- The inference algorithm uses the computed activations to make predictions.

### Conclusion

- Neural networks are constructed using layers of neurons.
- Each layer performs computations using parameters and activation functions.
- Activation values are computed for each layer based on the previous layer's activations.
- The inference algorithm utilizes the computed activations to make predictions.

## Building Neural Networks

### Introduction to Forward Propagation

- Forward propagation is an algorithm used for making predictions in neural networks.
- It involves computing the activations of neurons in a neural network to go from input to output.

### Motivating Example: Handwritten Digit Recognition

- The example used is binary classification of handwritten digits zero and one.
- An 8x8 image is represented as a matrix of 64 pixel intensity values.
- Neural network architecture:
  - Input layer: 64 units (corresponding to the 64 input features)
  - First hidden layer: 25 units
  - Second hidden layer: 15 units
  - Output layer: 1 unit (predicting the chance of being digit one)

### Sequence of Computations

1. Compute a1: Activation values of the first hidden layer.

   - a1 = sigmoid(W1 \* a0 + b1), where a0 is the input feature vector.

2. Compute a2: Activation values of the second hidden layer.

   - a2 = sigmoid(W2 \* a1 + b2)

3. Compute a3: Activation value of the output layer.

   - a3 = sigmoid(W3 \* a2 + b3)

4. Optional: Threshold a3 at 0.5 to obtain a binary classification label.

### Forward Propagation and Activation Functions

- Forward propagation is also known as propagating activations from left to right.
- Activation values are computed using the sigmoid activation function.

### Conclusion

- Forward propagation is an algorithm used for making predictions in neural networks.
- It involves computing activation values of neurons from input to output.
- Activation values are computed using the sigmoid activation function.
- TensorFlow can be used for implementing neural networks.
