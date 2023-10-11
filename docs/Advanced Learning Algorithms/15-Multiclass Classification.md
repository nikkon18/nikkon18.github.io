# 8-Multiclass Classification

## Muticalss

### Introduction

Multiclass classification refers to classification problems where there are more than two possible output labels. Unlike binary classification, which distinguishes between two classes (e.g., 0 and 1), multiclass classification deals with multiple discrete categories.

### Examples

1. Handwritten Digit Classification: In this problem, we aim to recognize handwritten digits, not just 0 and 1, but all 10 possible digits.
1. Disease Classification: Classifying patients into multiple disease categories, such as three or five different possible diseases.
1. Visual Defect Inspection: Inspecting manufactured parts for defects like scratches, discoloration, or chips, where there are multiple classes of defects.

### Multiclass Classification vs. Binary Classification

In binary classification, we have a dataset with features x1 and x2, and logistic regression estimates the probability of y being 1 given the features x. However, in multiclass classification, the dataset consists of multiple classes. For example, we may have four classes represented by O, X, ▲, and ■. Instead of estimating the chance of y being equal to 1, we want to estimate the chances of y being equal to 1, 2, 3, or 4. The algorithm used for multiclass classification can learn decision boundaries that divide the space into multiple categories.

### Softmax Regression Algorithm

The softmax regression algorithm is a generalization of logistic regression specifically designed for multiclass classification problems. It extends logistic regression to estimate the probabilities of each class label. By learning a decision boundary, the algorithm can classify examples into multiple categories.

### Multiclass Classification with Neural Networks

After understanding softmax regression, we can integrate it into a neural network architecture. This allows us to train a neural network to solve multiclass classification problems effectively.

### Conclusion

Multiclass classification expands the scope of classification problems beyond binary classification. By employing algorithms like softmax regression and neural networks, we can estimate the probabilities of multiple classes and classify examples into multiple categories.

## Softmax Regression

### Introduction

- Softmax regression is a generalization of logistic regression for multiclass classification.
- Logistic regression applies to binary classification, where the output can be either 0 or 1.
- Softmax regression computes probabilities for multiple output classes.

### Logistic regression recap

- Logistic regression computes the probability of the output being 1 given the input features.
- It uses the sigmoid function to estimate the probability.
- The probabilities of 0 and 1 must add up to 1.

### Generalizing to softmax regression

- Softmax regression extends logistic regression to multiple output classes.
- Let's consider an example where the output can be 1, 2, 3, or 4.
- Softmax regression computes values z for each output class.
- It uses parameters w and b for each class.
- The softmax regression formula:
  - Compute a for each class using the softmax function.
  - Each a value represents the estimated probability of the corresponding class.

### Softmax regression formula

- Softmax regression computes a for each output class.
- The formula for a class j:
  - Compute zj using parameters wj and bj.
  - Compute aj using the softmax function.
- The softmax function:
  - Calculate the exponential of each z value.
  - Divide the exponential of the current z by the sum of exponentials of all z values.
  - The resulting aj represents the estimated probability of class j.

### Softmax regression for n possible output classes

- Softmax regression can handle n possible output classes.
- The formula for softmax regression with n classes:
  - Compute zj using parameters wj and bj.
  - Compute aj using the softmax function, summing over all classes.
- The sum of all a values always adds up to 1.

### Softmax regression vs. logistic regression

- Softmax regression reduces to logistic regression when there are only two output classes.
- The parameters and formulas differ slightly, but the concepts are similar.
- Softmax regression is a generalization of logistic regression.

### Cost function for softmax regression

- The cost function measures the error of the model.
- For logistic regression, the loss function is based on probabilities.
- The loss function for softmax regression:
  - The loss is the negative logarithm of the estimated probability of the correct class.
  - The loss is computed for the actual class value.
- The goal is to minimize the loss function over the entire training set.

### Conclusion

- Softmax regression is a generalization of logistic regression for multiclass classification.
- It computes probabilities for each output class using the softmax function.
- The cost function measures the error of the model.
- Softmax regression can be used to build multiclass classification algorithms.

## Neural Networks with Softmax output

### Introduction

- Softmax regression is used for multi-class classification in neural networks.
- It can be applied to the output layer of a neural network to estimate class probabilities.

### Softmax Output Layer

- Modify the neural network architecture for multi-class classification.
- Use a Softmax output layer with as many units as there are classes.
- Each unit represents the estimated probability of a specific class.

### Forward Propagation

- Compute activations for each layer in the neural network.
- For the Softmax output layer:
  - Compute z values (Z1 to Z10) using parameters and previous layer activations.
  - Apply the Softmax function to calculate estimated probabilities (a1 to a10).
  - Each a value represents the chance of the corresponding class.

