const CurrentTime=()=>{
    const newTime=new Date().toLocaleTimeString();
  
    return(
      <>
      <div className='container'>
      <h1>🕥</h1>
      {newTime}</div>
      
      </>
    )
  }


export default CurrentTime;