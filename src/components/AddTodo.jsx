import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoSlice";

export default function AddTodo() {

    const dispatch= useDispatch()
    const [input, setInput] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        if(input != ""){
            dispatch(addTodo(input))
        setInput('')
        }else{
            alert("Input field is empty")
        }
    }

  return (
    <div className="flex justify-center my-20">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-zinc-600 mr-4 p-4 text-white text-xl rounded-xl border-2 border-black"
          type="text"
          placeholder="Add Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
        type="submit"
        className="bg-blue-500 p-4 text-xl rounded-xl border-2 border-black font-bold">
          Add Todo
        </button>
      </form>
    </div>
  );
}
