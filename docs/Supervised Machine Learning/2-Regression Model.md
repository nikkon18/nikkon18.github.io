# 2 - Regression Model

## Linear Regression lesson1

### Introduction

- Supervised learning is a process of training a model using a dataset with labeled outputs.
- Linear regression is a type of supervised learning model that predicts numerical outputs, such as the price of a house based on its size.

### Linear Regression Model

- Linear regression model fits a straight line to the data.
- The model can be used to predict the price of a house based on its size.
- Linear regression is a type of regression model.

### Regression vs. Classification

- Regression models predict numerical outputs, while classification models predict discrete categories.
- Linear regression is an example of a regression model.

### Training Set

- The dataset used to train the model is called a training set.
- The input variable in machine learning notation is denoted as lowercase x.
- The output variable is denoted as lowercase y.
- The training set contains multiple training examples, with each row corresponding to a different example.
- The total number of examples is denoted as m.
- A specific example is denoted as (x^i, y^i), where i is an index into the training set.

### Notation for Describing Data

- Standard notation to denote the input is lowercase x.
- The output variable is denoted as lowercase y.
- To refer to a specific training example, use the notation x^(i), y^(i).
- The superscript i refers to a specific row in the dataset.

## Linear Regression lesson2

### Introduction

- Supervised learning algorithm inputs a dataset.
- Training set in supervised learning includes input features and output targets.
- The job of the function f is to take a new input x and output an estimate or prediction y-hat.
- The prediction y-hat is the estimated value of y.
- The model's prediction is the estimated value of y.
- The function f is called the model, x is the input or input feature, and y-hat is the output or prediction.

### Linear Regression

- Linear regression is the process of fitting a straight line to a set of data points.
- The function f is a straight line represented as `f(x) = wx + b`.
- `w` and `b` are numbers chosen to determine the prediction `y-hat` based on the input feature `x`.
- Linear regression is a simple and easy-to-work-with foundation for more complex models.
- Linear regression with one variable is called univariate linear regression.

### Cost Function

- Constructing a cost function is one of the most important things in making linear regression work.
- The cost function measures the difference between the predicted value and the actual value of the output target.
- The goal is to minimize the cost function to get the best-fit line for the data.

### Conclusion

- Supervised learning algorithms input a dataset and output a function f that makes predictions based on the input features.
- Linear regression is a simple and easy-to-work-with foundation for more complex models.
- Constructing a cost function is important to minimize the difference between predicted and actual output values.

## Cost function formula

### Introduction

- Linear regression is the process of fitting a straight line to a set of data points.
- The function f is a straight line represented as `f(x) = wx + b`.
- `w` and `b` are called the parameters or coefficients of the model.
- The goal of linear regression is to choose values for `w` and `b` so that the line defined by `f` fits the data well.

### Cost Function

- The cost function measures how well a line fits the training data.
- The squared error cost function is widely used in machine learning for linear regression.
- The cost function is defined as `J(w, b) = 1/(2m) * sum((f(x^i) - y^i)^2)` where `m` is the number of training examples.
- The cost function compares the predicted value `f(x^i)` to the true target value `y^i`.
- The cost function is used to find values of `w` and `b` that make the cost function small.
- By convention, the cost function is divided by `2m` to make calculations look neater.

### Conclusion

- Linear regression involves fitting a straight line to a set of data points.
- The cost function measures how well a line fits the training data.
- The squared error cost function is widely used in machine learning for linear regression.
- The cost function is used to find values of `w` and `b` that make the cost function small.

## Cost Function Intuition

### The cost function J measures how well a choice of w and b fit the training data.

- The goal is to find values for w and b that minimize J, making the squared errors as small as possible.

### J(w, b) = 1/2m \* Σ(i=1 to m) (fw(x(i)) - y(i))^2

- Foreach training example (x(i), y(i)), the cost function calculates the squared difference between the predicted value fw(x(i)) and the actual value y(i).
- The cost function then takes the average of these squared differences across all training examples.
- The factor of 1/2m is included to make calculations simpler.

### Minimizing the Cost Function

- The goal is to find values for w and b that minimize the cost function J.
- This is done using optimization algorithms such as gradient descent.
- Gradient descent iteratively adjusts the values of w and b to find the minimum of the cost function.
- By updating the values of w and b in the direction of steepest descent, the algorithm converges to the minimum.

### Visualizing the Cost Function

- The cost function J(w, b) can be visualized as a bowl-shaped surface in three-dimensional space.
- The x-axis represents the value of w, the y-axis represents the value of b, and the z-axis represents the value of J.
- The goal is to find the values of w and b that correspond to the lowest point on the surface, indicating the minimum cost.

### Conclusion

- The cost function measures how well a choice of w and b fit the training data.
- The goal is to find values for w and b that minimize the cost function.
- Optimization algorithms such as gradient descent are used to iteratively update the values of w and b to converge to the minimum of the cost function.
