import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reducer/TodoSlice";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between bg-gray-100 p-2 rounded mb-2">
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo({ id: todo.id }))}
            className="text-red-500"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ViewTodo;
