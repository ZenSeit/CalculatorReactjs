import React from 'react';
import '../stylesheet/button.css';

function Button(props){

const isOp = valor =>{
    return isNaN(valor) && (valor !== '.' && (valor !=='='));
}


    return(
<div className={`container-button ${isOp(props.children) ? 'operator':''}`.trimEnd()}
onClick={() => {isOp(props.last) && props.last===props.children ? alert('You cant add two operators in a row'):props.handleClick(props.children);}}>
{props.children}
</div>
    );
}

export default Button;