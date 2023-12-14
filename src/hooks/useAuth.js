import React, { useContext } from 'react'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthProvider';

function useAuth() {
  return useContext(AuthContext)
}

export default useAuth;