### Softmax Function

- The Softmax function calculates the estimated probability of each class.
- For each class j:
  - Compute zj using parameters and previous layer activations.
  - Compute aj using the Softmax function.
- The denominator in the Softmax function is the sum of exponentials of all z values.
- The resulting aj represents the estimated probability of class j.

### Softmax Activation Function

- The Softmax layer is sometimes called the Softmax activation function.
- Unlike other activation functions, each activation value depends on all z values.
- To compute a1 to a10, all z1 to z10 values are used simultaneously.

### Implementing Softmax Regression in TensorFlow

- In TensorFlow, use the Sequential model to build the neural network.
- Specify the layers sequentially: input layer, hidden layers, and Softmax output layer.
- Use the ReLU activation function for hidden layers.
- Use the Softmax activation function for the output layer.
- The cost function for Softmax regression is called SparseCategoricalCrossentropy.
- It handles multi-class classification with sparse target labels.

### Training the Model

- Train the model using TensorFlow's training code.
- The process is similar to logistic regression.
- Use the recommended version of the code for better accuracy.
- Avoid using the code shown in the lecture, as a better version will be introduced later.

### Conclusion

- Softmax regression is applied to the output layer of a neural network for multi-class classification.
- It estimates the probabilities of each class using the Softmax function.
- The implementation in TensorFlow involves specifying the layers and training the model.
- Use the recommended code for improved accuracy in computing class probabilities.

## Improved implementation of softmax

### Introduction

- Gradient descent is a widely-used optimization algorithm in machine learning.
- Foundation for linear regression, logistic regression, and early neural network implementations.
- Explore an algorithm that speeds up neural network training compared to gradient descent.

### Gradient Descent Overview

- Gradient descent update: `w_j = w_j - α * ∂J/∂w_j`
- α (learning rate) controls step size.
- Challenge: Choosing the right α.

### The Need for Adaptivity

- Visualize cost function J as ellipses.
- Gradient descent may take small steps in the same direction.
- Solution: Increase α for faster convergence.

#### Adaptive Moment Estimation (Adam)

- Adam stands for Adaptive Moment Estimation.
- It adjusts learning rates for each parameter independently.

### Adam Algorithm

- Increase α if a parameter keeps moving consistently.

- Reduce α if a parameter oscillates.

- Algorithm details are complex (not covered here).

- Implementation in code:

  ```python
  optimizer = tf.keras.optimizers.Adam(learning_rate=1e-3)
  ```

### Choosing the Learning Rate

- Experiment with different initial learning rates.
- Adam is more robust to learning rate selection than traditional gradient descent.
- Fine-tune α for faster learning.

### Conclusion

- Adam optimization algorithm works faster than gradient descent.
- De facto standard in neural network training.
- Safe choice for practitioners.

## Additional Layer Types

### Introduction

- Dense layers have been our focus so far, where every neuron connects to all previous layer activations.
- There are other layer types in neural networks, offering unique properties.
- In this blog, we'll explore a different layer type known as the convolutional layer and its advantages.

### Dense Layers Recap

- Activation in a dense layer depends on all previous layer activations.
- Powerful for many applications.

### Introducing Convolutional Layers

- Convolutional layers have neurons that only focus on specific regions of the input.
- Neurons in a convolutional layer process local input regions.
- Example: Image with handwritten digit "nine."

### Benefits of Convolutional Layers

1. **Speed**: Faster computation due to localized processing.
2. **Data Efficiency**: Requires less training data.
3. **Overfitting**: Less prone to overfitting.

### Convolutional Neural Networks (CNNs)

- CNNs consist of multiple convolutional layers.
- Each layer processes different input regions.
- Can be more effective than dense layers for certain tasks.

### Detailed Example: EKG Signal Classification

- Consider a one-dimensional input, such as an electrocardiogram (EKG) signal.
- Aim: Classify the presence of heart disease.
- First hidden layer: Neurons focus on small windows of the input signal.
- Second hidden layer: Neurons process different window regions.
- Output layer: Makes a binary classification based on the activations from the previous layer.

### Architectural Choices in Convolutional Layers

- Parameters like window size and the number of neurons influence layer effectiveness.
- Careful architectural choices can lead to more powerful neural networks.

### Conclusion

- Convolutional layers offer a unique approach in neural networks.
- They process localized input regions, providing advantages in speed, data efficiency, and overfitting.
- Understanding different layer types helps grasp the diversity of neural network architectures.
- The field of neural networks continues to evolve, with researchers inventing new layer types to build more powerful networks.
