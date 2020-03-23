import React from 'react';
import './index.css';

export default function MessageInput(props) {
    return (
        <form onSubmit={props.callback} className="message-input-screen">
            <i className="far fa-laugh"></i>
            <input type="text" className="message-input" id="message-value" autoComplete="off" spellCheck="false" name="message" placeholder="Type a message here" />
        </form>
    );
}
