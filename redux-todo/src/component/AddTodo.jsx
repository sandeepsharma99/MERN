import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 rounded"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
    