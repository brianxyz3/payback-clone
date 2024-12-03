import { Link } from "react-router";
import WarningIcon from '@mui/icons-material/Warning';

const NotFoundPage = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center h-96">
            <WarningIcon fontSize="large" className="text-yellow-400 text-6xl mb-4" />
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-5">This page does not exist</p>
            <Link
                to="/"
                className="text-white bg-[#112152] hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
            >Go Back
            </Link>
        </section>
    )
}

export default NotFoundPage;