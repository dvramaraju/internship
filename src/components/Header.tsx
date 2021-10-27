import { Avatar } from "@mui/material";
import { Dropdown, SplitButton } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
    <Link to="/">Logout</Link >;
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
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/dashboard">Home</Link></h2>
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
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </SplitButton>
      </div>
    </div>
  );
};
