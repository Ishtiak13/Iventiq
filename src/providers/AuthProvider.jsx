import React, { Children, createContext } from "react";
export const AuthContext = createContext();
const AuthProvider = ({children}) => {





    const authData ={
        email: 'ishtiak@g.bracu.ac.bd'
    }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
