import React from 'react'
import { useAuth } from "../context/AuthContext";
import ProfileMenu from './ProfileMenu';

const Profile = () => {
    const {user,clickProfile,setClickProfile} = useAuth()
  return (
    <>
        <button className='profile' onClick={() => {setClickProfile(prev => !prev)}}> 
            <p className='profile_name'>{user.name}</p>
            <div className='profile_photo'>
                <img src="./default.jpeg" alt="" />
            </div>
        </button>
        {clickProfile && <ProfileMenu/>}
    </>
  )
}

export default Profile