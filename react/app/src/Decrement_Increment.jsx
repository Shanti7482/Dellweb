

import React, { useState } from 'react';





const Decrement_Inceament=() =>
{

    const fullData=useState(0)

    const [Increment ,setIncrement]=fullData;

    const changeDecremnt= () =>
    {
        

    }

    return(
        <>
            <h1>show data</h1>

            <button onClick={changeDecremnt}>Decre</button>
            <button onClick={changeIcrement} >Incre</button>
        </>
    );
}

export default Decrement_Inceament;