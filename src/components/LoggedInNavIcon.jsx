import React from "react";
import { useAuth } from "../authContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Logout } from "@mui/icons-material";
import { signOut } from "../controller/authController";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";



const LoggedInNavIcon = ({order}) => {
  const navigate = useNavigate();
    const { currentUser } = useAuth();

  console.log(currentUser);


  return (
    <>
      <div className={`flex ${order} items-center hover:cursor-pointer hover:text-blue-400`}>
        <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
        {currentUser && <p className="text-sm">{currentUser.email}</p>}
      </div>
      {
        currentUser.isAdmin && <Link to="/addAdmin" className="text-nowrap hover:text-blue-400">
          Add Admin
        </Link>
      }
      <button
        className="hover:text-red-600"
        onClick={async () => {
          signOut();
          toast.success("Goodbye!");
          setTimeout(() => (navigate(0)), 1000)
        }
        }>
        <Logout sx={{ fontSize: 30 }} />
        </button>
    </>
  )
}

export default LoggedInNavIcon;