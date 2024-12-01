import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FooterAccordionLinks = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="border-b border-white py-3 text-lg">
            <div className="flex justify-between hover:cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
                <h5 className="text-2xl font-bold">{title}</h5>
                {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
            </div>
            <div className={`${isOpen ? "flex" : "hidden"} flex-col items-start  mt-3 gap-1 text-gray-400`}>
                {items.map(item => (<a href="">{item}</a>))}
            </div>
        </div>
    )
}

export default FooterAccordionLinks;