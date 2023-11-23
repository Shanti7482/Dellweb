import React, { useState } from 'react';

const DigitalClock=()=>{
    // let time=new Date().toLocaleTimeString();
    

    const state=useState();
    const state1=useState();

    const [rend,value]=state1;
    

    const S=()=>
    {
        let s=new Date().getSeconds();
        value(s);
        
    }
    setInterval(S,1000);

    const [Time,setCtime]=state;

    const Updatetime=()=>{
        let time=new Date().toLocaleTimeString();
        setCtime(time)

    }
    setInterval(Updatetime,1000);
    
    return(
    <>
    <div className='container'>
        <h1>🕥</h1>
        <h1 onClick={S}>{rend}</h1>
        <h1 onClick={Updatetime}>{Time}</h1>
    </div>
    </>
    )
}


export default DigitalClock;