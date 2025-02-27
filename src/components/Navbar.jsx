import { useState } from "react";
import { Link } from "react-router";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Login } from "@mui/icons-material";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            title: "HOME",
            link: "/",
        },
        {
            title: "ABOUT US",
            link: "/about",
        },
        {
            title: "FAQ",
            link: "/faq",
        },
    ]

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="w-dvw fixed top-0 z-50 bg-[#112152] px-3 text-blue-600 md:text-[#f4f4f4] py-4">
            <div className="flex justify-between md:items-center">
                    <Link to="/"><div className="text-xl font-bold font-sans text-blue-800 md:text-2xl"><span className="text-blue-300">r</span>ockettarefund.org</div></Link>
                    <div className={`${isOpen ? "h-52" : "h-0 opacity-0 scale-0"} md:opacity-100 md:scale-100 md:h-fit md:flex md:justify-evenly md:w-11/12 duration-150`}>
                        <div className={"w-full flex"}>
                            <div className="w-1/2 flex justify-center border-1 md:border-none pt-3 text-center gap-4 absolute md:static top-20 left-0 right-0 mx-auto flex-col md:flex-row md:w-full">
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        onClick={() => (setIsOpen(false))}
                                        to={item.link}
                                        className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-translate-y-1 hover:text-blue-30">{item.title}</Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {
                            true ?
                                <Link to="/login">
                                    <Login sx={{ fontSize: 32 }} className="hover:text-blue-500" />
                                </Link>
                                : <Link to="/login">
                                    <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} className="hover:text-blue-500" />
                                </Link>
                        }

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
            <div className="my-16"></div>
        </>
    )
}

export default Navbar;



