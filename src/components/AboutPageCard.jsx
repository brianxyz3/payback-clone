
const AboutPageCard = ({ number, title, description }) => {
    return (
        <>
            <div className="text-center w-[26rem] mx-auto flex flex-col gap-3 mb-4">
                <h5 className="bg-blue-400 size-20 flex justify-center items-center rounded-full text-2xl text-white mx-auto">{number}</h5>
                <h5 className="text-xl text-gray-800">{title}</h5>
                <p className="text-sm">{description}</p>
            </div>
        </>
    )
}

export default AboutPageCard;