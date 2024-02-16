import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducers/todoSlice";

export default function Todo() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          
            <li
              className="mt-3 mx-8 flex justify-between items-center bg-zinc-600 px-4 py-2 rounded text-2xl capitalize"
              key={todo.id}
            >
              <div className="mx-8 text-white">{todo.content}</div>
            <button 
             className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded-xl text-md"
             onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
            </li>
          
        ))}
      </ul>
    </div>
  );
}
