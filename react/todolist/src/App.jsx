import React, { useState } from "react";
import TodoList from "./TodoList";


const App = () =>
{

    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([])

    const itemEvent =(props)=>{
        setInputList(props.target.value);

    }
    const click = () =>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList(""); 
         
    }
    
    const deleteItem =(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arr,index)=>{
                return index!==id;

            })
        })

    }

    return(
        <>
            {/* <Clock /> */}
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
                    <button onClick={click}> + </button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                       { Items.map((itemsVal,index)=>{
                       return <TodoList
                            key={index}
                            id={index}
                            text={itemsVal}
                            onSelect={deleteItem}
                        />
                        })}
                    </ol>
                </div>

            </div>
        </>
    )
}


export default App;