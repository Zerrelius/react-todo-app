import useStore from "./todoStore";

function TodoItem(props) {
    const { toggleTodo, deleteTodo } = useStore();
    console.log(props.todo);
    return (
        <div className="flex justify-between items-center border bg-slate-700 mb-2 text-white p-2">
            <input type="checkbox" onChange={() => toggleTodo(props.todo.id)} checked={props.todo.status} className="size-6" />
            
            <span className={`border p-2 ${props.todo.status ? "bg-red-500 line-through" : "bg-slate-700"}`}>Todo: {props.todo.title}</span>

            <button onClick={() => deleteTodo(props.todo.id)} className="p-2 border bg-red-500 rounded">Löschen</button>
        </div>
    )
}

export default TodoItem;