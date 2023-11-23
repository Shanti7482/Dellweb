import React from 'react';

import Cardsdata from './Cardsdata';
import Ncards from './Ncards';
import Heading from './Heading';

const App=()=>{
    return (
        <>
        <Heading/>
        <div className="card">{Cardsdata.map(Ncards)}</div>
        </>
    );
}

export default App;