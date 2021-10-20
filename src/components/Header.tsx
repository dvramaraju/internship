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
        <h2 className="title">Home</h2>
      </div>
      <div className="headerCenter">
        <h2>Home</h2>
        <h2>Work</h2>
        <h2>Employes</h2>
        <h2>Profile</h2>
        <h2>Center</h2>
        <h2>Search</h2>
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
