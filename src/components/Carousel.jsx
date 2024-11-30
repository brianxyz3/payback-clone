const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide w-2/3 mx-auto my-3 py-1 bg-white rounded-md" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="flex">
                        <img src="../src/assets/images/logo-1.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-2.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-3.webp" className="d-block w-1/3" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex">
                        <img src="../src/assets/images/logo-4.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-5.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-6.webp" className="d-block w-1/3" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex">
                        <img src="../src/assets/images/logo-7.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-8.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-9.webp" className="d-block w-1/3" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex justify-evenly">
                        <img src="../src/assets/images/logo-10.webp" className="d-block w-1/3" alt="..." />
                        <img src="../src/assets/images/logo-11.webp" className="d-block w-1/3" alt="..." />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;