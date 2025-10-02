import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
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
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:3002/signup", // must match backend
      { ...inputValue },
      { withCredentials: true } // important for cookies
    );

    console.log("Signup API response:", data); // 🔍 Debug

    const { success, message } = data;
    if (success) {
      toast.success(message, { position: "bottom-right" });

      // ✅ Redirect to dashboard after 1s
      setTimeout(() => {
        window.location.href = "http://localhost:3000"; // dashboard app
      }, 1000);
    } else {
      toast.error(message, { position: "bottom-left" });
    }
  } catch (error) {
    console.error(error);
  }

  // Clear input
  setInputValue({ email: "", password: "", username: "" });
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
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
