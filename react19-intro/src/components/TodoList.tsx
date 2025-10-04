import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([{ text: "todo 1" }, { text: "todo 2" }]);

  function handleAction(formData: FormData) {
    // console.log([...formData.entries()]);

    const todo = formData.get("todo");
    console.log(todo);

    //todo - add todo ya basildiginda loading ifadesini kullan (await)
    //todo - gelen datayi eski datalarla beaber ekran yazdir
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form action={handleAction}>
        <input type="text" name="todo" placeholder="Enter todo.." required />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, index) => {
        return <div key={index}>{todo.text}</div>;
      })}
    </div>
  );
}
