import api from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";

const WebContext = createContext(null);
export const WebProvider = ({ children }) => {

    // STATES DATA :
    // STATES ACTIONS :
    const [clickProfile, setClickProfile] = useState(false);
    
    return (
        <WebContext.Provider
        value={{
            clickProfile ,
            setClickProfile,
        }}
        >
            {children}
        </WebContext.Provider>
    )
}


export const useWebStates =  () =>{
    return useContext(WebContext);
}
