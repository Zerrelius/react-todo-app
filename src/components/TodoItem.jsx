import useStore from "./todoStore";

function TodoItem(props) {
    const { toggleTodo, deleteTodo } = useStore();
    console.log(props.todo);
    return (
        <div className="flex justify-between items-center border bg-gray-500 text-white p-2">
            <input type="checkbox" onChange={()=>toggleTodo(props.todo.id)} checked={props.todo.status} className="size-6"/>
            <span className="border p-2">Todo: {props.todo.title}</span>
            <button onClick={() => deleteTodo(props.todo.id)} className="p-2 border bg-red-500 rounded">Löschen</button>
        </div>
    )
}

export default TodoItem;