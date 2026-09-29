import './App.css';
import { AuthProvider} from './context/AuthContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RouterProtecter from './pages/RouterProtecter';
import GuestRoute from './pages/GuestRoute';
import AdminDashboard from './pages/AdminDashboard';
import AgencyDashboard from './pages/AgencyDashboard';
import { WebProvider } from './context/WebContext';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import ScrollToTop from './pages/ScrollToTop';
import AddPropertyForm from './components/AddPropertyForm';
import MakeOffrePage from './pages/MakeOffrePage';
import Chatbot from './components/Chatboot/ChatBoot';

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
                <Route path='/properties/:id/make-offre' element={<MakeOffrePage/>}/>
              </Route>
              <Route element={<RouterProtecter allowedRoles={['admin']}/>} >
                <Route path='/admin' element={<AdminDashboard />}/> 
              </Route>
              <Route element={<RouterProtecter allowedRoles={['agence']}/>} >
                <Route path='/agence' element={<AgencyDashboard />}/>
              </Route>
          </Routes>
              <Chatbot/>
        </WebProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App; 
