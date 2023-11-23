import React from 'react';

const Select = () =>{
    const name=['a','b','c','d','e','f','g','h']


    return(<>
    <div >
        <select className='select-box'>
            {name.map((value)=>{
            return <option >{value}</option>
            })}
        </select>
    </div>
    </>)
}

export default Select;