import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/slices/TodoSlice";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const { filterMode } = useSelector((state) => state.todo);

  return (
    <>

      <div className="font-bold text-black sm:space-y-3 text-lg flex flex-row justify-between sm:flex-col dark:text-custom-white">
        <div
          className={`cursor-pointer sm:hover:pl-2 hover:text-blue-900  duration-200 ${
            filterMode == "All" && "text-custom-blue dark:text-blue-500"
          }`}
          onClick={() => dispatch(filter("All"))}
        >
          Todas
        </div>
        <div
          className={`cursor-pointer sm:hover:pl-2 hover:text-blue-900 duration-200 ${
            filterMode == "Active" && "text-custom-blue dark:text-blue-500"
          }`}
          onClick={() => dispatch(filter("Active"))}
        >
          Incompletas
        </div>
        <div
          className={`cursor-pointer sm:hover:pl-2 hover:text-blue-900 duration-200
          ${
            filterMode == "Completed" && "text-custom-blue dark:text-blue-500"
          }`}
          onClick={() => dispatch(filter("Completed"))}
        >
          Completadas
        </div>
      </div>
    </>
  );
};

export default TodoFilter;
