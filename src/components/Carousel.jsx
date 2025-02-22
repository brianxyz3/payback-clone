import "../stylesheets/carousel.css";
const Carousel = () => {
    return (
        <div className="carousel md:w-2/3 w-3/4 mx-auto my-3 py-1 bg-white rounded-md">
            <div className="carousel_inner">
                <div className="carousel_item active">
                    <div className="flex">
                        <img src="../src/assets/images/logo-1.webp" alt="..." />
                        <img src="../src/assets/images/logo-2.webp" alt="..." />
                        <img src="../src/assets/images/logo-3.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item">
                    <div className="flex">
                        <img src="../src/assets/images/logo-4.webp" alt="..." />
                        <img src="../src/assets/images/logo-5.webp" alt="..." />
                        <img src="../src/assets/images/logo-6.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item">
                    <div className="flex">
                        <img src="../src/assets/images/logo-7.webp" alt="..." />
                        <img src="../src/assets/images/logo-8.webp" alt="..." />
                        <img src="../src/assets/images/logo-9.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item">
                    <div className="flex justify-evenly">
                        <img src="../src/assets/images/logo-10.webp" alt="..." />
                        <img src="../src/assets/images/logo-11.webp" alt="..." />
                    </div>
                </div>
            </div>
            <button className="carousel_control_prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel_control_prev_icon" aria-hidden="true"></span>
                <span className="visually_hidden">Previous</span>
            </button>
            <button className="carousel_control_next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel_control_next_icon" aria-hidden="true"></span>
                <span className="visually_hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;