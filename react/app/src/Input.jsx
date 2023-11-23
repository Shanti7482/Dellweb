
import React, { useState } from 'react';


const Input = () =>
{
    const [name,setName]=useState('');

    const [firstName,setFirstName]=useState('')


    const [lastName,setLastName]=useState('');
    const [fullName,setFullName]=useState('');
  
    const eventFull= (propsfull) =>{
        setLastName(propsfull.target.value)
    }


    const event = ( props)=>{
        // console.log(props.target.value)
        let a=props.target.value;
        setFirstName(a);
    }


    
    const changeState = (event) =>{
        event.preventDefault();

        setName(firstName);
        setFullName(lastName);
    }
    return(
        <>
        <div className='main-div'>
            <form onSubmit={changeState}>
                <div className="input-field">
                <h1>Hello {name} {fullName}</h1>
                <input type="text" placeholder='Enter Your Name' onChange={event} value={firstName}/>
                {/* <br/> */}
                <input type="text" placeholder='Enter Your Name' onChange={eventFull} value={lastName}/>
                
                {/* <button type='submit' onClick={changeState}>click me</button> */}
                
                <button type='submit' >click me</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Input;