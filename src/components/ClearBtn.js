import React from 'react';
import '../stylesheet/clearbtn.css';


const ClearBtn = (props) =>(
<div className='clear-btn' onClick={() =>props.handleClick()}>
    {props.children}
</div>


);

export default ClearBtn;