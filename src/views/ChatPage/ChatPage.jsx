import React from 'react'
import './ChatPage.css'
import Header from '../../components/Header'
import Chats from '../../components/Chats'

const ChatPage = () => (
	<>
		<Header backButton="/" />
		<Chats /> 
	</>
)

export default ChatPage
