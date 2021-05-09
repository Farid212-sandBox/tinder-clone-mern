import HomePage from '../views/HomePage'
import ChatPage from '../views/ChatPage'
import ChatScreenPage from '../views/ChatScreenPage'

const indexRoutes = [
	{ path: '/chat/:person', component: ChatScreenPage },
	{ path: '/chat', component: ChatPage },
	{ path: '/', component: HomePage }
]

export default indexRoutes
