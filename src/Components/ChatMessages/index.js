import React, { useState, useEffect } from 'react';
import MessageInput from '../MessageInput';
import ChannelBar from '../ChannelBar';
import Placeholder from '../../lib/Placeholder';
import Message from '../Message';

import './index.css';

export default function ChatMessages() {

    const userDefault = {
        user_id: 15,
    }

    const [ messages, setMessages ] = useState([]);
    
    useEffect(() => {
        setMessages(Placeholder.Messages);
    }, []);

    const renderMessages = ( message , index ) => {
        const classtype = message.user_id === userDefault.user_id ? "message-self" : "message";
        return <Message content={message.content} key={index} username={message.username} ownership={classtype} />;
    }

    const messageList = messages.map(renderMessages)

    return (
        <div className="chat-messages">

            <ChannelBar />

            <div className="messages">
                { messageList }
            </div>

            <MessageInput />

        </div>
    );
}
