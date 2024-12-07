# RewardPay Coding Challenge

## Overview

This application calculates key financial metrics such as revenue, expenses, gross profit margin, net profit margin, and working capital ratio based on input data. These metrics are formatted for easy viewing.

Technologies Used: JavaScript, Node.js, Vitest for testing

## Setup and Installation

1. Clone the repository:

```
git clone https://github.com/katieglennon/rewardpay-coding-challenge
```

2. Navigate into the project directory

```
cd <project-directory>
```

3. Install dependencies

```
npm install
```

## Usage

To run the app, use the following command:

```
node main.js
```

The expected output should look like the example below:

```
Accounting Metrics:
Revenue: $3,000
Expenses: $800
Gross Profit Margin: 50.0%
Net Profit Margin: 73.3%
Working Capital Ratio: 111.1%
```

## Features

- Calculations: The app calculates the following metrics:

  - Revenue
  - Expenses
  - Gross Profit Margin
  - Net Profit Margin
  - Working Capital Ratio

- Formatting: The app formats currency values and percentages for clarity, ensuring they are displayed with appropriate symbols and rounding.

## Testing

To run unit tests, use the following command:

```
npm run test
```

Tests include:

- Unit tests for each calculation function (e.g. revenue, expenses)
- Tests to check if the app correctly reads a valid file and returns the expected data
- Tests for error handling and formatting data appropriately

## Code Structure

```
├── src/
│   ├── calculations/
│   ├── utils/
│   ├── data/
│   ├── tests/
├── main.js
├── package.json
└── README.md
```
