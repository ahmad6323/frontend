import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img className="logo" src="https://t3.ftcdn.net/jpg/03/64/04/62/360_F_364046237_vNzvuBopD8UQO6cb78djjLZ7WaECfNDR.jpg" alt="logo"></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
