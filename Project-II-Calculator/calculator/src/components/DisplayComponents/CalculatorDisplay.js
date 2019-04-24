import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButtion from '../ButtonComponents/ActionButton';

const buttons = [
    {
        text: "clear",
        buttonStyle:"wideBox",
    },
    {
        text: "9",
        buttonStyle:"numberStyle",
    },
    {
        text: "8",
        buttonStyle:"numberStyle",
    },
    {
        text: "7",
        buttonStyle:"numberStyle",
    },
    {
        text: "6",
        buttonStyle:"numberStyle",
    },
    {
        text: "5",
        buttonStyle:"numberStyle",
    },
    {
        text: "4",
        buttonStyle:"numberStyle",
    },
    {
        text: "3",
        buttonStyle:"numberStyle",
    },
    {
        text: "2",
        buttonStyle:"numberStyle",
    },
    {
        text: "1",
        buttonStyle:"numberStyle",
    },
    {
        text: "0",
        buttonStyle:"wideBox",
    }
    
];

const action = [
    
    {
        text: "/",
        buttonStyle:"actionStyle",
    },
    {
        text: "x",
        buttonStyle:"actionStyle",
    },
    {
        text: "-",
        buttonStyle:"actionStyle",
    },
    {
        text: "+",
        buttonStyle:"actionStyle",
    },
    {
        text: "=",
        buttonStyle:"actionStyle",
    }
]


function CalculatorDisplay(props){
    return(
        <div>
            <div className="display">
                <p>0</p>
            </div>
            <div className="calcBox" onClick={()=> props.onClick()}>
            <div className="actionBox">
            {action.map((x, i) => {
                return <ActionButtion key={i} prop={x} />
            })}
            </div>
                <div className="numberBox">
                {props.value}
                {buttons.map((x,i) => {
                    return <NumberButton key={i} buttonProp={x} />
                })}
                </div>
            </div>
        </div>
   
    )
}

export default CalculatorDisplay;