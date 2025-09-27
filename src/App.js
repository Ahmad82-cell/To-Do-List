import { useState } from 'react';
import './App.css';
import Todolist from './componets/Todolist';
import TodosProvider from './Context/TodosContext';
import MySnackBar from "./componets/MySnackBar";
import { Toisting } from './Context/ToistingContext';


function App() {
  // const [todos, settodos] = useState(initialTodos);
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState("");
  function showGideToast(message) {
    setOpen(true)
    setmessage(message)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  return (
    <Toisting.Provider value={{ showGideToast: showGideToast }}>
      <TodosProvider>
        <div  style={{marginTop:"100px",textAlign:"center"}}>
            <Todolist />
          <MySnackBar open={open} message={message} />
        </div>
      </TodosProvider>
    </Toisting.Provider>
  );
}

export default App;
