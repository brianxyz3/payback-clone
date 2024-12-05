import Hero from "../components/Hero"
import ConsultationForm from "../components/ConsultationForm"
import Footer from "../components/Footer"
import Features from "../components/Features"
import Banner from "../components/Banner"
import About from "../components/About"
import ContactUs from "../components/ContactUs"


const HomePage = ({ registerUser }) => {
    return (
        <>
            <Hero />
            <main className="-mt-12">
                <ContactUs>
                    <div className="bg-white lg:w-1/2 w-3/4 mx-auto p-8 mb-4 shadow-lg shadow-black">
                        <div className="text-center mb-6">
                            <h3 className="text-3xl text-[#112152] font-bold">Start here</h3>
                            <p className="text-2xl text-gray-600">Secure a free consultation</p>
                        </div>
                        <ConsultationForm registerUser={registerUser} />
                    </div>
                </ContactUs>
                <Banner />
                <Features />
                <About />
            </main>
            <Footer />
        </>
    )
}

export default HomePage