import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import { logout } from "./store/authSlice";
import { Header } from "../src/components/index";
import { Footer } from "../src/components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getUserAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400 ">
        <div className="w-full block ">
          <Header />
          <main className="text-center">{/* <Outlet /> */}TODO:</main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
