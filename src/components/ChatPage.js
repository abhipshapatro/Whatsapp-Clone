import React from 'react'
import ChatContainer from './ChatContainer'
import Sidebar from './Sidebar'
import './ChatPage.css'

const ChatPage = () => {
  return (
    <div className='chat-page'>
      {/* sidebar */}
      <div className="chat-page-container">
        <Sidebar />
        {/* chat container */}
        <ChatContainer />
        {/* chat search */}
      </div>
    </div>
  )
}

export default ChatPage