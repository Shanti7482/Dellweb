
import React from 'react';

const Cards=(props)=>{
    // console.log(props);
    return(
        <div className="container">
        <div className='contant'>
            {/* <div className='img'> */}
                <img src={props.imgsrc}/*"https://wallpapercave.com/w/wp3867966.jpg"*/ alt="image" className='card_img'/>
            {/* </div> */}
            <div className='card_info'>
            <span className='card_category'>{props.title}{/*A Marval Original Series*/}</span>
            <h3 className='title'>{props.sname}{/*Iron Man*/}</h3>
            <a href={props.ahref} target="_blank" >
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
        </div>
    

    )
}

export default Cards;