import { createContext ,useContext,useEffect,useState } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [properties, setProperties] = useState(null);
    const [loading, setLoading] = useState(true);
    const [clickProfile, setClickProfile] = useState(false)

    // AUTH : 
    const getUser = async() => {
        try{
            const response = await api.get('/api/user');
            setUser(response.data.user);
        }catch(error){
            setUser(null);
        }finally{
            setLoading(false);
        }
    }

    const register = async(formData) => {
        await api.get("/sanctum/csrf-cookie");
        const response = await api.post("/api/register" , {
            name : formData.name,
            email : formData.email,
            password : formData.password,
            password_confirmation : formData.password_confirmation,
        }) 
        console.log("REGISTER SUCCESS:", response.data);
    }

    const login = async(formData) => {
        await api.get("/sanctum/csrf-cookie");
        const response = await api.post("/api/login" , {
            email : formData.email ,
            password : formData.password
        })
        console.log("LOGIN SUCCESS :" , response.data);
        setUser(response.data.user);
    }

    const logout = async() =>  {
        await api.post("/api/logout");
        setUser(null);
        setClickProfile(false);
    }

    // WEBSITE : 
    const getProperties = async() => {
        try{
            const response = await api.get('/api/properties');
            setProperties(response.data.data);
        }catch(error){
            console.log('FAiled fetching Properties')
        }
    }

    useEffect(()=> {
        getUser();
        getProperties();
    },[])

    return (
        <AuthContext.Provider
            value={{
                user,
                register,
                login,
                loading,
                setLoading,
                clickProfile ,
                setClickProfile,
                logout,
                properties,
                setProperties
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth =  () =>{
    return useContext(AuthContext);
} 

