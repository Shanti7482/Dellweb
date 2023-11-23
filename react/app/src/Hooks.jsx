
import React, { useState } from "react";

const Hooks=()=>{
    const state=useState(0);

    const [count,num]=state;

    const num1=()=>
    {
        num(count+1)
    }
    return(
        <>
        <div className="container">
            <h1>{count}</h1>
            <button onClick={num1}>Click Me</button>
        </div>
        </>
    );
}


export default Hooks;