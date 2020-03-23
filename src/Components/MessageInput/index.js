import React from 'react';
import './index.css';

export default function MessageInput() {
    return (
        <div className="message-input-screen">
            <i className="far fa-laugh"></i>
            <input type="text" className="message-input" autoComplete="off" spellCheck="false" placeholder="Type a message here" />
        </div>
    );
}
