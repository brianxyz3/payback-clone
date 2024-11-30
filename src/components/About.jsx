import Carousel from "./Carousel"

const About = () => {
    return (
        <section className="text-blue-700">
            <h3 className="text-2xl text-gray-500 font-bold text-center">Some of the frauds we investigated</h3>
            <Carousel />
            <div className="mt-12 flex flex-wrap gap-4 px-3 justify-evenly">
                <div className="w-[24rem] lg:w-1/5 h-[40rem] flex flex-col justify-between text-center border-b-4 rounded-xl border-blue-600">
                    <div>
                        <img src="../src/assets/images/professionalism-img.jpg" alt="" />
                        <h3 className="text-2xl my-3 font-bold">Professionalism</h3>
                        <div className="mb-3">
                            Everything we do, we make sure we don't compromise being highly professional. In our work environment, we keep holding our staff to a pro standard. Professionalism is one of the most important core values Money Back sets to itself as a company. We put a strong emphasis on the people we hire and the way they work to get our clients as satisfied as possible.
                        </div>
                    </div>
                    <div className="mb-4">
                        <a href="" className="text-blue-200 bg-blue-600 text-xl font-bold p-2 border border-blue-800 rounded-3xl hover:p-3 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="w-[24rem] lg:w-1/5 h-[40rem] flex flex-col justify-between text-center border-b-4 rounded-xl border-blue-600">
                    <div>
                        <img src="../src/assets/images/integrity-img.jpg" alt="" />
                        <h3 className="text-2xl my-3 font-bold">Integrity</h3>
                        <div className="mb-3">
                            The more we work with integrity, the more we attract clients with the same values. These are the ones we want. They are appreciative, communicate effectively and with honest, do what they say they will do, and come back for more. We have no toleration for people who are not serious and time-wasters.
                        </div>
                    </div>
                    <div className="mb-4">
                        <a href="" className="text-blue-200 bg-blue-600 text-xl font-bold p-2 border border-blue-800 rounded-3xl hover:p-3 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="w-[24rem] lg:w-1/5 h-[40rem] flex flex-col justify-between text-center border-b-4 rounded-xl border-blue-600">
                    <div>
                        <img src="../src/assets/images/transparency-img.jpg" alt="" />
                        <h3 className="text-2xl my-3 font-bold">Transparency</h3>
                        <div className="mb-3">
                            Refund Force is highly transparent to the customer. From well-detailed price breakdown to hiring practices and internal process, our customer will get the knowledge he needs in order to legitimately doing business with us. We expect from ourselves what we expect from others, and by being transparent we express ourselves fully and in an honest way, which is a value we believe our workers and co-workers should live by too.
                        </div>
                    </div>
                    <div className="mb-4">
                        <a href="" className="text-blue-200 bg-blue-600 text-xl font-bold p-2 border border-blue-800 rounded-3xl hover:p-3 hover:border-b-2">Learn More</a>
                    </div>
                </div>

                <div className="w-[24rem] lg:w-1/5 h-[40rem] flex flex-col justify-between text-center border-b-4 rounded-xl border-blue-600">
                    <div>
                        <img src="../src/assets/images/diversity-img.jpg" alt="" />
                        <h3 className="text-2xl my-3 font-bold">Diversity</h3>
                        <div className="mb-3">
                            Refund Force as a company encourages huge diversity in the workplace. Different thinkers, different approaches, unconventional methods to addressing conventional issues and so on. This diversity contributes to a creative environment which is definitely helping us producing our world-record results. Without diversity, there would be no advancements or new ways to solve problems.
                        </div>
                    </div>
                    <div className="mb-4">
                        <a href="" className="text-blue-200 bg-blue-600 text-xl font-bold p-2 border border-blue-800 rounded-3xl hover:p-3 hover:border-b-2">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About