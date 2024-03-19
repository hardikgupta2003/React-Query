import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'


const TodoApp = () => {
    const queryClient = useQueryClient();

  const [title, setTitle] = useState("");

  const {query:todos ,isLoading,isError}= useQuery(
    {
        queryKey:['todos'],
        queryFn:async ()=>{
            response= await axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log(response.data)
             return response.data;
        }
    }
  );

  
//   const {mutateAsync:addTodoMutation}=useMutation({
//     mutationFn:addTodo,
//     onSuccess:()=>{
//     queryClient.invalidateQueries({
//         queryKey:["todos"]
//     })
//     },

//   })

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
  return (
    <div>
        <h1>Todo App</h1>
        <div className="card">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
        //   onClick={async () => {
        //     try {
        //       await addTodoMutation({ title });
        //       setTitle("");
        //     } catch (e) {
        //       console.log(e);
        //     }
        //   }}
        >
          Add Todo
        </button>
      </div>

      <div className="">
        <p></p>
    </div>
    </div>
  )
}

export default TodoApp

