
const AboutCard = ({ title, image, description }) => {
    return (
        <>
            <div className="bg-white w-[26rem] lg:w-1/5 h-[41rem] flex flex-col justify-between text-center border-b-4 rounded-xl border-blue-600 hover:-mt-4">
                <div>
                    <img src={`../src/assets/images/${image}`} alt="" />
                    <h3 className="text-2xl my-3 font-bold">{title}</h3>
                    <div className="mb-3  px-2">
                        {description}
                    </div>
                </div>
                <div className="mb-5">
                    <a href="" className="text-blue-200 bg-blue-600 text-xl font-bold p-2 border border-blue-800 rounded-3xl hover:p-3 hover:border-b-2">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default AboutCard;