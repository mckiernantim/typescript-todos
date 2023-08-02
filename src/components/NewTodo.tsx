import React, { useState } from "react";
import { Todo } from "../models/todo";

// in order to pass props to a component we need to define what goes in to the component
// with an interface
type NewTodoProps = {
  createNewTodo: (todo: Todo) => void;
};

// using the function declaration defines this as a function from the start;

export default function NewTodo({ createNewTodo }: NewTodoProps) {
  const [newTitle, setTitle] = useState<string>("");
  const [newText, setText] = useState<string>("");
  // here we need to specify that the event IS a Form event from the react library
  const handleNew = (e: React.FormEvent) => {
    e.preventDefault();
    const draftTodo = new Todo(newTitle, newText);
    createNewTodo(draftTodo);
    setText("");
    setTitle("");
  };
  // our handle change is more flexible - each event can be EITHER a HTMLInputElement OR HTMLTextAreaElement
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.name === "title"
      ? setTitle(e.target.value)
      : setText(e.target.value);
  };
  return (
    <div className="new-container">
      <label htmlFor="newTodo">Enter a new Todo</label>
      <div>
        { newTitle || newText ? (
          <>
            <h3> Todo: draft</h3>
            <p> Title: {newTitle} </p>
            <p>Text: {newText} </p>
          </>
        ) : null}
      </div>

      <form name="newTodo">
        <label htmlFor="title"> Enter New Title</label>
        <input name="title" onChange={handleChange} value={newTitle}></input>
        <label htmlFor="text"> Enter New Todo</label>
        <textarea
          name="text"
          onChange={handleChange}
          value={newText}
        ></textarea>

        <button type="submit" onClick={handleNew}>
          Submit
        </button>
      </form>
    </div>
  );
}
