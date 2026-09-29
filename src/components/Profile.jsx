import { useAuth } from "../context/AuthContext";
import ProfileMenu from './ProfileMenu';
import { useWebStates } from '../context/WebContext';

const Profile = () => {
    const {user} = useAuth();
    const {handleClick,setHandleClick}  = useWebStates();
  return (
    <>
        <button className='profile' onClick={() => {setHandleClick(prev => ({
            ...prev , profile : !handleClick.profile
        }))}}> 
            <div className='profile_photo'>
                <img src={
                    user.profile_image
                    ? `http://localhost:8000/storage/${user.profile_image}`
                    : '/default.jpeg'
                } alt="" />
            </div>
        </button>
        {handleClick.profile && <ProfileMenu/>}
    </>
  )
}

export default Profile