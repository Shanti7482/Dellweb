import React from 'react'
import Title from './Title';
import Select from './Select';
import Result from './Result';

const Card = ()=>{
    return(
        <>
            <div className="container">
                <div className="title"><Title /></div>
                <input type="text"  className='input'/>
                <div className='select-container'>
                    <Select  />
                    <Select  />
                </div>

                <Result/>
            </div>
        </>
    )
}

export default Card;