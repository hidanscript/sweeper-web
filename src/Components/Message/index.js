import React from 'react';
import './index.css';

function Message(props) {
    return (
        <div className={props.ownership}>
            <p className="username-message">{props.username}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Message
