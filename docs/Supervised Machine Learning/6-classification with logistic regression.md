# 6 - classification with logistic regression

## Logistic Regression

### Classification Problems

- Linear regression is not suitable for classification problems
- Classification predicts discrete values, not continuous
- Examples: spam email detection, fraudulent transaction detection, tumor classification

### Binary Classification

- Binary classification: output variable y has two possible values (0 or 1)
- Classifying between two possible classes or categories
- Common designations: no/yes, false/true, 0/1

### Positive and Negative Classes

- False/zero class: negative class
- True/one class: positive class
- Example: spam classification
  - Non-spam email: negative example (y = 0)
  - Spam email: positive training example (y = 1)
- Negative and positive do not imply good versus bad, but the absence or presence of something

### Building a Classification Algorithm

- Example: classifying tumor malignancy
- Training set: tumor size (x) and corresponding label (y)
- Linear regression can be attempted, but it predicts continuous values

### Threshold and Decision Boundary

- Applying a threshold (e.g., 0.5) to distinguish categories
- Threshold intersects the best-fit line, creating a decision boundary
- Values below the threshold: predicted as 0
- Values equal to or above the threshold: predicted as 1

### Limitations of Linear Regression for Classification

- Addition of a new training example can significantly shift the decision boundary
- Linear regression fails to maintain consistent classification with new data

### Logistic Regression

- Logistic regression: algorithm for binary classification
- Output value between 0 and 1
- Solves binary classification problems effectively
- Name can be confusing as it contains "regression" while used for classification

### Conclusion

- Logistic regression is the preferred algorithm for binary classification
- Linear regression is not suitable for classification due to its limitations

## Logistic Regression

### Introduction

- Logistic regression is a widely used classification algorithm
- Used for classifying whether a tumor is malignant or benign
- Positive class (malignant): labeled as 1, represented by "yes"
- Negative class (benign): labeled as 0, represented by "no"

### Sigmoid Function

- Sigmoid function (logistic function) is important in logistic regression
- Outputs values between 0 and 1
- Denoted as g(z), where z is a linear function of features (wx + b)
- Formula: g(z) = 1 / (1 + e^(-z))
- e is a mathematical constant (~2.7)
- Sigmoid function has an S-shaped curve

### Logistic Regression Model

- Combining the linear function (wx + b) and sigmoid function (g(z))
- Logistic regression model: f(x) = g(wx + b)
- Outputs a value between 0 and 1
- Interpretation: probability of y = 1 given input x

### Interpreting Logistic Regression Output

- Output probability represents the chance of y = 1
- Example: if model outputs 0.7 for a tumor size x
- Interpretation: 70% chance that the tumor is malignant (y = 1)
- Complementary probability: 30% chance that the tumor is benign (y = 0)

### Conclusion

- Logistic regression is a widely used classification algorithm
- Applies the sigmoid function to a linear function of features
- Output represents the probability of the positive class (y = 1)
- Complementary probability represents the probability of the negative class (y = 0)

## Logistic Regression: Understanding Decision Boundaries

### Introduction

- Recap of logistic regression model
- Two steps: compute z = wx + b, apply sigmoid function g(z)
- Formula: f(x) = g(wx + b)

### Decision Boundary

- Defining when to predict y = 1 or y = 0
- Threshold approach: set threshold (e.g., 0.5)
- If f(x) >= 0.5, predict y = 1
- If f(x) < 0.5, predict y = 0

### Deriving Decision Boundary

- f(x) = g(z), so f(x) >= 0.5 if g(z) >= 0.5
- g(z) >= 0.5 when z >= 0
- z = wx + b, so z >= 0 when wx + b >= 0
- Decision boundary: wx + b = 0

### Visualizing Decision Boundary

- Example: two features (x1, x2)
- Training set with positive (y = 1) and negative (y = 0) examples
- Decision boundary equation: wx1 + wx2 + b = 0
- Example parameters: w1 = 1, w2 = 1, b = -3
- Decision boundary: x1 + x2 - 3 = 0

### Non-Linear Decision Boundaries

- Polynomial features in logistic regression
- Example with z = w1x1^2 + w2x2^2 + b
- Decision boundary: x1^2 + x2^2 = 1 (circle)
- Complex decision boundaries possible with higher-order polynomials
- Logistic regression can fit complex data

