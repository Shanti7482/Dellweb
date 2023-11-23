

import React from "react";

/*import {Add,Sub,Multiple,Div} from './Calculator';
function App()
{
    return (
        <>
        <ol>
            <li>Addintion  of two Number is {Add(5,6)}</li>
            <li>Subtraction of two Number  is {Sub(6,5)}</li>
            <li>Multiplication of two Number is {Multiple(5,6)}</li>
            <li>Division  of two Number is  {Div(5,6)}</li>
        </ol>
        </>

    );
}*/
import * as cal from './Calculator';

function App()
{
    return (
        <>
        <ol>
            <li>Addintion  of two Number is {cal.Add(5,6)}</li>
            <li>Subtraction of two Number  is {cal.Sub(6,5)}</li>
            <li>Multiplication of two Number is {cal.Multiple(5,6)}</li>
            <li>Division  of two Number is  {cal.Div(5,6)}</li>
        </ol>
        </>

    );
}

export default App;