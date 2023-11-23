import React from 'react';
import { useState } from 'react';

const Eventhandling=()=>{
    const state=useState("Click Me");
    const [name,setNeme]=state;

    const [bg,setColor]=useState("rgb(150, 233, 221)");
    const change=()=>{
        setNeme("Oyyo");
        let color="red";

        setColor(color);
    }


    const [priState,setPriState]=useState();
    const dchange=()=>{
        setNeme("Click Me");
        setColor("rgb(150, 233, 221)");

    }
    

    return(
        <div className='container' style={{backgroundColor: bg }}>
        <button onClick={change} onDoubleClick={dchange}>{name}</button>
        </div>
    )
}


export default Eventhandling;