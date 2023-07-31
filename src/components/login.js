import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const login = ()=>{
    const [email, setEmail] = React.useState("");
  const [password, setPassword] =React.useState("");
  const navigate = useNavigate()

 const handleLogin = async ()=>{
    console.warn(email,password)
    let result =  await fetch("http://localhost:5000/login",{
      method:'post',
      body: JSON.stringify({email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if(result.name){
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/");
    }else{
      alert("please enter a correct details")
    }
   
  };
  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  },[]);

    return(
        <div className="signup">
      <h2>Login</h2>
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
      <button className="btn" type="button"onClick={handleLogin} >
        Login
      </button>
    </div>
    )
}

export default login;