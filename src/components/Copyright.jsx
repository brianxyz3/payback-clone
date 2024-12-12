import { KeyboardArrowUp } from "@mui/icons-material";

const Copyright = () => {
    return (
        <div className="bg-[#112152] px-5">
            <a
                href="#top"
                className="animate-bounce fixed flex justify-center items-center size-10 md:size-12 bottom-8 right-2 md:right-4 rounded-full border border-black scroll-watcher">
                <KeyboardArrowUp className="text-blue-500" fontSize="large" />
            </a>
            <div className="border-t py-1 text-center text-white">
                &copy; 2024 Rockettarefund.org
            </div>
        </div>
    )
}

export default Copyright;