# Package Challenge

This repository contains a solution to the Package Challenge problem, which involves selecting items to be packed in a package based on weight and cost constraints. The goal is to maximize the total cost of the selected items while keeping the total weight within a specified limit.

## Getting Started

To run the code locally, follow the steps below:

1. Clone this repository to your local machine.

2. Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: [https://nodejs.org](https://nodejs.org)

3. Open a terminal or command prompt and navigate to the root directory of the cloned repository.

4. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

5. Once the dependencies are installed, you can run the code using the following command:

   ```bash
   npm start <inputFilePath>
   ```

   Replace `<inputFilePath>` with the absolute path to your input file. The input file should follow the specified format, with each line representing a test case.

   Example usage:

   ```bash
   npm start /path/to/input/file.txt
   ```

   The output will be printed to the console.

## Input Format

The input file should contain several lines, with each line representing a test case. Each line consists of the weight limit followed by a colon, and then a list of items enclosed in parentheses. Each item is represented by its index number, weight, and cost, separated by commas.

Example input file:

```
81 : (1,53.38,€45) (2,88.62,€98) (3,78.48,€3) (4,72.30,€76) (5,30.18,€9) (6,46.34,€48)
8 : (1,15.3,€34)
75 : (1,85.31,€29) (2,14.55,€74) (3,3.98,€16) (4,26.24,€55) (5,63.69,€52) (6,76.25,€75) (7,60.02,€74) (8,93.18,€35) (9,89.95,€78)
56 : (1,90.72,€13) (2,33.80,€40) (3,43.15,€10) (4,37.97,€16) (5,46.81,€36) (6,48.77,€79) (7,81.80,€45) (8,19.36,€79) (9,6.76,€64)
```

## Approach

The solution uses a recursive approach to solve the problem. It explores all possible combinations of items using backtracking to find the optimal solution that maximizes the total cost while staying within the weight limit.


## Algorithm Choice

In solving the Package Challenge problem, different algorithmic approaches were considered. Initially, an attempt was made to solve it using a Dynamic Programming (DP) algorithm. However, due to the nature of the problem and the constraints involved, the DP approach did not produce the expected results.

The DP algorithm requires defining and populating a multi-dimensional array to store intermediate results. However, due to the dynamic and combinatorial nature of the problem, it became challenging to define the dimensions of the array and efficiently populate it.

After careful consideration and analysis, an alternative recursive approach with backtracking was implemented. This approach explores all possible combinations of items to find the optimal solution. It starts with an empty package and recursively adds items, checking for weight and cost constraints at each step. The algorithm keeps track of the maximum cost achieved so far and the corresponding set of selected items.

While the recursive approach does not have the same potential for optimization as the DP approach, it provides correct results for the given problem constraints. However, it is important to note that the recursive approach may have limitations for larger inputs with a significant number of items due to its exponential time complexity.

Given the constraints of the problem and the provided test cases, the recursive approach was considered appropriate and sufficient. However, it's worth exploring more efficient algorithms or optimizations if the problem requirements change or if better performance is desired.




## Constraints

The solution has the following constraints:

- The maximum weight that a package can take is ≤ 100.
- There can be up to 15 items to choose from.
- The maximum weight and cost of an item are ≤ 100.


## Testing, TDD, Linting, and Prettier

During the development of the Package Challenge solution, the following practices and tools were used:

- **Testing:** The solution was thoroughly tested using the Mocha testing framework and the Chai assertion library. Test cases were written to cover different scenarios and edge cases, ensuring the correctness of the implementation. To run the tests, use the following command:

  ```bash
  npm test
  ```

- **Test-Driven Development (TDD):** The development process followed the principles of Test-Driven Development, where tests were written before writing the actual implementation. This approach helped in designing the solution incrementally, ensuring that each feature was thoroughly tested and met the requirements.

- **Linting:** The codebase was checked for potential issues and adherence to coding standards using ESLint, a popular JavaScript linter. ESLint helps in identifying common coding errors and enforcing consistent code style across the project.

- **Prettier:** Prettier, an opinionated code formatter, was used to maintain a consistent and uniform code style throughout the project. It automatically formats the code according to predefined rules, making the codebase more readable and reducing manual formatting efforts.


## Deployment as an npm Package

The Package Challenge solution can be deployed and used as an npm package in your projects. To do so, follow these steps:

1. Build the Package Challenge package by running the following command in the terminal:

   ```bash
   npm run build
   ```

   This will transpile the TypeScript code into JavaScript and generate the necessary files in the `dist` directory.

2. You can now package and distribute the solution by publishing it to the npm registry. Use the following command:

   ```bash
   npm publish
   ```

   This will publish the package to the npm registry, making it accessible for others to install and use in their projects.

3. To use the Package Challenge package in another project, navigate to the project directory and run the following command:

   ```bash
   npm install package-challenge
   ```

   This will install the Package Challenge package and add it as a dependency in your project's `package.json` file.

4. You can then import and use the `Packer` class in your code. Here's an example:

   ```javascript
   const { Packer } = require('package-challenge');

   const filePath = '/path/to/your/input/file.txt';
   const result = Packer.pack(filePath);

   console.log(result);
   ```

   Replace `/path/to/your/input/file.txt` with the actual path to your input file.


