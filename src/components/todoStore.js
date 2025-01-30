import {create} from 'zustand';

const useStore = create((set) => ({
    todos: [ { id: 1, title: "Aufgabe 1", status: false }, { id: 2, title: "Aufgabe 2", status: false } ],
    newTodo: "",
    // addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    // setNewTodo: (value) => set({ newTodo: value }),
    removeTodo: (todo) => set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
    nextId: (state) => state.todos.length + 1,
    setNewTodo: (value) => set({ newTodo: value }),
    addTodo: () =>
        set((state) => {
          if (state.newTodo.trim() === "") return state;
          const newTodo = { id: state.nextId, text: state.newTodo, status: false };
          return {
            todos: [...state.todos, newTodo],
            newTodo: "",
            nextId: state.nextId + 1,
          };
        }),
    
    toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
          ),
        })),
    })
);

export default useStore;