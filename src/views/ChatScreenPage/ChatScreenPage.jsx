import React from 'react'
import './ChatScreenPage.css'
import Header from '../../components/Header'
import ChatScreen from '../../components/ChatScreen'

const ChatScreenPage = () =>(
	<>
		<Header backButton="/chat" />
		<ChatScreen />
	</>
)

export default ChatScreenPage
