"use client";

import { useTodos } from "@/store/todos";
import React from "react";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  const searchParams = useSearchParams();

  const todoFilter = searchParams.get("todos");

  let filterTodos = todos;
  if (todoFilter === "active") {
    filterTodos = filterTodos.filter((todo) => !todo.complete);
  } else if (todoFilter === "complete") {
    filterTodos = filterTodos.filter((todo) => todo.complete);
  }

  return (
    <ul>
      {filterTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.complete}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />

            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

            {todo.complete && (
              <button type="button" onClick={() => handleTodoDelete(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
