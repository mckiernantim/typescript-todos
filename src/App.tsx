// Import necessary modules and components
import React, { useState } from "react";
import "./App.css";
import { Todo } from "./models/todo"; // Importing the Todo interface from the "todo" model
import dataBase from "./models/todoList"; // Importing the initial list of todos from "todoList" model
import ListTodo from "./components/ListTodo"; // Importing the ListTodo component
import NewTodo from "./components/NewTodo"; // Importing the NewTodo component

// Define the functional component "App"
function App() {
  // Using the "useState" hook to create state variable "todos" and its corresponding setter "setTodos"
  const [todos, setTodos] = useState<Todo[]>(dataBase); // Specifying the type of "todos" as an array of Todo objects

  // Function to add a new todo item to the list
  // Parameter "(todo: Todo): void" specifies that "todo" is of type "Todo" and the function returns "void"
  const newTodo = (todo: Todo): void => {
    const currentTodos = [...todos];
    currentTodos.push(todo);
    setTodos(currentTodos);
  };

  // Function to delete a todo item from the list
  // Parameter "(ind: number)" specifies that "ind" is of type "number"
  const deleteTodo = (ind: number) => {
    const newData = [...todos];
    newData.splice(ind, 1);
    setTodos(newData);
  };

  return (
    <div className="App">
      <header>
        <h1>
          {todos.length
            ? `We have ${todos.length} items to bring to your attention`
            : "Nothin' Todo"}
        </h1>
      </header>
      {/* Displaying the number of todo items in the list */}
      <main>
        {/* Rendering the ListTodo component and passing relevant props */}
        <ListTodo
          todos={todos}
          setTodo={setTodos} // Passing the "setTodos" function as a prop
          deleteTodo={deleteTodo} // Passing the "deleteTodo" function as a prop
        />
        {/* Rendering the NewTodo component and passing the "newTodo" function as a prop */}
      </main>
      <aside>
        <NewTodo createNewTodo={newTodo} />
      </aside>
    </div>
  );
}


export default App;
