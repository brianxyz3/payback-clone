import React from "react";
import { useAuth } from "../authContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Logout } from "@mui/icons-material";
import { signOut } from "../controller/authController";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



const LoggedInNavIcon = ({order}) => {
  const navigate = useNavigate();
    const { currentUser } = useAuth();

  return (
    <>
        <div className={`flex ${order} items-center hover:cursor-pointer hover:text-blue-500`}>
            <AccountCircleOutlinedIcon sx={{ fontSize: 30 }}  />
            {currentUser && <p className="text-sm">{currentUser.email}</p>}
        </div>
        <button onClick={ async () => {
          signOut();
          toast.success("Goodbye!");
          setTimeout(() => (navigate(0)), 3000)
        }
        }>
            <Logout sx={{ fontSize: 30 }} className="hover:text-red-500" />
        </button>
    </>
  )
}

export default LoggedInNavIcon;