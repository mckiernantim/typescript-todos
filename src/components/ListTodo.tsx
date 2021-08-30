import React from "react";
import { Todo } from "../models/todo";

interface IListProps {
  props: Todo[];
  setTodo: Function;
  deleteTodo: Function;
}
export default function ListTodo({ props, setTodo, deleteTodo }: IListProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const ind: number = Number(event.currentTarget.value);
    props[ind].displayContent();
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const ind = Number(event.currentTarget.value);
    deleteTodo(ind);
  };

  return (
    <div>
      {props.map((todo, ind) => {
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
