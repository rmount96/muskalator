import React from 'react';
import '../App.css';

const TranslatedName = (props) => {
    return (
        <div className="name-div">
        {
            <p className="new-name">Your name would be <br />{props.name}</p>
        }
        </div>
    )
}

export default TranslatedName;