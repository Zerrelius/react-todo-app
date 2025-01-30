import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import todoStore from "./todoStore";
import {Search} from "lucide-react";
import { useState } from "react";

function TodoList() {
    const { todos } = todoStore();
    console.log(todos);
    const [filteredTodos, setFilteredTodos] = useState(todos);

  function TodoFilter(event) {
    setFilteredTodos(
      todos.filter(
        (todo) =>
          todo.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          todo.id
            .includes(event.target.value)
      )
    );
  }
    return (
        // Todo List
        <div>
            <TodoForm />
            <h1 className="text-xl font-bold">Todo List</h1>
            <div className="border rounded-xl my-4 w-1/2 mx-auto flex items-center">
                    <Search className="mx-2" />
                    <input
                      type="text"
                      className="w-full p-2 outline-none"
                      placeholder="Search videos ..."
                      onChange={TodoFilter}
                    />
            </div>
            <ul>
            {/* {filteredTodos.map((todos) => ( */}
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} />
                    </li>
                //))}
            ))}
            </ul>
        </div>
    )
};

export default TodoList;