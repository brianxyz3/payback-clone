import { useState } from "react";
import { Link } from "react-router";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav id="top" className="w-full fixed top-0 z-50 bg-[#112152] px-3 text-blue-600 md:text-[#f4f4f4] py-4">
            <div className="flex justify-between md:items-center">
                <div className="text-2xl font-bold font-sans text-blue-800"><Link to="/"><span className="text-blue-300">r</span>ockettarefund.org</Link></div>
                <div className={`${isOpen ? "block h-60" : "hidden"} md:h-fit md:flex md:justify-evenly md:w-11/12`}>
                    <div className={"w-full flex"}>
                        <div className="flex justify-center border-1 md:border-none pt-3 text-center gap-4 absolute md:static top-20 left-0 right-0 mx-auto flex-col md:flex-row w-full md:w-full">
                            <Link to="/" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">HOME</Link>
                            <Link to="/about" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">ABOUT US</Link>
                            <Link to="/faq" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">FAQ</Link>
                            <a href="#contact" className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-mt-1">CONTACT US</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="size-5 border-t-2 border-r-2 rounded-tr-md rounded-sm border-blue-600 hover:text-blue-500 hover:border-blue-500">
                        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 28 }} className="relative right-2.5" />
                    </div>
                    <Link to="/login">
                        <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} className="hover:text-blue-500" />
                    </Link>

                    {/* old mobile navbar collapse button */}
                    {/* <button className="flex p-1 md:hidden text-white bg-blue-500 rounded-md" onClick={toggleNavbar}>
                        {isOpen ?
                            <ClearRoundedIcon fontSize="medium" />
                            : <MenuRoundedIcon fontSize="medium" />
                        }
                    </button> */}

                        <button className={`transition duration-500 flex p-1 size-8 justify-center items-center md:hidden text-white bg-blue-600 rounded-md hover:hover:bg-blue-500 hover:border ${isOpen ? "rotate-180" : "-rotate-180"}`} onClick={toggleNavbar}>
                        <div className={`w-full flex flex-col ${isOpen ? "mr-1" : "gap-1"}`}>
                            <div className={`w-6 h-1 bg-white rounded-lg transition ${isOpen && "w-7 -rotate-45 origin-center"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg transition ${isOpen && "w-7 rotate-45 origin-center -mt-1"}`}></div>
                            <div className={`w-6 h-1 bg-white rounded-lg ${isOpen && "hidden"}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
            <div className="my-20"></div>
        </>
    )
}

export default Navbar;



