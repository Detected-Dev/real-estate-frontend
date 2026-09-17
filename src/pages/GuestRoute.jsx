import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = () => {
  const {user , loading} = useAuth();
    if(loading){
        return <div>Loading ...</div>
    }
    if(user){
        return <Navigate to="/" replace/>
    }
    return <Outlet/>
}

export default GuestRoute