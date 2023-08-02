import React, { useState } from 'react'
import { Todo } from '../models/todo';

interface INewProps{
    props:{
        new:Function
    }
}
export default function NewTodo({props}:INewProps) {
   
    const [newTitle, setTitle] = useState<string>("")
    const [newText, setText] = useState<string>("")
  
    const handleNew = (e:React.FormEvent) =>{
        e.preventDefault()
        const draftTodo = new Todo(newTitle, newText)
        props.new(draftTodo)
        setText("")
        setTitle("")
        
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        e.currentTarget.name === "title" ? 
            setTitle(e.target.value) :
            setText(e.target.value)
    }
    return (
        <div>
            <label htmlFor="newTodo">Enter a new Todo</label>
            <div>
                <h3> Todo: draft</h3>
                Title: {newTitle};
                Text: {newText}
            </div>
            <form name="newTodo">
                <label htmlFor="title"> Enter New Title</label>
                <input name="title" onChange={handleChange} value={newTitle}></input>
                <label htmlFor ="text"> Enter New Todo</label>
                <textarea name = "text"onChange={handleChange} value={newText}></textarea>
                
                <button type="submit" onClick={handleNew}>Submit</button>

            </form>
        </div>
    )
}
