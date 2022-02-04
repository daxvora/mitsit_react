import React, { memo } from "react";
import { FilterType } from ".";

type Props = {
  filterTodo: (filterType: FilterType) => void;
  currentFilter:FilterType;
};

const TodoFilter = ({ filterTodo,currentFilter }: Props) => {
  return (
    <div className="flex">
      <button
        onClick={() => filterTodo(FilterType.all)}
        className={`flex-1 py-2 bg-blue-500 text-white ${currentFilter === FilterType.all ? "bg-green-500":""}`}
        type="button"
      >
        All
      </button>
      <button
        onClick={() => filterTodo(FilterType.pending)}
        className={`flex-1 py-2 bg-blue-500 text-white ${currentFilter === FilterType.pending ? "bg-green-500":""}`}
        type="button"
      >
        Pending
      </button>
      <button
        onClick={() => filterTodo(FilterType.completed)}
        className={`flex-1 py-2 bg-blue-500 text-white ${currentFilter === FilterType.completed ? "bg-green-500":""}`}
        type="button"
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
