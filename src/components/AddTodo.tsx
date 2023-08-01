"use client";
import { useTodos } from "@/store/todos";
// for using react hooks
import React, { ChangeEvent, FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name=""
        placeholder="Write your todo"
        value={todo}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setTodo(event.target.value)
        }
      />
      <button type="submit"> ADD </button>
    </form>
  );
};

export default AddTodo;
