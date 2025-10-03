import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import "./Signup.css";
import { baseURL } from "../../api";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 Debug: log payload before sending
    console.log("Signup payload:", inputValue);

    // Quick frontend validation
    if (!email || !username || !password) {
      handleError("Please fill in all fields!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${baseURL}/auth/signup`,
        { email, username, password },
        { withCredentials: true }
      );

      console.log("Signup API response:", data);

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("✅ Redirecting to dashboard...");
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-p6op.onrender.com"; // dashboard
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(
        "❌ API error:",
        error.response?.data || error.message
      );
      handleError(error.response?.data?.message || error.message);
    }

    // Reset form
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <div className="logo-container">
        <FaUserCircle size={80} color="#0380d1" />
      </div>
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/Signup"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
