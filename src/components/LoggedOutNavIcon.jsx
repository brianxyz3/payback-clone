import React from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router";


const LoggedOutNavIcon = () => {
  return (
    <Link to="/login" className="flex gap-2 w-full justify-end items-center">
        <p>Login</p>
        <Login sx={{ fontSize: 30 }} className="hover:text-blue-500" />
    </Link>
  )
}

export default LoggedOutNavIcon;