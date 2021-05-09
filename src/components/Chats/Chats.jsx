import React from 'react'
import Chat from '../Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Luffy"
                message="I am hungry!  🔥 "
                timeStamp="10 minutes ago"
                profilePic="https://cdnb.artstation.com/p/assets/images/images/025/523/763/large/flat-bunnyy-luffy.jpg?1586079511"
            />
            <Chat 
                name="Zoro"
                message="I want to drink Sake!"
                timeStamp="25 minutes ago"
                profilePic="https://cdna.artstation.com/p/assets/images/images/025/524/306/large/flat-bunnyy-zoro.jpg?1586081431"
            />
            <Chat 
                name="Chopper"
                message="I am not a steak!"
                timeStamp="30 minutes ago"
                profilePic="https://cdnb.artstation.com/p/assets/images/images/025/524/349/large/flat-bunnyy-chopper.jpg?1586081662"
            />
            <Chat 
                name="Sanji"
                message="I love you!"
                timeStamp="10 weeks ago"
                profilePic="https://cdna.artstation.com/p/assets/images/images/025/524/272/large/flat-bunnyy-sanji.jpg?1586081294"
            />
        </div>
    )
}

export default Chats
