import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <nav style={{ padding: "10px" }}>
        <Link to={"/"} style={{ padding: "10px", textDecoration: "none" }}>
          <Button variant="contained">Home</Button>
        </Link>
        <Link to={"/archive"} style={{ textDecoration: "none" }}>
          <Button variant="contained">Archive</Button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
