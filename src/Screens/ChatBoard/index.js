import React from 'react';
import ChatPanel from '../../Components/ChatPanel';
import ChatScreen from '../../Components/ChatScreen';

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
