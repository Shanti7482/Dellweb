// import React from "react";

function Add(x,y)
{
    return x+y;
}

function Sub(x,y)
{
    return (x-y);
}

function Div(x,y)
{
    let div=x/y;
    div=div.toFixed(2)
    return div;
}

function Multiple(x,y)
{
    return x*y;
}


// export default Add;
export {Add,Sub,Multiple,Div}