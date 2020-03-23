import React, { useState, useEffect } from 'react';
import MessageInput from '../MessageInput';
import ChannelBar from '../ChannelBar';
import Placeholder from '../../lib/Placeholder';
import Message from '../Message';

import './index.css';

export default function ChatMessages() {

    const userDefault = {
        user_id: 15,
        username: sessionStorage.getItem('username')
    }

    const [ messages, setMessages ] = useState([]);
    const [ messageAdded, setMessageAdded ] = useState(0);
    
    useEffect(() => {
        gotoBottom("messages");
    }, [messageAdded]);

    const renderMessages = ( message , index ) => {
        const classtype = message.user_id === userDefault.user_id ? "message-self" : "message";
        return <Message content={message.content} key={index} username={message.username} ownership={classtype} />;
    }

    const addMessage = event => {
        event.preventDefault();

        const content = event.target.message.value;
        const message = { user_id: userDefault.user_id, username: userDefault.username , content }
        document.querySelector('#message-value').value = "";

        setMessages(messages.concat(message));
        setMessageAdded(messageAdded + 1);
    }

    const gotoBottom = id => {
        let element = document.querySelector(`#${id}`);
        element.scrollTop = element.scrollHeight - element.clientHeight;
     }

    const messageList = messages.map(renderMessages);

    return (
        <div className="chat-messages">

            <ChannelBar />

            <div id="messages" className="messages">
                { messageList }
            </div>

            <MessageInput callback={addMessage}/>

        </div>
    );
}
