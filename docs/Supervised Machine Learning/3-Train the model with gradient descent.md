# 3 - Train the model with gradient descent

## Gradient Descent for Minimizing Cost Function

### Introduction

- Gradient descent is an algorithm used to minimize any function, not just a cost function for linear regression.
- It can be used to minimize a cost function, J(w,b), which is a measure of how well the line f(x) fits the data points.

### Objective

- The objective is to minimize J over the parameters w and b.
- You want to pick values for w and b that give you the smallest possible value of J.

### Algorithm

- Start with some initial guesses for w and b. A common choice is to set them both to 0.
- Keep changing the parameters w and b a bit every time to try to reduce the cost J of w, b until hopefully J settles at or near a minimum.
- Gradient descent applies to more general functions, including other cost functions that work with models that have more than two parameters.

### Visualizing Gradient Descent

- Imagine that the cost function J is a view of a slightly hilly outdoor park or a golf course where the high points are hills and the low points are valleys.
- The goal is to start at the top of a hill and get to the bottom of one of these valleys as efficiently as possible.
- The algorithm spins around 360 degrees and looks around to find the direction of steepest descent.
- The direction of steepest descent is the best direction to take your next step downhill.
- After taking this step, repeat the process and keep going until you find yourself at the bottom of the valley, at a local minimum.

### Properties of Gradient Descent

- Gradient descent has an interesting property where the choice of initial parameters affects the final result.
- If you start the algorithm with different initial parameters, you may end up at a different local minimum.
- The bottoms of both the first and the second valleys are called local minima.

### Conclusion

- Gradient descent is an algorithm used to minimize a cost function J over the parameters w and b.
- The algorithm starts with some initial guesses for w and b and keeps changing the parameters to reduce the cost J until it settles at or near a minimum.
- The algorithm finds the direction of steepest descent and takes steps downhill until it reaches a local minimum.
- The choice of initial parameters affects the final result, and different initial parameters may lead to different local minima.

## Implementing Gradient Descent Algorithm

### Introduction

- Implementing the gradient descent algorithm
- Updating the parameter `w` on each step
- The update equation: `w = w - α * (dJ(wb)/dw)`

### Understanding the Equation

- `=` is the assignment operator in programming contexts
- `α` is the learning rate, a small positive number between 0 and 1
- Learning rate controls the step size downhill
- `(dJ(wb)/dw)` is the derivative term of the cost function `J`
- Derivative term indicates the direction to take a "baby step"

### Updating `w` and `b`

- Model has two parameters, `w` and `b`
- To update `b`, use similar equation with `dJ(wb)/db`
- Repeat the update steps until the algorithm converges
- Convergence is when `w` and `b` no longer change much with each step

### Simultaneous Update

- Update both `w` and `b` simultaneously
- Compute both update terms and store in temporary variables
- Copy the values of temporary variables to `w` and `b`

### Incorrect Implementation

- Non-simultaneous update will probably work but not correct
- The updated `w` and `b` values differ from the correct simultaneous update

### Conclusion

- Gradient descent is a powerful algorithm for optimizing models
- Derivatives come from calculus, but not necessary to know calculus to use gradient descent

## Gradient Descent Intuition and Learning Rate

### Introduction

- Gradient descent algorithm updates model parameters w and b
- Learning rate alpha controls the step size in updating w and b
- Derivative term dJ/dw describes the slope of the cost function J at a given point
- Positive derivative means move to the left on the graph and decrease w
- Negative derivative means move to the right on the graph and increase w
- The goal is to reach the minimum of the cost function J

### Gradient Descent on One Parameter

- Consider a cost function J of just one parameter w
- Plot the cost as a function of w
- Gradient descent updates w to w - alpha \* dJ/dw
- Positive derivative means decrease w, move to the left on the graph
- Negative derivative means increase w, move to the right on the graph
- Goal is to decrease the cost J and reach the minimum

### Choosing the Learning Rate Alpha

- Alpha controls the step size in updating the parameter w
- Alpha too small means slow convergence to the minimum
- Alpha too largecan lead to overshooting the minimum and never converging
- It's important to choose an appropriate learning rate for effective gradient descent
- A good starting point for alpha is 0.01 and can be adjusted based on the specific problem

### Visualizing Learning Rate

- If the learning rate is too small, the algorithm takes many small steps to reach the minimum.
- If the learning rate is too large, the algorithm takes large steps and may overshoot the minimum or oscillate around it.
- It's ideal to have a learning rate that allows the algorithm to converge efficiently without overshooting.

### Learning Rate Tuning

- If the learning rate is too small, the algorithm may take a long time to converge.
- If the learning rate is too large, the algorithm may fail to converge or oscillate around the minimum.
- You can try different learning rates and observe the behavior of the algorithm.
- If the algorithm is not converging, try reducing the learning rate.
- If the algorithm is converging slowly, try increasing the learning rate.
- The learning rate is a hyperparameter that needs to be tuned for each specific problem.

### Conclusion

- Gradient descent updates the model parameters based on the learning rate and the derivative of the cost function.
- The learning rate controls the step size in updating the parameters.
- Choosing an appropriate learning rate is crucial for efficient convergence of the algorithm.
- A learning rate that is too small can result in slow convergence, while a learning rate that is too large can lead to overshooting the minimum or oscillations.
- Tuning the learning rate is important to find the right balance for effective gradient descent.
