
import React from 'react';
import './index.css';

const dateTime=new Date(/*2023,2,12,14*/);
const time=dateTime.getHours();
let col={};
let action='';


if(time <12 && time >=1)  
{
        action="Good Morning";
        col.color="green";
}
else if(time>=12 && time <=19)
{
        action="AfterNoon";
        col.color="orange";
}
else
{
        action="Good Night";
        col.color="red";
}

function Grettings()
{
    return(
        <>
        <div className='cont'>
            <h1>Hi,Priyanshu <span style={col}>{action}</span></h1>
        </div>   
        </>
    )
}

export default Grettings;