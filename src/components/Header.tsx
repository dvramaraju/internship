import { Avatar } from "@mui/material";
import { useState } from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [status, setStatus] = useState(false);
  const history = useHistory();
  const handleLogin = () => {
    setStatus(true);
    history.push("/signin");
    <Link to="/signin">Login</Link >;
  };

  const handleLogout = () => {
    setStatus(false);
    history.push("/signin");
    <Link to="/signin">Logout</Link >;
  };

  return (
    <div
      style={{
        backgroundColor: "#dfdfdf",
        padding: "1rem 2rem",
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
          {status
            ? <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            : <Dropdown.Item onClick={handleLogin}>Log IN</Dropdown.Item>
          }
        </SplitButton>
      </div>
    </div>
  );
};
