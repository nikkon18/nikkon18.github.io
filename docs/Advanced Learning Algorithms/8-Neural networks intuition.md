# 1 - Neural networks intuition

## Neural Networks: Mimicking the Brain and Modern Applications

### Introduction

- Neural networks were originally inspired by the desire to mimic the human brain's learning and thinking processes.
- While today's neural networks differ significantly from the brain, some biological motivations still influence their design.
- Neural networks had a rollercoaster journey, gaining popularity in the 1950s, falling out of favor, and resurging in the 1980s and early 1990s.
- The late 1990s saw a decline in interest, but from 2005, neural networks experienced a resurgence, especially with the advent of deep learning.

### Impact of Neural Networks

- Neural networks have revolutionized various application areas, starting with improved speech recognition and then making inroads into computer vision, natural language processing, and more.
- They are now widely used in diverse fields such as climate change, medical imaging, online advertising, and product recommendations.

### Understanding the Brain

- The human brain exhibits a higher level of intelligence compared to current neural networks.
- Neurons in the brain communicate through electrical impulses and form connections with other neurons.
- A simplified diagram of a biological neuron shows inputs received through dendrites and outputs transmitted via the axon.

### Artificial Neural Networks

- Artificial neural networks use a simplified mathematical model of biological neurons.
- Each artificial neuron takes inputs, performs computations, and produces an output.
- When building neural networks, multiple neurons are simulated simultaneously to enhance computational power.

### Biological Neurons vs. Artificial Neurons

- Although there is an analogy between biological and artificial neurons, our understanding of the brain remains limited.
- Attempting to blindly mimic the brain's complexity may not lead to building true intelligence.
- However, even with simplified neuron models, we can develop powerful deep learning algorithms.

### Shifting Focus: Engineering Principles

- Researchers in deep learning have shifted away from relying heavily on biological motivation.
- Instead, they leverage engineering principles to create more effective algorithms.

### Data and Performance

- Neural networks' recent success can be attributed to the availability of large amounts of data.
- With traditional machine learning algorithms, performance reached a limit despite increasing data.
- Neural networks, on the other hand, demonstrated the ability to improve performance as more data was provided.
- Training larger neural networks with more artificial neurons allowed for further performance gains, especially with big data applications.
- The rise of faster computer processors, including GPUs, contributed significantly to the advancement of deep learning.

### Conclusion

- Neural networks, originally inspired by the brain, have transformed various application areas.
- While they differ from biological neurons, they provide powerful tools for solving complex problems.
- The recent success of neural networks is due to the availability of large datasets and the ability of deep learning algorithms to exploit them effectively.
- Understanding the brain remains a fascinating area of research, but current progress in deep learning is driven by engineering principles.

## Neural Networks

### Overview

Neural networks are powerful machine learning models inspired by biological neural networks. They consist of layers of interconnected "neurons" that transmit "activations" to each other.

### Single Neuron

- A single neuron is like a tiny computer that inputs numbers, performs a calculation, and outputs numbers
- It can be thought of as logistic regression
- The output is called the "activation"
- A single neuron is a vastly simplified model of a biological neuron

### Neural Network Architecture

- Neurons are grouped into layers
- Layers:
  - Input layer - inputs to the network
  - Hidden layers - intermediate computations
  - Output layer - final outputs
- Each neuron in a layer is connected to every neuron in the next layer
- Data flows through the network in one direction from input to output

### Forward Propagation

- Input features form a vector $\mathbf{x}$
- Each hidden layer computes an activation vector $\mathbf{a}$
- The activation vector is fed as input to the next layer
- The final layer outputs the prediction $\hat{y}$

### Key Advantages

- Learns its own features rather than requiring manual engineering
- Very powerful modeling capabilities for many problems

### Architectural Choices

- Number of hidden layers
- Number of neurons per hidden layer
- Affects model performance

## Neural Networks for Computer Vision

### Introduction

- Neural networks can be applied to computer vision applications
- Example: Face recognition
- Input: Picture represented as a 1000x1000 matrix of pixel intensity values

### Feature Vector

- Image pixels can be unrolled into a vector of 1 million pixel intensity values
- Neural network takes this feature vector as input

### Neural Network Architecture

- Input image X is fed into the first hidden layer
- Each hidden layer extracts specific features
- Output of each layer is fed to the next layer
- Final output layer estimates the probability of a person's identity

### Visualization of Hidden Layers

- Trained neural networks reveal interesting features learned by hidden layers
- First hidden layer: Neurons detect short lines and edges
- Next hidden layers: Neurons detect parts of faces (eyes, nose, ears)
- Subsequent layers aggregate face parts to detect larger face shapes
- Rich set of features helps determine the identity of the person

### Neural Network Learning

- Neural networks learn feature detectors at different hidden layers automatically
- No explicit instruction given to the network about what to look for
- Features are learned through training on data

### Window Size in Neuron Visualizations

- Neurons in different hidden layers look at different-sized regions in the image
- First hidden layer: Smaller windows for edge detection
- Second hidden layer: Bigger windows for detecting parts
- Third hidden layer: Even bigger windows for detecting complete shapes

### Adaptability to Different Tasks

- Neural networks can be trained on different datasets for different tasks
- Example: Training on car images results in the detection of car-related features
- Network automatically learns to detect features relevant to the given task

### Conclusion

- Neural networks are powerful tools for computer vision applications
