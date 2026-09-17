import React, { use } from 'react'
import { useAuth } from '../context/AuthContext';

const ProfileMenu = () => {
    const {user,logout} = useAuth();
  return (
    <div className='profile_menu'>
        <div>
            <p className='profile_email'>{user.email}</p>
        </div>
        <div className='profile_button'>
            <button>My Profile</button>
        </div>
        <div className='profile_button'>
            <button>Settings</button>
        </div>
        <div className='profile_button'>
            <button>Notifications</button>
        </div>
        <div className='profile_button'>
            <button>Dark Mode</button>
        </div>
        <div className='profile_button'>
            <button onClick={() => logout()}>Log out</button>
        </div>
    </div>
  )
}

export default ProfileMenu