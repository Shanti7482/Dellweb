
import React from 'react';
import { useState } from 'react';
// import AddIcon from '@mui/icons-material/Add';

const Form = () =>{

    const [fullName,setFullName]=useState(
        {
            fname:'',
            lname:'',
            email:'',
            phone:'',
        }
    );

    



    const event = ( props)=>{
       
        props.preventDefault();
        // console.log(props.target.value)
        // console.log(props.target.name);
        // console.log(props.target.placeholder);

        // const value=props.target.value;
        // const name=props.target.name;

        const {name ,value}= props.target;

        setFullName( (previusValue) =>
        {
            // console.log(previusValue);
            return {
                ...previusValue,
                [name]: value,
            }






            /*if(name === 'fName')
                return{
                    fName:value,
                    lName:previusValue.lName,
                    email:previusValue.email,
                    phone:previusValue.phone,
                };
            else if(name === 'lName')
                return{
                    fName:previusValue.fName,
                    lName:value,
                    email:previusValue.email,
                    phone:previusValue.phone,
                }
            else if(name === 'email')
                return{
                    fName:previusValue.fName,
                    lName:previusValue.lName,
                    email:value,
                    phone:previusValue.phone,
                    autoComplete:'off',
                }
                else if(name === 'phone')
                return{
                    fName:previusValue.fName,
                    lName:previusValue.lName,
                    email:previusValue.email,
                    phone:value,
                }
                */
        });

    }


    
    const changeState = (event) =>{

        event.preventDefault();
        setFullName(fullName);
        alert("submited")
    }
    return(
        <>
        <div className='main-div'>
            <form onSubmit={changeState}>
                <div className="input-field">
                <h1>Hello {fullName.fname} {fullName.lname} </h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <input type="text" placeholder='Enter Your First Name' onChange={event}  name='fname' value={fullName.fname}/>
                
                <input type="text" placeholder='Enter Last Name' onChange={event} name='lname' value={fullName.lname}/>


                <input type="email" placeholder='Enter Your Email' onChange={event} name='email' value={fullName.email}/>
                
                <input type="text" placeholder='Enter Your phone' onChange={event} name='phone' value={fullName.phone}/>
                
                <button type='submit' >click me</button>
                </div>
            </form>
        </div>
        </>
    )
}


export default Form;