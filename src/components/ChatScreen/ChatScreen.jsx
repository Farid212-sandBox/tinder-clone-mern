import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Luffy',
            image: 'https://cdnb.artstation.com/p/assets/images/images/025/523/763/large/flat-bunnyy-luffy.jpg?1586079511',
            message: 'Hi!'
        },
        {
            name: 'Luffy',
            image: 'https://cdnb.artstation.com/p/assets/images/images/025/523/763/large/flat-bunnyy-luffy.jpg?1586079511',
            message: 'I am hungry'
        },
        {
            message: 'ok'
        }
    ])

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages, { message: input }])
        setInput('')
    }
    
    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">you match with Luffy on 9/05/2021</p>
            {messages.map((message, key)=>(
                message.name ?
                <div className="chatScreen__message" key={key}>
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                : 
                <div className="chatScreen__message" key={key}>
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            ))}
            
            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." 
                    type="text"
                />
                <button 
                    onClick={handleSend}
                    type="submit"
                    className="chatScreen__inputButton"
                >
                    SEND
                </button>
            </form>
        
        </div>
    )
}

export default ChatScreen
