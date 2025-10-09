import { useState } from "react";

// interface -> genellikle objeler icin kullanilir
// type - genellikle fn icin kullanilir

interface Todo {
  text: string;
  pending: boolean;
}

export default function TodoListV19() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "todo 1", pending: true },
    { text: "todo 2", pending: false },
  ]);

  async function handleAction(formData: FormData) {
    // console.log([...formData.entries()]);

    const todo = formData.get("todo") as string;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { text: todo, pending: true },
    ]);

  }

  return (
    <div>
      <h2>Todo List</h2>
      <form action={handleAction}>
        <input type="text" name="todo" placeholder="Enter todo.." required />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, index) => {
        return (
          <div key={index} style={{ opacity: todo.pending ? 0.5 : 1 }}>
            {todo.text}
          </div>
        );
      })}
    </div>
  );
}
