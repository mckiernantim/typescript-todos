import React from "react";
import { Todo } from "../models/todo";

// Define the interface for the props passed to the ListTodo component
interface IListProps {
  todos: Todo[]; // Prop "todos" is an array of Todo objects
  setTodo: Function; // Prop "setTodo" is a function with an unspecified signature
  deleteTodo: Function; // Prop "deleteTodo" is a function with an unspecified signature
}

// React functional component accepting props of type IListProps
export default function ListTodo({ todos, setTodo, deleteTodo }: IListProps) {
  // Event handler for the "alert todo" button
  // The event parameter is of type React.MouseEvent<HTMLButtonElement>.
  // The syntax MouseEvent<HTMLButtonElement> means that we are specifying the type of the event
  // as a mouse event specifically related to a button element (<button>).
  // This type ensures that the event object has properties and methods specific to button elements.
  // Generics in TypeScript allow us to create components and functions that can work with multiple types while maintaining type safety.
  // In this context, React.MouseEvent<HTMLButtonElement> is a specific instance of a generic type React.MouseEvent,
  // where HTMLButtonElement is the type parameter used to make the event object specific to button events.
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const ind: number = Number(event.currentTarget.value); // Extracting the index from the button's value attribute
    todos[ind].displayContent(); // Calling the "displayContent" method on the Todo object at the specified index
  };

  // Event handler for the "delete todo" button
  // Similar to handleClick, the event parameter is of type React.MouseEvent<HTMLButtonElement>.
  // The type React.MouseEvent<HTMLButtonElement> ensures that the event object is specifically for a button element.
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const ind = Number(event.currentTarget.value); // Extracting the index from the button's value attribute
    deleteTodo(ind); // Calling the "deleteTodo" function and passing the index as an argument
  };

  // Return JSX representing the component's output
  return (
    <div className="list-container">
      {todos.map((todo, ind) => {
        return (
          <div key={ind}>
            <div>
              #{ind} {todo.title} {todo.text}{" "}
            </div>
            <button value={ind} onClick={handleClick}>
              alert todo
            </button>
            <button value={ind} onClick={handleDelete}>
              delete todo
            </button>
          </div>
        );
      })}
    </div>
  );
}
