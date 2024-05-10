import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from './context/AuthContext'; 
import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <AuthProvider> {/* Asegúrate de que AuthProvider envuelva a ProtectedRoute */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;



