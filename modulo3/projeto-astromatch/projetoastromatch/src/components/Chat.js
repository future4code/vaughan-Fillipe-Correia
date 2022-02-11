import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
import './Chat.css';


const Chat = () => {
    const [messages, setMessages] = useState([]);

useEffect (() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/matches')
    .then(res => {
        setMessages(res.data.matches);
        console.log(res.data.matches);
        console.log(messages);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
}, [])

  return (
    <div className="chats">
        {messages.map(message => (
            <div key={message.id} className="chat">
          <Avatar key={message.id} alt="Remy Sharp" src={message.photo} />
          
            <p>{message.name}</p>
            <input type="text" placeholder="Type a message..." />
            </div>
           
        ))}
    </div>
  );
}

export default Chat;