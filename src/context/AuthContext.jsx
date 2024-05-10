import React, { createContext, useState, useEffect } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // lógica para establecer el usuario actual
  // cargar el usuario desde el almacenamiento local o una API

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
// Cambia esta línea para exportar AuthContext como un export nombrado
export { AuthContext };