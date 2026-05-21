import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

import { getLoginState, existsHashAndSalt } from "./services/StorageManager";

export default function App() {
  //We assume not logged in and still loading
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMasterPassword, setHasMasterPassword] = useState(false);

  //When the app first starts, check storage THIS RUNS FIRST!!!
  useEffect(() => {
    async function loadData() {
    const mPasswordState = await existsHashAndSalt();
      if (mPasswordState) {   
        setHasMasterPassword(true);
        const loginState = await getLoginState()
        if (loginState == "true") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false)
        }  
      }
      setIsLoading(false);
    }
    loadData();
  }, []); //Empty array = only run this once at the start

  // While loading show nothing
  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  } 

  //After loading show the right page
  return (
    <MemoryRouter initialEntries={[hasMasterPassword ? (isLoggedIn ? "/MainPage" : "/LoginPage") : "/RegisterPage"]}>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </MemoryRouter>
);
}