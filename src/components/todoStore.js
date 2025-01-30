import { create } from "zustand";

const useStore = create((set) => ({
  todos: [
    { id: 1, title: "Aufgabe 1", status: false },
    { id: 2, title: "Aufgabe 2", status: false },
  ],
  newTodo: "",

  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  setNewTodo: (value) => set({ newTodo: value }),

  addTodo: () =>
    set((state) => {
      if (state.newTodo.trim() === "") return state;
      const nextId = state.todos.length > 0 ? Math.max(...state.todos.map(todo => todo.id)) + 1 : 1;
      const newTodo = { id: nextId, title: state.newTodo, status: false };
      return {
        todos: [...state.todos, newTodo],
        newTodo: "",
      };
    }),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    })),
}));

export default useStore;
