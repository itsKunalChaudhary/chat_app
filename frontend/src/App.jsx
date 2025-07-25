import React, { useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import {useThemeStore} from "./store/useThemeStore.js";

const App = () => {
    const { authUser, checkAuth, isCheckingAuth, loading, onlineUsers } = useAuthStore();
    const { theme } = useThemeStore();

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);


    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isCheckingAuth && !authUser && loading) return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
        </div>
    );

    return (
        <div data-theme={theme}>
            <Navbar />
            <Routes>
                <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
                <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
                <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to="/login" />} />
                <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
            </Routes>
            <Toaster />
        </div>
    );
};

export default App;
