# React Todo List

A simple **Todo List application built with React.js**.
This project demonstrates CRUD operations, React Hooks, component communication, form handling, and task status management.


Live Link:https://crudtodo1.netlify.app/


<img width="1535" height="700" alt="Screenshot 2026-10-03 122439" src="https://github.com/user-attachments/assets/e9b94422-661b-478c-a0b3-893f78d2471c" />


## 🚀 Features

* Add new tasks
* Display all tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed/pending
* Show total tasks
* Show completed tasks
* Show pending tasks
* Form validation
* Responsive UI using Bootstrap
* Reusable React components

## 🛠️ Technologies Used

* React.js
* JavaScript
* Bootstrap
* React Bootstrap
* Vite
* HTML
* CSS

## 📚 React Concepts Used

This project uses the following React concepts:

* `useState`
* `useEffect`
* Props
* Components
* Event Handling
* Conditional Rendering
* Array `map()`
* Array `filter()`
* Array `find()`
* CRUD Operations
* Form Handling

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Add.jsx
│   └── List.jsx
│
├── App.jsx
├── main.jsx
└── ...
```

## 🔄 CRUD Operations

### Create

A new task is added using the form.

```javascript
const newtodo = {
  id: new Date().getTime(),
  Task: input.Task,
  Description: input.Description,
};
```

### Read

Tasks are displayed using the `map()` method.

```javascript
todos.map((t, index) => {
  return (
    <tr key={t.id}>
      <td>{index + 1}</td>
      <td>{t.Task}</td>
      <td>{t.Description}</td>
    </tr>
  );
});
```

### Update

The Edit button selects an existing task and updates its data.

```javascript
setTodos((todos) =>
  todos.map((t) =>
    t.id === editval.id
      ? {
          ...t,
          Task: input.Task,
          Description: input.Description,
        }
      : t
  )
);
```

### Delete

The Delete button removes a task from the Todo list.

```javascript
setTodos(todos.filter((t) => t.id !== id));
```

## ✅ Task Status

Each task has a checkbox to mark it as completed or pending.

```javascript
setTodos((prev) =>
  prev.map((t) =>
    t.id === id
      ? {
          ...t,
          completed: !t.completed,
        }
      : t
  )
);
```

## 📊 Task Counter

The application displays:

* Total Tasks
* Completed Tasks
* Pending Tasks

```javascript
const TotalTask = todos.length;

const completedTasks = todos.filter(
  (todo) => todo.completed
).length;

const pendingTasks = todos.filter(
  (todo) => !todo.completed
).length;
```

## ▶️ Installation

Clone the project:

```bash
git clone <your-github-repository-url>
```

Go to the project folder:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## 📦 Required Packages

Install React Bootstrap if it is not already installed:

```bash
npm install react-bootstrap bootstrap
```

Import Bootstrap in your project:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

## 🧩 Components

### Add Component

The `Add` component is responsible for:

* Taking Task input
* Taking Description input
* Adding tasks
* Updating tasks
* Clearing the form after submission

### List Component

The `List` component is responsible for:

* Displaying tasks
* Showing task status
* Editing tasks
* Deleting tasks
* Checking/unchecking task completion

## 🔗 Component Communication

Data and functions are passed from `App.jsx` to child components using **props**.

```jsx
<Add
  addtodo={handleadd}
  editval={editval}
/>
```

```jsx
<List
  todos={todos}
  handleDelete={handleDelete}
  handleEdit={handleEdit}
  handleCheck={handleCheck}
/>
```

## 🎯 Learning Objective

The main purpose of this project is to understand how React applications manage data and user interactions using:

* State
* Props
* Hooks
* Components
* Events
* Forms
* CRUD operations

## 👨‍💻 Author

**Prince Nandoliya**


