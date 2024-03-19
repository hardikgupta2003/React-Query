import { Todo } from "../entities/Todo";
import axios from "axios";

const todos = [
  {
    id: 1,
    name: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    name: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    name: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    name: "Learn React",
    completed: false,
  },
  {
    id: 5,
    name: "Learn Next.js",
    completed: false,
  },
];





/**
 * Mock function that mimics adding a todo to a database.
 */
export const addTodo = async (todo: Pick<Todo, "name">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    name: todo.name,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};