import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const WebContext = createContext(null);
export const WebProvider = ({ children }) => {

    // STATES DATA :
    // STATES ACTIONS :
    const [clickProfile, setClickProfile] = useState(false);
    const [handleClick, setHandleClick] = useState({
        profile : false ,
        addProperty : false
    })
    const [agencies, setAgencies] = useState([]);
    const getAgencies = async() => {
        try{
            const response = await api.get('/api/agencies');
            setAgencies(response.data.data);
        }catch(error){
            console.log('Failed fetching Agencies');
        }
    }
    useEffect(() => {
        getAgencies();
    },[])
    
    return (
        <WebContext.Provider
        value={{
            clickProfile ,
            setClickProfile,
            handleClick,
            setHandleClick,
            agencies
        }}
        >
            {children}
        </WebContext.Provider>
    )
}


export const useWebStates =  () =>{
    return useContext(WebContext);
}
