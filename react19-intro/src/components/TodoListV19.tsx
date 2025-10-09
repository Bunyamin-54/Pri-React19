import { useOptimistic, useState } from "react";

// interface -> genellikle objeler icin kullanilir
// type - genellikle fn icin kullanilir

interface Todo {
  text: string;
  pending: boolean;
}

export default function TodoListV19() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [optimisticData, setOptimisticData] = useOptimistic(
    todos,
    (oldTodos, newTodo: string) => [
      ...oldTodos,
      { text: newTodo, pending: true },
    ]
  );

  async function handleAction(formData: FormData) {
    const todo = formData.get("todo") as string;

    setOptimisticData(todo);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { text: todo, pending: false },
    ]);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form action={handleAction}>
        <input type="text" name="todo" placeholder="Enter todo.." required />
        <button type="submit">Add Todo</button>
      </form>

      {optimisticData.map((todo, index) => {
        return (
          <div key={index} style={{ opacity: todo.pending ? 0.5 : 1 }}>
            {todo.text}
          </div>
        );
      })}
    </div>
  );
}
