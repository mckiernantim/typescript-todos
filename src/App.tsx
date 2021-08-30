import React, {useState} from 'react';
import './App.css';
import { Todo } from "./models/todo";
import dataBase   from './models/todoList';
import ListTodo from './components/ListTodo';
import NewTodo from './components/NewTodo';

function App() {
  const [ todos, setTodos ]  = useState(dataBase) 
  const [test, setTest] = useState("test")
  
  const newTodo = (todo:Todo):void => {
    const currentTodos = [...todos];
    currentTodos.push(todo);
    setTodos(currentTodos)
  }
  const deleteTodo  = (ind:number) => {
    const newData = [...todos];
    newData.splice(ind,1);
    setTodos(newData)
}
 

  return (
    <div className="App">
       We have {todos.length} items to bring to your attention
    <ListTodo  props = {todos} 
     setTodo = {setTodos}
     deleteTodo = {deleteTodo}/>
     <NewTodo props = {{new:newTodo}} />
    </div>
  );
}

export default App;
