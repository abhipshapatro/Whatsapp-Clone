import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import UserProfile from './UserProfile';

const Sidebar = () => {
  return (
    <div className="sidebar">

        {/* Sidebar header */}
        <div className="sidebar-header">
            <div className="sidebar-header-img">
                <img src="images/user.png" alt="" />
            </div>
            <div className="sidebar-header-btn">
                <TollIcon />
                <InsertCommentIcon />
                <MoreVertIcon />
            </div>
        </div>

        {/* Sidebar search */}
        <div className="sidebar-search">
            <div className="sidebar-search-input">
                <SearchIcon />
                <input type="text" name='search' placeholder='Search...' />
            </div>
        </div>

        {/* Sidebar chat list */}
        <div className="sidebar-chat-list">
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
            <UserProfile name='AP PATI' photoURL='images/user.png' />
            <UserProfile name='Gym Buddy' photoURL='images/user.png'/>
        </div>

    </div>
  )
}

export default Sidebar