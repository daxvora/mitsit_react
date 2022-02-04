import React from "react";
import { FilterType, TodoItemType } from ".";
import TodoItem from "./TodoItem";

type Props = {
  todoList: TodoItemType[];
  completeTodo: (todoItem: TodoItemType) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = ({
  todoList,
  completeTodo,
  deleteTodo,
}: Props) => {
  const render = (c: TodoItemType) => (
    <TodoItem
      key={c.id}
      todoItem={c}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );

  return (
    <div className="flex-1">
      {todoList.map((c) => {
        return render(c);
      })}
    </div>
  );
};

export default TodoList;
