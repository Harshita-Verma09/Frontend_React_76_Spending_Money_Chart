# Spending Chart App

This simple React application displays a line chart visualizing spending data and allows users to add new data points.

## Features

* Displays spending trends over days using a line chart.
* Allows users to input a day and corresponding spending amount.
* Dynamically updates the chart when new data is added.
* Styled with a dark theme.

## Technologies Used

* React
* Recharts (for creating the line chart)

## Installation

1.  Make sure you have Node.js and npm (or yarn) installed on your system.
2.  Clone the repository (if you have one) or create a new React project.
3.  Navigate to your project directory in the terminal.
4.  Install the necessary dependencies:

    ```bash
    npm install react recharts
    # or
    yarn add react recharts
    ```

## Running the Application

1.  In your project directory, start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to the address provided (usually `http://localhost:3000`).

## How to Use

1.  The application will initially display a line chart with some sample data (Monday, Tuesday, Wednesday).
2.  To add new spending data:
    * Enter the day (e.g., "Thu", "Fri") in the "Day" input field.
    * Enter the spending amount (a number) in the "Spend" input field.
    * Click the "Add" button.
3.  The chart will update in real-time to include the new data point.

## Code Explanation

The main component `App` manages the state for the chart data (`data`), the input day (`day`), and the input spend (`spend`).

* `useState` is used to manage the state variables.
* The `handleAddData` function updates the `data` array with a new object containing the entered `day` and `spend`.
* The `LineChart` component from `recharts` is used to render the chart.
* `ResponsiveContainer` makes the chart adapt to different screen sizes.
* `Line`, `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, and `Legend` are sub-components of `LineChart` used to configure the chart's appearance and behavior.

## Customization

You can customize the appearance of the chart by modifying the props passed to the `LineChart` and its sub-components. Refer to the [Recharts documentation](https://recharts.org/en-US/api/LineChart) for more options. You can also adjust the inline styles applied to the container and input elements in the `App` component.
