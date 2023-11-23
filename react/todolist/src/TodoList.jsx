import React from 'react';


const TodoList = (props ) =>{


    


    return( 
    <>
    
        <div className='todo_style'>
            <h1 onClick={()=>
            {
                props.onSelect(props.id)
            }}>del</h1>
            {/* <i className="fa fa-times" aria-hidden="true" onClick={props.onSelect}/> */}
            <li>{props.text}</li>
        </div>
    </>
        )
}

export default TodoList;