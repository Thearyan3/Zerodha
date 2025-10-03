import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../api";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const isDev = window.location.hostname === "localhost";

useEffect(() => {
  if (isDev) {
    setAuthenticated(true); // skip token check in dev
    setLoading(false);
    return;
  }

  // normal token verification code here...
}, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/auth/verify`, { withCredentials: true })
      .then((res) => {
        // assuming your backend sends { status: true, user: username } when valid
        if (res.data.status) {
          setAuthenticated(true);
        } else {
          // redirect to frontend signup page
          window.location.href = "https://zerodha-frontend-dm96.onrender.com/signup";
        }
      })
      .catch(() => {
        window.location.href = "https://zerodha-frontend-dm96.onrender.com/signup";
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (!authenticated) return null; // don't render dashboard until verified

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
