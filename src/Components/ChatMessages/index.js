import React, { useState, useEffect } from 'react';
import MessageInput from '../MessageInput';
import ChannelBar from '../ChannelBar';
import axios from 'axios';
import SocketClient from 'socket.io-client';
import Message from '../Message';

import './index.css';

const endpoint = "http://127.0.0.1:4000";
const socket = SocketClient(endpoint);

const userDefault = {
    user_id: sessionStorage.getItem('user_id'),
    username: sessionStorage.getItem('username')
}

export default function ChatMessages() {

    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        gotoElementBottom("messages");
        axios.get(endpoint).then(res => setMessages(res.data));

        //Socket starts listening
        socket.on("new message", data => {
            setMessages( messages.concat(data) )
            console.log(data);
        });
    //eslint-disable-next-line
    }, []);

    //When messages are updated, go to the bottom of message list
    useEffect(() => {
        gotoElementBottom("messages");
    }, [messages]);

    const renderMessages = ( message , index ) => {
        //eslint-disable-next-line
        const classtype = message.user_id == userDefault.user_id ? "message-self" : "message";
        return <Message content={message.content} key={index} username={message.username} ownership={classtype} />;
    }

    const addMessage = event => {
        event.preventDefault();

        const content = event.target.message.value;
        const message = { user_id: userDefault.user_id, username: userDefault.username , content }
        
        resetMessageInput();
        setMessages(messages.concat(message));

        socket.emit("new message", message);
    }

    const resetMessageInput = () => {
        document.querySelector('#message-value').value = "";
    }

    const gotoElementBottom = element_id => {
        let element = document.querySelector(`#${element_id}`);
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
