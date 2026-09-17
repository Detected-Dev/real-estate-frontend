import './App.css';
import { AuthProvider} from './context/AuthContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RouterProtecter from './pages/RouterProtecter';
import GuestRoute from './pages/GuestRoute';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route element={<GuestRoute/>}>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
            </Route>

              <Route path='/dashboard' element={<Dashboard/>}/>
              
            <Route element={<RouterProtecter/>}>
              <Route path='/' element={<HomePage />}/>
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App; 
