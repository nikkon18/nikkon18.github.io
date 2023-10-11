# 6-Neural Network Training

## TensorFlow implementation

### Neural Network Architecture

Our neural network architecture consists of an input layer, two hidden layers, and an output layer. The input layer takes in images represented by X, while the output layer predicts whether the image is a zero or a one. The first hidden layer has 25 units with a sigmoid activation function, followed by a second hidden layer with 15 units.

### Training Process

we can use these code in TensorFlow to train this network:

```
model = tf.keras.Sequential([
    tf.keras.layers.Dense(25, activation='sigmoid'),
    tf.keras.layers.Dense(15, activation='sigmoid'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(loss='binary_crossentropy', optimizer='adam')

model.fit(X, Y, epochs=10)
```

1. Specify the Model

   We start by defining the model using TensorFlow's `Sequential` API. The `Sequential` model allows us to sequentially string together the layers of the neural network. In our case, we have three layers: the first hidden layer with 25 units and a sigmoid activation function, followed by the second hidden layer, and finally the output layer.

1. Compile the Model

   Once the model is specified, we need to compile it using the `compile` function. The key step here is to specify the loss function we want to use. In our example, we use the binary cross-entropy loss function, which will be explained in more detail in the next video.

1. Train the Model

   After compiling the model, we can now train it using the `fit` function. This function fits the model to the training dataset `X` and the corresponding ground truth labels `Y`. The parameter `epochs` determines the number of steps or iterations of the learning algorithm, such as gradient descent, to run.

### Key Points

It's crucial to understand the code and the underlying concepts behind it. Simply calling the code without comprehension can lead to difficulties when things don't work as expected. Having a conceptual mental framework of the training process helps with debugging and troubleshooting.

## Training Details

### Introduction

- Details of training a neural network in TensorFlow code
- Comparison with logistic regression model training

### Logistic Regression Model Training

1. Specify the input-output function of logistic regression:

   - Logistic regression predicts f(x) = G(z), where G is the sigmoid function applied to the dot product of weights (W) and input features (X) plus the bias term (B).
   - The sigmoid function is defined as: G(z) = 1 / (1 + e^(-z)), where z = W·X + B.

1. Specify the loss and cost functions:

   - Loss function for a single training example (x, y): negative y log(f(x)) - (1 - y) log(1 - f(x)).
   - Cost function (J) is the average of the loss function over the entire training set.

1. Minimize the cost function using gradient descent:

   - Update weights (W) and bias (B) using the gradients of J with respect to W and B.
   - Update equations: W = W - α _ ∂J/∂W, B = B - α _ ∂J/∂B.

### Training a Neural Network in TensorFlow

- The same three steps are used to train a neural network.

#### Step 1: Compute Output

- Specify the neural network architecture using TensorFlow code.

- Example code:

  ```
  model = tf.keras.Sequential([
      tf.keras.layers.Dense(25, activation='sigmoid', input_shape=(input_size,)),
      tf.keras.layers.Dense(15, activation='sigmoid'),
      tf.keras.layers.Dense(1, activation='sigmoid')
  ])
  ```

- The code specifies the number of hidden units in each layer and the activation function used.

#### Step 2: Specify Loss Function

- Use the binary cross-entropy loss function for classification problems:

  - Loss function: -y log(f(x)) - (1 - y) log(1 - f(x)), where y is the ground truth label and f(x) is the output of the neural network.

- Example code:

  ```
  model.compile(loss=tf.keras.losses.BinaryCrossentropy(), optimizer='sgd')
  ```

#### Step 3: Minimize Cost Function

- Use an optimization algorithm (e.g., gradient descent) to minimize the cost function.

- TensorFlow's `fit` function handles the optimization process.

- Example code:

  ```
  model.fit(X, y, epochs=100)
  ```

- TensorFlow uses backpropagation to compute the partial derivatives required for optimization.

### Conclusion

- TensorFlow simplifies the training process by providing high-level functions and libraries.
- Libraries like TensorFlow and PyTorch are commonly used for neural network implementations.
- Understanding the underlying principles helps in troubleshooting and customization.
