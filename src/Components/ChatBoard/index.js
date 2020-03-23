import React from 'react';
import ChatPanel from '../ChatPanel';
import ChatScreen from '../ChatScreen';

import './index.css';

function ChatBoard() {
    return (
        <div className="chat-board">
            <ChatPanel />
            <ChatScreen />
        </div>
    );
}

export default ChatBoard
