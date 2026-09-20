import React, { use } from 'react'
import { useAuth } from "../context/AuthContext";
import ProfileMenu from './ProfileMenu';
import { useWebStates } from '../context/WebContext';

const Profile = () => {
    const {user} = useAuth();
    const {clickProfile,setClickProfile}  = useWebStates();
  return (
    <>
        <button className='profile' onClick={() => {setClickProfile(prev => !prev)}}> 
            <p className='profile_name'>{user.name}</p>
            <div className='profile_photo'>
                <img src={
                    user.profile_image
                    ? `http://localhost:8000/storage/${user.profile_image}`
                    : '/default.jpeg'
                } alt="" />
            </div>
        </button>
        {clickProfile && <ProfileMenu/>}
    </>
  )
}

export default Profile