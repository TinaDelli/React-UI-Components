import React from 'react';
import './Card.css';

function CardContent (){
    return (
        <div className="card-content">
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each
                state in your application.
            </p>
            <p className="p-grey">reactjs.org</p>
        </div>
    );
}

export default CardContent;