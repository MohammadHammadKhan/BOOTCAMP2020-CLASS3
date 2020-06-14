import React from 'react';

import Curry from './Curry'
import Desert from './Desert'

function Dinner(props){
    return(
        <div>
            <Curry curry={props.curry}/>
            <Desert desert={props.desert}/>
        </div>
    );
}
export default Dinner;