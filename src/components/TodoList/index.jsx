import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoFilter from "./TodoFilter";
import Modal from "./Modal";

import { useSelector } from "react-redux";

const TodoList = () => {
  const { isOpenModal } = useSelector((state) => state.todo);

  return (
    <>
      {isOpenModal && <Modal />}
      <div className="min-h-screen bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black pt-16 sm:pt-24 font-nunito">
        <div className="flex flex-col-reverse sm:flex-row justify-center w-11/12 sm:w-5/6 md:w-2/3 mx-auto rounded-3xl shadow-2xl dark:bg-slate-600 dark:shadow-md dark:rounded-3xl">
          <div className="w-full sm:w-1/3 p-7 dark:border-custom-white">
            <TodoFilter />
          </div>
          <div className="w-full sm:w-2/3 p-5 md:p-7 dark:text-custom-white">
            <TodoForm />
            <TodoItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
