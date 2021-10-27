import { Avatar } from "@mui/material";
import { useState } from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [status, setStatus] = useState(false);
  const handleLogout = () => {
    setStatus(true);
    < Link to="/signin" > Logout</Link >;
  };
  const handleLogin = () => {
    setStatus(false);
    < Link to="/signin" > Logout</Link >
  };

  return (
    <div
      style={{
        backgroundColor: "#dfdfdf",
        padding: "1rem 5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="headerLeft">
        <img src="/footer-logo.png" alt="" />
      </div>
      <div className="headerCenter">
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/work">Work</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/employee">Employee</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/search">Search</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/profile">Profile</Link></h2>
      </div>
      <div className="headerRight">
        <SplitButton
          key="Primary"
          id="dropdown-split-variants-Primary"
          variant="primary"
          title={<Avatar />}
        >
          {status ?
            <Dropdown.Item eventKey="1" onClick={() => handleLogout()}>Louout</Dropdown.Item>
            :
            <Dropdown.Item eventKey="1" onClick={() => handleLogin()}>Login</Dropdown.Item>
          }
        </SplitButton>
      </div>
    </div>
  );
};
