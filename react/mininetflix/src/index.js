import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';




ReactDOM.render(
    <>
    
    <App/>
   
       {/* <div>
            <div>
                <img src="https://wallpapercave.com/wp/wp1917154.jpg" alt="image" className='card_img'/>
                <div className='card_info'>
                <span className='card_category'>first title</span>
                <h3 className='title'>Card Tittle</h3>
                <a href="https://www.netflix.com/in/title/81183494" target="_blank" >
                    <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src="https://wallpapercave.com/w/wp1886660.jpg" alt="image" className='card_img'/>
                <div className='card_info'>
                <span className='card_category'>A Marval Original Series</span>
                <h3 className='title'>Iron Man 3</h3>
                <a href="https://www.netflix.com/in/title/81183494" target="_blank" >
                    <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
        <div>
            <div>
                <img src="https://wallpapercave.com/w/AFtCNLt.jpg" alt="image" className='card_img'/>
                <div className='card_info'>
                <span className='card_category'>A Marval Original Series</span>
                <h3 className='title'>Iron Man 2</h3>
                <a href="https://www.netflix.com/in/title/81183494" target="_blank" >
                    <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>*/}
    </>,
    document.getElementById('root'));



















// console.log(Cardsdata[0].imgsrc);
// const Ncards=(val)=>
// {
//     return(  <Cards  imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         ahref={val.ahref}/>

//     )

// }



{/* <Cards  
            imgsrc={Cardsdata[0].imgsrc}
            title={Cardsdata[0].title}
            sname={Cardsdata[0].sname}
            ahref={Cardsdata[0].ahref}
    /> */}

    // <Cards  
    //         imgsrc={Cardsdata[0].imgsrc}
    //         title="A Marval Original Series"
    //         sname="Iron Man"
    //         ahref="https://www.netflix.com/in/title/80057281"
    // />

    // <Cards  
    //         imgsrc="https://wallpapercave.com/w/wp3867966.jpg"
    //         title="A Marval Original Series"
    //         sname="Iron Man"
    //         ahref="https://www.netflix.com/in/title/80057281"
    // />


    // const Cards=(props)=>{
    //     console.log(props);
    //     return(
    //         <div>
    //         <div>
    //             <img src={props.imgsrc}/*"https://wallpapercave.com/w/wp3867966.jpg"*/ alt="image" className='card_img'/>
    //             <div className='card_info'>
    //             <span className='card_category'>{props.title}{/*A Marval Original Series*/}</span>
    //             <h3 className='title'>{props.sname}{/*Iron Man*/}</h3>
    //             <a href={props.ahref} target="_blank" >
    //                     <button>Watch Now</button>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    
    //     )
    // }