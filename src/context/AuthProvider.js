import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>  {
    const [auth, setAuth] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        function getUserData() {
            const headers = {
                'Authorization': localStorage.getItem('token')
            }
    
            axios.get('/get-user-auth', {headers: headers}).then(res => {
                setAuth({role: res.data.role})
                setIsLoggedIn(true);
            }).catch(err => {
                console.log(err)
            })
        }
        

        if (localStorage.getItem('token')) {
            getUserData()
        } else {
            setIsLoggedIn(false)
        }
    }, [])


    return (
        <AuthContext.Provider value={{auth, setAuth, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;