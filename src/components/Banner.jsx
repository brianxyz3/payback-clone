import "../stylesheets/banner.css";
import { Check } from "@mui/icons-material";

const Banner = () => {
    const scamCategories = [
        "Online Scams",
        "Crypto Scams",
        "Marketplace Scams",
        "Trading Scams",
        "Work Scams",
        "Dating Scams",
        "Investment Scams"
    ]


    return (
        <section className="bg-blue-700 mt-20">
            <div className="bg-white slider -rotate-1" data-animated="true">
                <ul className="slider_inner text-blue-700 font-bold text-3xl">
                    {
                        scamCategories.map(scam => (
                            <li><Check fontSize="large" /> {scam}</li>
                        ))
                    }
                    {
                        scamCategories.map(scam => (
                            <li aria-hidden="true"><Check fontSize="large" /> {scam}</li>
                        ))
                    }

                </ul>
            </div>
        </section>
    )
}

export default Banner