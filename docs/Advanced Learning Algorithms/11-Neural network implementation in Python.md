# 4-Neural network implementation in Python

## Implementing a Dense Layer

- A dense layer represents a single layer of a neural network.
- We can create a function called `dense` to implement this layer.
- The `dense` function takes the activation from the previous layer, as well as the parameters `w` and `b` for the neurons in the current layer.
- We stack the parameters `w` into a matrix and the parameters `b` into a 1D array.
- The `dense` function takes the activation from the previous layer (`a_prev`) and outputs the activations for the current layer.

### Code for `dense` function:

```python
def dense(a_prev, w, b):
    units = w.shape[1]  # Get the number of units in the layer
    a = np.zeros(units)  # Initialize the activations array with zeros

    for j in range(units):
        w_col = w[:, j]  # Extract the jth column of the weight matrix
        z = np.dot(w_col, a_prev) + b[j]  # Compute the weighted sum
        a[j] = sigmoid(z)  # Apply the sigmoid activation function

    return a
```

### Code for Forward Propagation:

```python
# Define the parameters for each layer
w_1, b_1 = ..., ...  # Parameters for the first hidden layer
w_2, b_2 = ..., ...  # Parameters for the second hidden layer

# Compute the activations for each layer
a_1 = dense(x, w_1, b_1)  # Activation of the first hidden layer
a_2 = dense(a_1, w_2, b_2)  # Activation of the second hidden layer

# If there is an output layer, define the output as the activation of the last layer
f_x = a_2  # Output of the neural network

# Return the output
return f_x
```
