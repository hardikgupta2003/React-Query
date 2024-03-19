import { useState } from "react";
import React from "react";
import { Todo } from "../entities/Todo";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoProps) {
  const [checked, setChecked] = useState(todo.completed);
  console.log('todo name: ',todo)
  return (
    <div>
      <span>{todo.name}</span>
      
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}