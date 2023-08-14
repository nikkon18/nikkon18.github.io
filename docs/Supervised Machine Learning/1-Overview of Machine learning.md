# 1 - Overview of Machine learning

## What is Machine learning?

"Field of study that gives computers the ability to learn without being explicitly programmed" -Arthur Samuel

## Machine learning algorithms

- Supervised learning
  - used most in the world
  - rapid advancements
- Unsupervised learning

## Supervised learning

### Introduction

- Machine learning is creating tremendous economic value today
- 99% of the economic value created by machine learning today is through supervised learning
- Supervised machine learning refers to algorithms that learn x to y or input to output mappings
- The key characteristic of supervised learning is that you give your learning algorithm examples to learn from, including the right answers

### Examples of Supervised Learning

- Spam filter: input x is an email, output y is spam or not spam
- Speech recognition: input x is an audio clip, output y is a text transcript
- Machine translation: input English, output Spanish, Arabic, Hindi, Chinese, Japanese, or other languages
- Online advertising: learning algorithm inputs information about an ad and you, and tries to figure out if you will click on that ad or not
- Self-driving car: learning algorithm takes as input an image and some information from other sensors and outputs the position of other cars so that your self-driving car can safely drive around them
- Manufacturing: learning algorithm takes as input a picture of a manufactured product and outputs whether or not there is a scratch, dent, or other defect in the product

### Training the Model

- In all of these applications, you first train your model with examples of inputs x and the correct labels y
- After the model has learned from these input-output or x-y pairs, it can take a brand new input x and try to produce the appropriate corresponding output y

### Example of Regression in Supervised Learning

- Predicting housing prices based on the size of the house
- Data is collected and plotted with house size on horizontal axis and price on the vertical axis
- Learning algorithm can be used to predict the price of a friend's 750 square foot house
- Fitting a curve can be more appropriate than fitting a straight line
- The task of the learning algorithm is to predict what is the likely price for other houses like the friend's house
- This is an example of supervised learning, where the algorithm is given a dataset in which the correct price y is given for every house on the plot
- This type of supervised learning is called regression, where we're trying to predict a number from infinitely many possible numbers, such as the house prices in the example

### Conclusion

- Supervised learning involves learning input-output or x-y mappings
- Regression is a type of supervised learning where we're trying to predict a number from infinitely many possible numbers

## Supervised Learning and Classification

### Supervised Learning

- Supervised learning algorithms learn to predict output or output category based on input data
- Algorithm is trained on labeled examples with correct answers
- Two main types of supervised learning: regression and classification

### Regression

- Predicts continuous output values from infinitely many possible numbers
- Example: predicting house prices based on size, location, etc.

### Classification

- Predicts discrete output category from a small set of possible categories
- Example: breast cancer detection, benign or malignant tumor
- Categories can be non-numeric or numeric
- Multiple output categories possible

### Example

- Breast cancer detection example with age and tumor size
- Use boundary line to separate malignant from benign tumors
- Additional input values may be required in other machine learning problems

### Recap

- Supervised learning maps input to output
- Two types of supervised learning: regression and classification

Overall, supervised learning algorithms learn to predict an output or output category based on input data, where the algorithm is trained on labeled examples with correct answers. Regression predicts continuous output values, while classification predicts discrete output categories. In the breast cancer detection example, the algorithm uses both age and tumor size to find a boundary line that separates out malignant from benign tumors. In other machine learning problems, additional input values may be required.

## Unsupervised Learning Type1

- Unsupervised learning is the second most widely used form of machine learning after supervised learning
- In unsupervised learning, data is given without any output labels
- The task is to find structure, patterns, or interesting information in the data

### Clustering

- Clustering is a specific type of unsupervised learning
- It groups unlabeled data into different clusters or groups
- Clustering is used in many applications such as Google News for grouping related news articles

### DNA Microarray Data

- DNA microarray data is a type of unsupervised learning
- Researchers measure how much certain genes are expressed for each individual person
- A clustering algorithm is used to group individuals into different types or categories

### Customer Data

- Many companies have huge databases of customer information
- Unsupervised learning can be used to group customers into different market segments

### Recap

- Unsupervised learning finds structure, patterns, or interesting information in data without output labels
- Clustering is a type of unsupervised learning that groups data into different clusters or groups

## Unsupervised Learning Type2

- In unsupervised learning, data comes only with inputs x but not output labels y
- The algorithm has to find some structure, pattern, or something interesting in the data
- Clustering is one example of unsupervised learning
- Other types of unsupervised learning include anomaly detection and dimensionality reduction
- Anomaly detection is used to detect unusual events and is important for fraud detection in the financial system
- Dimensionality reduction compresses a big dataset to a smaller one while losing as little information as possible
- An example of supervised learning is diagnosing diabetes based on labeled data
- Jupyter Notebooks are a useful tool for machine learning

### Recap

- Unsupervised learning finds structure, patterns, or interesting information in data without output labels
- Clustering, anomaly detection, and dimensionality reduction are examples of unsupervised learning
- Jupyter Notebooks are a useful tool for machine learning
