import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="md:bg-[#112152] px-3 text-blue-600 md:text-[#f4f4f4] py-4">
            <div className="flex justify-between md:items-center">
                <div className="text-2xl font-bold font-sans text-blue-800"><span className="text-blue-300">r</span>ockettarefund.org</div>
                <div className={`${isOpen ? "block h-60" : "hidden"} md:h-fit md:flex md:justify-evenly md:w-11/12`}>
                    <div className={"w-full flex"}>
                        <ul className="flex justify-center border-1 md:border-none pt-3 text-center gap-4 absolute md:static top-20 left-0 right-0 mx-auto flex-col md:flex-row w-full md:w-full">
                            <li className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">HOME</li>
                            <li className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">ABOUT US</li>
                            <li className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">FAQ</li>
                            <li className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">CONTACT US</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-5 border-t-2 border-r-2 rounded-tr-md rounded-sm border-blue-600">
                        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 28 }} className="relative right-2.5" />
                    </div>
                    <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} />
                    <button className="block md:hidden text-white bg-blue-500" onClick={toggleNavbar}><MenuRoundedIcon fontSize="large" /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;



