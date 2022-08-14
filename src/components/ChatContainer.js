import {React, useState} from 'react'
import './ChatContainer.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from './ChatMessage';
import EmojiPicker from 'emoji-picker-react';

function ChatContainer() {

    const [msg, setmsg] = useState('')
    const [openEmojiBox, setopenEmojiBox] = useState(false)


  return (
    <div className='chat-container'>
        <div className="chat-container-header">
            <div className="chat-user-info">
                <div className="chat-user-img">
                    <img src="images/user.png" alt="" />
                </div>
                <p>AP PATI</p>
            </div>
            {/* <div className="chat-user-name"></div> */}

            <div className="chat-container-header-btn">
                <MoreVertIcon />
            </div>
        </div>

        {/* chat box container */}
        <div className="chat-box">
            <ChatMessage msg="Hii, how are you?" time="14-08-2022" />
            <ChatMessage msg="Hii, how are you?" time="14-08-2022" />
            <ChatMessage msg="Hii, how are you?" time="14-08-2022" />
        </div>
        {/* chat input  */}
        <div className="chat-input">
            {/* buttons */}

            {openEmojiBox && <EmojiPicker onEmojiClick={(event, emojiObject) => {
                setmsg(msg + emojiObject.emoji)
            }} />}


            <div className="chat-input-btn">
                <InsertEmoticonIcon onClick={() => {
                    setopenEmojiBox(!openEmojiBox)
                }} />
                <AttachFileIcon />
            </div>
            {/* text input */}
            <form>
                <input type="text" placeholder='Type a message...' value={msg} onChange={(e) => {
                    setmsg(e.target.value)
                }} />
            </form>
            {/* send btn */}
            <div className="chat-input-send-btn">
                <SendIcon />
            </div>
        </div>
    </div>
  )
}

export default ChatContainer