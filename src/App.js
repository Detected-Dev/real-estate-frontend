import './App.css';
import { AuthProvider} from './context/AuthContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RouterProtecter from './pages/RouterProtecter';
import GuestRoute from './pages/GuestRoute';
import AdminDashboard from './pages/AdminDashboard';
import AgenceDashboard from './pages/AgenceDashboard';
import { WebProvider } from './context/WebContext';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import ScrollToTop from './pages/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WebProvider>
          <ScrollToTop/>
          <Routes>
              <Route element={<GuestRoute/>}>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
              </Route>

    
              <Route element={<RouterProtecter allowedRoles={['user']}/>} >
                <Route path='/' element={<HomePage />}/>
              </Route>
              <Route element={<RouterProtecter allowedRoles={['user']}/>} >
                <Route path='/properties' element={<PropertiesPage/>}/>
              </Route>
              <Route element={<RouterProtecter allowedRoles={['user']}/>} >
                <Route path='/properties/:id' element={<PropertyDetailsPage/>}/>
              </Route>
              <Route element={<RouterProtecter allowedRoles={['admin']}/>} >
                <Route path='/admin' element={<AdminDashboard />}/> 
              </Route>
              <Route element={<RouterProtecter allowedRoles={['agence']}/>} >
                <Route path='/agence' element={<AgenceDashboard />}/>
              </Route>
          </Routes>
        </WebProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App; 
