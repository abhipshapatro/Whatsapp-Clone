import React from 'react'
import ChatContainer from './ChatContainer'
import Sidebar from './Sidebar'
import './ChatPage.css'

function ChatPage({currentUser}){
  return (
    <div className='chat-page'>
      {/* sidebar */}
      <div className="chat-page-container">
        <Sidebar currentUser={currentUser} />
        {/* chat container */}
        <ChatContainer />
        {/* chat search */}
      </div>
    </div>
  )
}

export default ChatPage