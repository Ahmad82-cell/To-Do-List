export default function reducer(currentTodos, action) {
    switch (action.type) {
        case "added": {
            const newtodos = {
                id: Math.random(),
                title: action.payload.newTitle,
                body: "",
                isCompleted: false,
            };
            const ubdateTodos = [...currentTodos, newtodos]
            localStorage.setItem("todos", JSON.stringify(ubdateTodos))
            return ubdateTodos;
        }
        case "delete": {
            const ubdateTodos = currentTodos.filter((t) => {
                if (t.id == action.payload.id) {
                    return false;
                } else {
                    return true;
                }
            });

            localStorage.setItem("todos", JSON.stringify(ubdateTodos))
            return ubdateTodos;
        };
        case "updet": {
            const updatedTods = currentTodos.map((t) => {
                if (t.id == action.payload.id) {
                    return{
                        ...t, title:action.payload.title,
                            body:action.payload.body,
                    };
                    
                } else {
                    return t;
                }
            })
            localStorage.setItem("todos", JSON.stringify(updatedTods))
            return updatedTods;
        }
        case "togg": {
            const updatedTods = currentTodos.map((t) => {
                if (t.id == action.payload.id) {
                    const updatedTod = {
                        ...t, isCompleted: !t.isCompleted
                    }
                    return updatedTod;
                }
                return t;
            })
            localStorage.setItem("todos",JSON.stringify(updatedTods));
            return updatedTods
        }

        case "get": {
            const Storage = JSON.parse(localStorage.getItem("todos"));
            return Storage;
        }
        default: {
            throw Error("Dont now" + action.type)
        }

    }
    return [];
}