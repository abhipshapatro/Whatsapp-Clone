import React from 'react'
import './ChatMessage.css'

function ChatMessage({msg, time}) {
  return (
    <div className='chat-msg'>
        <div className="chat-msg-text">
            <p>{msg}</p>
        </div>
        <div className="chat-msg-date">
            <p>{time}</p>
        </div>
    </div>
  )
}

export default ChatMessage