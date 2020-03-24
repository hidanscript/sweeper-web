import React from 'react';
import { Redirect } from 'react-router-dom';
import ChatPanel from '../../Components/ChatPanel';
import ChatScreen from '../../Components/ChatScreen';

import './index.css';

function ChatBoard() {

    const isLogged = sessionStorage.getItem("user_id");

    if(isLogged) {
        return (
            <div className="chat-board">
                <ChatPanel />
                <ChatScreen />
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
}

export default ChatBoard
