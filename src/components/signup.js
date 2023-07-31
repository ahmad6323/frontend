import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  },[]);

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("users", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div className="signup">
      <h2>Register</h2>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <input
        className="inputBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter your password"
      />
      <button className="btn" type="button" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