### Linear Decision Boundaries

- Without higher-order polynomials, decision boundary is linear
- Decision boundary will always be a straight line
- Features x1, x2, x3, etc. result in linear decision boundary

### Conclusion

- Logistic regression uses decision boundary to make predictions
- Decision boundary determined by parameters (w) and bias (b)
- Can be linear or non-linear depending on features and polynomials

In conclusion, logistic regression models use decision boundaries to predict whether an instance belongs to a certain class. The decision boundary is determined by the parameters (w) and bias (b) of the logistic regression model. It can be linear or non-linear, depending on the features and the use of polynomial terms. Logistic regression is capable of fitting complex data by incorporating higher-order polynomials. However, if only linear features are used, the decision boundary will always be a straight line. Understanding decision boundaries helps in visualizing how logistic regression makes predictions and how different models can be obtained by varying the parameters and features.

## Cost Function for Logistic Regression

### Introduction

- The cost function measures how well a set of parameters fits the training data.
- The squared error cost function is not ideal for logistic regression.
- We need a different cost function that can help us choose better parameters.

### Logistic Regression Model

- Training set consists of rows representing patient visits and diagnoses.
- Each training example has n features (e.g., tumor size, age).
- Target label y takes values 0 or 1.
- Logistic regression model: f(x) = 1 / (1 + e^(-wx + b))

### Squared Error Cost Function for Linear Regression

- Cost function for linear regression: J(w, b) = (1/2m) \* ∑(f(x) - y)^2
- This cost function is convex and suitable for linear regression.

### Non-Convexity of Squared Error Cost Function for Logistic Regression

- Using squared error cost function with logistic regression leads to a non-convex cost function.
- Gradient descent may get stuck in local minima.
- We need a convex cost function to guarantee convergence to the global minimum.

### Redefining the Cost Function for Logistic Regression

- Modify the cost function to ensure convexity.
- Introduce a loss function L(f(x), y) for a single training example.
- Define the loss function for logistic regression:
  - If y = 1, loss = -log(f(x))
  - If y = 0, loss = -log(1 - f(x))

### Analysis of Loss Function for y = 1

- Plotting the loss function for y = 1:
  - Logarithm of f(x) is a convex curve intersecting the horizontal axis at f = 1.
  - Negative log of f(x) is a flipped curve that incentivizes accurate predictions.
  - Higher loss for lower predicted values when true label is 1.

### Analysis of Loss Function for y = 0

- Plotting the loss function for y = 0:
  - Loss is negative log of 1 - f(x).
  - Higher loss as predicted value moves away from true label 0.
  - Loss approaches infinity as prediction approaches 1.

### Conclusion

- Squared error cost function is unsuitable for logistic regression.
- New loss function ensures convexity of the cost function.
- Gradient descent can reliably find the global minimum.
- The cost function is an average of the loss function on all training examples.
- In the next video, we'll define the overall cost function for the entire training set and simplify its notation.

## Lecture Notes: Logistic Regression

### Introduction

- Logistic regression is a model used for classification tasks.
- Parameters w and b need to be determined to fit the model.
- The goal is to minimize the cost function J(w, b) by using gradient descent.

### Finding the Parameters

- The parameters w and b are chosen to make predictions or estimate the probability of a label being one.
- The cost function J(w, b) is minimized using gradient descent.
- Gradient descent involves updating parameters iteratively: w = w - α _ ∂J/∂w and b = b - α _ ∂J/∂b.

### Derivatives of the Cost Function

- The derivative of J with respect to w_j is given by 1/m _ ∑(f - y) _ x_j.
- f is the predicted value, y is the label, x_j is the j-th feature, and m is the number of training examples.
- The derivative of J with respect to b is given by 1/m \* ∑(f - y).

### Gradient Descent for Logistic Regression

- The derivative expressions are plugged into the gradient descent update equations.
- Logistic regression and linear regression share similar update equations, but the definition of f(x) differs.
- In logistic regression, f(x) is the sigmoid function applied to wx + b.

### Convergence and Vectorization

- Similar to linear regression, monitoring convergence is essential for gradient descent in logistic regression.
- Vectorization can be used to speed up the computation of gradient descent.
- Feature scaling, which scales features to similar ranges, can aid convergence in logistic regression.
