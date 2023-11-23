import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<>
  
  <App/>
</>,
document.getElementById('root')
);


/*import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
    <h1>Netflix Pick</h1>
    <p>List of 5 best sereis on Netflix</p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>My Holo Love</li>
      <li>My First -2 Love</li>
      <li>Mr. Robot</li>
    </ol>
  </>,
  document.getElementById('root')
);*/

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// const fullName="Hi,Abhishek";
// const lastName="Kumar";
// const imglink1="https://picsum.photos/200/300";
// const imglink2="https://picsum.photos/150/300";
// const imglink3="https://picsum.photos/250/300";
// const link="https://en.wikipedia.org/wiki/History_of_India"


// var t=new Date();
// var time=t.toLocaleTimeString();

// var d=new Date();
// var date=d.toLocaleDateString();

// ReactDOM.render(
//   <>
//     <div className='contant'>
    
//       <h1 contentEditable="true" className='title'>{`${fullName} ${lastName}`}</h1>
//       <div className='img1'>
//       <img src={imglink1 } alt="Image1 " title='Image' />
//       <img src={imglink2} alt="Image" title={imglink1} />
//       <img src={imglink3} alt="Image" title={imglink3} />
//       <a href={link} target="_blank"><img  className='img' /></a>
//       </div>

//     </div>

//     <div className="time">
//       <p>Today Time is {`${time}`}</p> 
//       <p>Date is {`${date}`}</p>
//      </div> 

//   </>,
//   document.getElementById('root')
// );