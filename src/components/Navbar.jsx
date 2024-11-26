import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
      <nav className="bg-[#112152] text-[#f4f4f4] w-full p-4 fixed top-0 left-0">
          <div className="flex justify-between">
              <div className="text-xl font-bold">PAYBACK</div>

              <div className="flex gap-4">
                  <div className="size-5 border-t-2 border-r-2 rounded-tr-md rounded-sm">
                      <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 32 }} className="relative right-3.5" />
                  </div>
                  <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} className="border-r-2" />
                  <MenuIcon />
              </div>
        </div>
    </nav>
  )
}

export default Navbar;