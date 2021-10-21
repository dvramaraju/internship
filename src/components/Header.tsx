import { Avatar } from "@mui/material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const handleLogout = () => {
    <Link to="/signin">Logout</Link>
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
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link></h2>
      </div>
      <div className="headerCenter">
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/work">Work</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/employee">Employes</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/profile">Profile</Link></h2>
        <h2><Link style={{ color: "white", textDecoration: "none" }} to="/search">Search</Link></h2>
      </div>
      <div className="headerRight">
        <DropdownButton
          style={{ display: "flex" }}
          size="sm"
          title={<Avatar />}
        >
          <Dropdown.Item onClick={handleLogout}>
            Log Out
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
