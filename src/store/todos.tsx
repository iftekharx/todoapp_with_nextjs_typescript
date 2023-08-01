"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  complete: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodo] = useState<Todo[]>([]);

  function handleAddTodo(task: string) {
    setTodo((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          complete: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  }

  const toggleTodoAsCompleted = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      return newTodos;
    });
  };

  const handleTodoDelete = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete }}
    >
      {children}
    </todosContext.Provider>
  );
};

export function useTodos() {
  const todosContextValue = useContext(todosContext);

  if (!todosContextValue) {
    throw new Error("UseTodos used outside of Provider");
  }
  return todosContextValue;
}
