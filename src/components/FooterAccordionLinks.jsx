import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router";

const FooterAccordionLinks = ({ title, items, link = [null] }) => {
    const [isOpen, setIsOpen] = useState(false);
    let idx = -1;

    return (
        <div className="border-b border-white py-3 text-sm lg:text-lg">
            <div className="flex flex-nowrap justify-between hover:cursor-pointer px-3" onClick={() => { setIsOpen(!isOpen) }}>
                <h5 className="text-lg font-bold lg:text-2xl">{title}</h5>
                {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
            </div>
            <div className={`${!isOpen && "opacity-0 scale-y-0 h-0"} flex flex-col scale-100 duration-75 items-start px-3 mt-3 gap-1 text-gray-400`}>
                {items.map(item => {
                    idx += 1;
                    return <Link key={item} to={link[idx]}>{item}</Link>
                }
                )}
            </div>
        </div>
    )
}

export default FooterAccordionLinks;