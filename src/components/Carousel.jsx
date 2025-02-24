import "../stylesheets/carousel.css";

const Carousel = () => {
    return (
        <div className="carousel md:w-2/3 w-full mx-auto my-3 py-1 rounded-md">
            <div className="carousel_inner flex">
                <div className="carousel_item" id="1">
                    <div className="flex">
                        <img src="../src/assets/images/logo-1.webp" alt="..." />
                        <img src="../src/assets/images/logo-2.webp" alt="..." />
                        <img src="../src/assets/images/logo-3.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="2">
                    <div className="flex">
                        <img src="../src/assets/images/logo-4.webp" alt="..." />
                        <img src="../src/assets/images/logo-5.webp" alt="..." />
                        <img src="../src/assets/images/logo-6.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="3">
                    <div className="flex">
                        <img src="../src/assets/images/logo-7.webp" alt="..." />
                        <img src="../src/assets/images/logo-8.webp" alt="..." />
                        <img src="../src/assets/images/logo-9.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="4">
                    <div className="flex justify-evenly">
                        <img src="../src/assets/images/logo-10.webp" alt="..." />
                        <img src="../src/assets/images/logo-11.webp" alt="..." />
                    </div>
                </div>
                <div className="carousel_nav">
                    <a href="#1"></a>
                    <a href="#2"></a>
                    <a href="#3"></a>
                    <a href="#4"></a>
                </div>
            </div>
        </div>
    )
}

export default Carousel;