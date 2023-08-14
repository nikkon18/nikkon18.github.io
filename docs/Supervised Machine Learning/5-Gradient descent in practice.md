# 5 - Gradient descent in practice

## Feature Scaling for Improved Gradient Descent

### Introduction

- Feature scaling can enhance the performance of gradient descent.
- Scaling ensures that features with different value ranges do not hinder convergence.
- Rescaling features to comparable ranges enables faster gradient descent.

### Understanding the Impact of Feature Size

- Example: Predicting house prices using size (x1) and number of bedrooms (x2).
- x1 ranges from 300 to 2000 square feet, while x2 ranges from 0 to 5 bedrooms.
- Parameters: w1, w2, and b.

### Effect of Parameter Choices

- Incorrect parameter choices can lead to inaccurate predictions.
- Example: For a house with 2000 sq. ft., 5 bedrooms, and $500,000 price:
  - Incorrect parameters: w1 = 50, w2 = 0.1, b = 50.
    - Predicted price: $100,150,050 (far from actual price).
  - Correct parameters: w1 = 0.1, w2 = 50, b = 50.
    - Predicted price: $500,000 (reasonable estimate).

### Relationship to Gradient Descent

- Feature size affects parameter choices and convergence.
- Scatter plot: x1 (size) vs. x2 (bedrooms).
- Contour plot of cost function: x1 (0-1) vs. x2 (10-100).
- Tall and skinny contours for large x1 range, small x2 range.
- Small changes in w1 have a significant impact on predictions and cost (J).
- Gradient descent may oscillate before reaching the global minimum.

### Importance of Feature Scaling

- Scaling features mitigates issues with varying value ranges.
- Rescale x1 and x2 to comparable ranges (e.g., 0-1).
- Transformed data leads to circular contours in the cost function.
- Gradient descent follows a more direct path to the global minimum.

### Conclusion

- Feature scaling is crucial for efficient gradient descent.
- Features with disparate value ranges can impede convergence.
- Rescaling features to comparable ranges enhances the performance of gradient descent.
- Scaling ensures that all features contribute equally to the learning process.

## Feature Scaling for Improved Gradient Descent

### Introduction

- Feature scaling improves gradient descent performance.
- Scaling makes features with different value ranges comparable.
- Scaling methods: Maximum scaling, mean normalization, Z-score normalization.

### Maximum Scaling

- Divide each feature value by its maximum to obtain a scaled version.
- Example: x1 ranges from 3-2000, x2 ranges from 0-5.
- Scale x1: Divide each value by 2000.
- Scale x2: Divide each value by 5.
- Scaled features range from 0-1.

### Mean Normalization

- Center features around zero by subtracting the mean.
- Divide by the range of values to normalize.
- Example: x1 mean = 600 sq. ft., x2 mean = 2.3 bedrooms.
- Normalize x1: Subtract mean and divide by (2000-300).
- Normalize x2: Subtract mean and divide by (5-0).
- Normalized features range from -1 to 1.

### Z-score Normalization

- Use the mean and standard deviation to normalize features.
- Calculate mean (Mu) and standard deviation (Sigma) for each feature.
- Example: x1 Mu = 600, Sigma = 450; x2 Mu = 2.3, Sigma = 1.4.
- Normalize x1: Subtract Mu and divide by Sigma.
- Normalize x2: Subtract Mu and divide by Sigma.
- Normalized features have a mean of 0 and standard deviation of 1.

### Importance of Feature Scaling

- Scaling facilitates faster convergence of gradient descent.
- Features with similar ranges prevent oscillation and improve performance.
- Aim for features to range between -1 and 1 (flexible guideline).
- Scaling handles disparate ranges and enhances algorithm efficiency.

### Conclusion

- Feature scaling is essential for gradient descent effectiveness.
- Scaling methods include maximum scaling, mean normalization, and Z-score normalization.
- Scaling ensures features contribute equally and aids convergence.
- Implementing feature scaling improves the performance of machine learning models.

## Understanding Convergence of Gradient Descent

### Introduction

- Convergence refers to the process of finding parameters close to the global minimum of the cost function.
- Recognizing convergence helps in selecting an appropriate learning rate (Alpha).
- Plotting the cost function J at each iteration aids in assessing convergence.

### Learning Curve

- Plot J against the number of iterations of gradient descent.
- Horizontal axis: Number of iterations.
- Vertical axis: Cost J.
- Learning curve shows the change in J after each iteration.
- Ideally, J should decrease with each iteration.
- If J increases after an iteration, Alpha may be too large or there may be a bug in the code.
- Convergence is indicated when the curve levels off and J no longer decreases significantly.

### Determining Convergence

- Examining the learning curve helps identify if gradient descent is converging.
- Convergence iterations vary across applications.
- Creating a learning curve graph assists in determining when training can be stopped.
- Automatic convergence tests can also be employed.
- Use a small number epsilon as a threshold for J decrease in one iteration.
- If J decreases by less than epsilon, convergence is declared.

### Choosing the Right Threshold

- Selecting the appropriate epsilon threshold can be challenging.
- Graphical analysis of the learning curve provides insights into convergence.
- Observing the learning curve graph warns of potential issues with gradient descent.

### Conclusion

- Convergence is crucial in finding optimal parameter values.
- Learning curves display the change in cost J over iterations.
- Proper convergence is characterized by a decreasing J.
- Choosing the right learning rate and threshold epsilon is essential for successful convergence.

