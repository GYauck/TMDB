import { createContext, useState } from "react";



export const AuthContext = createContext({}) 

const AuthContextProvider = ({children}) => {

    const [userLog, setUserLog] = useState({
        user: null,
        isAuthenticated: false,
    })

    const toggleAuth = (user) => {
        setUserLog({
            user: user,
            isAuthenticated: !userLog.isAuthenticated, 
        })
    };
    const value = {...userLog,toggleAuth};
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider