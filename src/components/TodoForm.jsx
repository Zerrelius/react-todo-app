import useStore from "./todoStore";

function TodoForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    const { addTodo, setNewTodo } = useStore();

    return (
        // Todo Form
        <form className="flex justify-between items-center border p-2 bg-gradient-to-br from-sky-500 to-green-500" onSubmit={handleSubmit}>
            <input type="text" name="todoText" id="todoText" placeholder="Aufgabe hinzufügen" className="border p-2 rounded-xl" onChange={(event)=> {setNewTodo(event.target.value)}}/>
            <button onClick={addTodo} className="p-2 font-bold text-white bg-blue-500 border rounded-xl w-20">Add</button>
        </form>
    );
}

export default TodoForm;