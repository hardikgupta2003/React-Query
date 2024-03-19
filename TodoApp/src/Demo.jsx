import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import './index.css'
import './App.css'
import { addTodo } from "./api";
import TodoCard from "./components/TodoCard";
import  {fetchTodos}  from "./api/fetchTodos";

export default function Demo() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn:fetchTodos,
    staleTime: Infinity,
    cacheTime: 0,
  });
  console.log("todos:",todos)

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("todos:",todos)
  return (
    <div className="container ">
       <h1>To Do App</h1>
      <div className="card">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="">
        {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      </div>
      
    </div>
  );
}