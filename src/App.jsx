import React, { useState } from "react";
import ToDOList from './ToDoList';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems]= useState([]);


    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
             setItems((oldItem) => {
                 return [...oldItem, inputList]
             });
             setInputList("");
    }
    return (
        <>
        <div className = "main_div">
            <div className = "center_div">
                <br />
                <h1>ToDo List</h1>
                <br/>
                <input type= "text" placeholder= "add a Items"
                value = {inputList}
                onChange= {itemEvent}/>
               <button onClick = {listOfItems} className = "newBtn"> + </button>

               <ol>
                   {/* <li> {inputList} </li> */}

                 {  Items.map((itemval) => {
                  return <ToDOList text = {itemval}
                  
                  />

                   })}
               </ol>
            </div>
        </div>
        </>
    )
}

export default App;