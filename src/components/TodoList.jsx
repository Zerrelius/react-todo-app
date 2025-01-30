// Code: TodoList Component
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import useStore from "./todoStore";

function TodoList() {
  const todos = useStore((state) => state.todos);
  console.log(todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  function TodoFilter(event) {
    setFilteredTodos(
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  return (
    // Todo List
    <div className="text-white mx-auto">
      <TodoForm />
      <h1 className="text-xl font-bold">Todo List</h1>
      <div className="border rounded-xl my-4 w-1/2 mx-auto flex items-center">
        <Search className="mx-2" />
        <input
          type="text"
          className="w-full p-2 outline-none placeholder-gray-400"
          placeholder="Search todos ..."
          onChange={TodoFilter}
        />
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;