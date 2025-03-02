import React from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router";


const LoggedOutNavIcon = () => {
  return (
    <Link to="/login" className="flex gap-2 w-full justify-end items-center hover:text-green-500">
        <p>Login</p>
      <Login sx={{ fontSize: 30 }} />
    </Link>
  )
}

export default LoggedOutNavIcon;