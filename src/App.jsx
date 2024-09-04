import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todoitems from "./Components/Todoitems";
import WelcomeMessege from "./Components/WelcomeMessege";
import "./App.css";
import { useState } from "react";

function App() {
  

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter (item => item.name !== todoItemsName);
    setTodoItems(newTodoItems);

  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length == 0  && <WelcomeMessege></WelcomeMessege>}
      <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></Todoitems>
      
      
    </center>
  );
}

export default App;
