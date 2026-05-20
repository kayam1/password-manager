import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  //We assume not logged in and still loading
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //When the app first starts, check storage
  useEffect(() => {
    async function loadData() {
        const result = await chrome.storage.session.get(["isLoggedIn"]);
        if (result.isLoggedIn == "true")
          setIsLoggedIn(true);
        else 
          setIsLoggedIn(false)
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
    <MemoryRouter initialEntries={[isLoggedIn ? "/MainPage" : "/LoginPage"]}>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </MemoryRouter>
);
}