## Choosing the Learning Rate in Gradient Descent

### Introduction

- The learning rate (Alpha) selection is crucial for effective gradient descent.
- A small Alpha leads to slow convergence, while a large Alpha may prevent convergence.
- Plotting the cost function over iterations helps in identifying issues with the learning rate.

### Effects of Learning Rate

- If the learning rate is too large, the cost may increase instead of decreasing.
- Overshooting the minimum due to large updates causes this behavior.
- A smaller learning rate helps reduce overshooting and ensures gradual descent towards the minimum.

### Debugging Gradient Descent

- Consistently increasing costs indicate a possible issue with the learning rate.
- Incorrectly updating parameters using the derivative term can lead to this problem.
- Ensure the code updates parameters as w_1 updated by w_1 - Alpha \* derivative term.

### Debugging Tip

- Set Alpha to a very small value to debug gradient descent.
- If the cost doesn't decrease on every iteration, there may be a bug in the code.
- Note that using a very small Alpha is not efficient for actual training.

### Choosing the Learning Rate

- A trade-off exists between convergence speed and the learning rate's size.
- Try a range of values for Alpha and observe the cost function's behavior.
- Plot the cost function J against the number of iterations for each Alpha.
- Select a learning rate that consistently and rapidly decreases the cost.

### Technique for Choosing Alpha

- Start with a small learning rate, e.g., 0.001, and run gradient descent for a few iterations.
- Increase Alpha gradually, e.g., try 0.003 (three times larger than the previous Alpha).
- Continue this process, trying larger values like 0.01 (roughly three times larger than the previous Alpha).
- Find the smallest Alpha that causes the cost to increase and the largest reasonable Alpha.
- Choose a learning rate slightly smaller than the largest reasonable value found.

### Importance of Experimentation

- Trying different learning rates helps in finding the optimal choice.
- It is important to experiment and gain intuition about different Alpha values.
- Feature scaling and the learning rate's impact can be explored in the optional lab.

### Conclusion

- Choosing the right learning rate is crucial for effective gradient descent.
- A large learning rate can cause overshooting and prevent convergence.
- Debugging and experimentation help in finding an appropriate learning rate.
- Balancing convergence speed and the learning rate's size is essential for successful training.

## Feature Engineering for Improved Learning Algorithm Performance

### Introduction

- Choosing or engineering the right features is crucial for a learning algorithm's success.
- Feature engineering involves transforming or combining existing features to improve predictions.
- We'll explore feature engineering using the example of predicting house prices.

### Initial Features

- Two features for each house: x_1 (frontage/width) and x_2 (depth).
- Model: f(x) = w_1x_1 + w_2x_2 + b, where x_1 is frontage and x_2 is depth.

### Introducing a New Feature

- Area of the land can be a more predictive feature than frontage and depth individually.
- Define a new feature, x_3, as x_1 \* x_2 (area of the plot of land).
- Updated model: f_w,b(x) = w_1x_1 + w_2x_2 + w_3x_3 + b.
- The model can now choose parameters w_1, w_2, and w_3 based on feature importance.

### Feature Engineering

- Feature engineering involves transforming or combining features to aid the learning algorithm.
- Use domain knowledge or intuition to design new features for better predictions.
- Creating new features can significantly improve the model's performance.

### Benefits of Feature Engineering

- Enables fitting curves and non-linear functions, not just straight lines.
- Helps capture complex relationships and patterns in the data.

### Conclusion

- Feature engineering plays a vital role in improving learning algorithm performance.
- By creating new features based on domain knowledge or intuition, we can enhance predictions.
- Feature engineering allows fitting curves and non-linear functions to capture complex patterns.

## Polynomial Regression and Feature Engineering

### Introduction

- Fitting straight lines may not be sufficient for certain datasets.
- Polynomial regression combines feature engineering and multiple linear regression to fit curves.
- Polynomial regression allows for non-linear functions to be fitted to the data.

### Example: Housing Dataset

- Dataset with feature x as the size of houses in square feet.
- Straight lines do not fit the data well.
- The need for curves motivates quadratic and cubic functions.

### Polynomial Regression

- Quadratic function example: f(x) = w*1 * x + w*2 * x^2 + b.
- Cubic function example: f(x) = w*1 * x + w*2 * x^2 + w_3 \* x^3 + b.
- Additional features are created by raising the original feature to a power.
- Feature scaling becomes important when using higher power features.

### Choosing Features

- The choice of features depends on the problem and desired model.
- Different models with different features can be compared for performance.
- Feature engineering allows for flexibility in selecting features.

### Alternative Features

- Other choices for features include square root functions.
- Example: f(x) = w*1 * x + w*2 * sqrt(x) + b.
- Feature engineering provides a wide range of feature options.

### Importance of Feature Engineering

- Feature engineering improves model performance and accuracy.
- Polynomial regression enables better modeling of complex relationships.

### Practical Implementation

- Scikit-learn is a popular machine learning library for implementing regression models.
- Familiarity with implementing algorithms is important alongside using libraries.

### Conclusion

- Polynomial regression combines feature engineering and multiple linear regression.
- Feature engineering allows fitting curves and non-linear functions to data.
- Scikit-learn is a valuable tool for practical implementation.
- Understanding algorithm implementation is crucial for model understanding and effective usage.
