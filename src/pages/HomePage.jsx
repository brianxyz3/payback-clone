import Hero from "../components/Hero"
import ConsultationForm from "../components/ConsultationForm"
import Footer from "../components/Footer"
import Features from "../components/Features"
import Banner from "../components/Banner"
import About from "../components/About"


const HomePage = ({ registerUser }) => {
    return (
        <>
            <Hero />
            <main className="-mt-12">
                <ConsultationForm registerUser={registerUser} />
                <Banner />
                <Features />
                <About />
            </main>
            <Footer />
        </>
    )
}

export default HomePage