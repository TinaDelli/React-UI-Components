import React from 'react';
import './Button.scss';

function ActionButton (props){
    return (
        <button className={props.prop.buttonStyle}>
        {props.prop.text}
        </button>
    );
}

export default ActionButton; 