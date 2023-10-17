import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/TodoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() == "") return;
    dispatch(addTodo({ id: Date.now(), text: todo, completed: false }));
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-5 flex space-x-2">
        <input
          type="text"
          style={{ color: "black" }}
          className="rounded-lg px-3 py-2 w-full dark:text-custom-white-400 dark:bg-black-100 "
          placeholder="Añade una nueva tarea"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-blue-600 rounded duration-200">
          Añadir
        </button>
      </form>
    </>
  );
};

export default TodoForm;
