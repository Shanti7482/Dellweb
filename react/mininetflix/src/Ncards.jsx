
import React from 'react';
import Cards from './Cards';


const Ncards=(val)=>
{
    return(  
        <Cards  imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                ahref={val.ahref}/>

    )

}


export default Ncards;