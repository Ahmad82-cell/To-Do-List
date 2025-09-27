import { createContext, useContext, useReducer } from "react";
import todosReduser from "../Reduser/TodosReducer";
export const TodosContext = createContext([])
const TodosProvider = ({ children }) => {
    const [todos, todoDispatch] = useReducer(todosReduser, []);
    return (
        <TodosContext.Provider value={{ todos: todos, dispatch: todoDispatch }}>
            {children}
        </TodosContext.Provider>
    )

};
    export const useTodos = () => {
    return useContext(TodosContext)
};
export default TodosProvider;