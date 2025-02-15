# Homework

## Created Repository: `goit-react-hw-02`

- Repository: **goit-react-hw-02**
- When submitting the homework, there are two links: one to the source files and
  one to the deployed page on **Vercel**.
- The project was created using **Vite**.
- During the task execution, there are no errors or warnings in the console.
- For each component in the `src/components` folder, there is a separate folder
  containing the JSX file for the React component and the corresponding styles
  file. The folder name, component file (with the `.jsx` extension), and styles
  file (with `.module.css` before the extension) have the same name and match
  the names specified in the tasks (if provided).
- **Default export** is used for components.
- The JS code is clean and readable, using **Prettier**.
- The styling is done using **CSS modules**.

---

## Task 2 - Feedback Widget

Write an application to collect feedback about the **Sip Happens Café**. Watch
the demo video of the application's functionality.

The application must display the number of collected feedbacks for each
category: **good**, **neutral**, **bad**. It must store the feedback statistics
between page reloads.

## Components

In this task, the interface is already divided into components. Your task is to
translate this into code. The parts of the interface that belong to a component
are highlighted with a border of the respective color.

![enter image description here](https://github.com/AndriiDorohov/goit-react-hw-02/blob/main/src/assets/img_02.png?raw=true)

As you can see, all components are rendered inside the **App** component.

### Name of the Café

```js
Sip Happens Café
```

### Description Text

```js
Please leave your feedback about our service by selecting one of the options below.
```

### Step 1

In the **App** component, create a state to store the types of feedback. This
should be an object with properties having the same names:

```js
{
  good: 0,
  neutral: 0,
  bad: 0
}
```

Declare the **Feedback** and **Options** components and use them in **App** to
render the options and feedback. Pass the necessary values to them via props.

After completing this step, the application interface will look as follows. Note
that the components are missing some elements, which will be added in the
following steps.

![enter image description here](https://github.com/AndriiDorohov/goit-react-hw-02/blob/main/src/assets/img_01.png?raw=true)

### Step 2

Add a state handler so that when the buttons in the **Options** component are
clicked, the **App** component's state changes.

Declare the function `updateFeedback(feedbackType)`, which accepts one parameter
— the feedback type, i.e., the name of the state property: the strings `"good"`,
`"bad"`, or `"neutral"`.

```js
const updateFeedback = feedbackType => {
  // Use the setter here to update the state
};
```

Pass the `updateFeedback` function as a prop to the **Options** component and
call it when the buttons are clicked, passing the feedback type (the strings
`"good"`, `"bad"`, or `"neutral"`) as an argument.

After completing this step, the interface will update when the buttons in the
**Options** component are clicked.

### Step 3

Make it so that the **Feedback** component is rendered only after at least one
feedback has been collected. The total number of feedbacks is simply the sum of
the states:

```js
const totalFeedback = good + neutral + bad;
```

Since the state is stored in the **App** component, the calculation of
`totalFeedback` should also be done in this component. Pass the computed value
as props to other components, and use it in **App** for conditional rendering.

Move the "no statistics" message to the **Notification** component and render it
in **App**. Use conditional rendering in the **App** component to display this
message when there are no feedbacks.

### Step 4

Add a **Reset** button to the **Options** component. When clicked, it should
reset the feedback state to its initial value. The **Reset** button should only
be visible if there is at least one feedback, just like the **Feedback**
component.

For conditional rendering, use the previously calculated `totalFeedback` value
from the **App** component and pass it as a prop to **Options**.

### Step 5

Expand the functionality of the application so that more statistics about the
collected feedbacks are displayed in the interface. Add the display of the total
number of collected feedbacks across all categories and the percentage of
positive feedbacks. These are all computed values that do not need to be stored
in the state. Pass these values as props to the appropriate components.

The total number of feedbacks is simply the sum of the states:

```js
totalFeedback = good + neutral + bad;
```

To calculate the percentage of positive feedbacks, you can use the following
formula:

```js
Math.round((good / totalFeedback) * 100);
```

Note that there is no need to create separate properties in the state for
`totalFeedback` and `positiveFeedback`, as these values can be easily calculated
based on the existing state. This not only optimizes memory and resource usage
but also reduces the risk of errors related to unsynchronized state data.

After completing this step, the application's interface will be fully
implemented.

### Step 6

Make it so that the feedback statistics are preserved between page reloads. Use
**effects** and **local storage** to save the state when it changes, and
initialize the state and local storage to read the saved data and write it to
the state when the page loads. If there is no data in local storage when the app
loads, the state should be initialized to zeros.
