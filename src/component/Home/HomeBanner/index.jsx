import Image from "next/image";
import Slider from "react-slick";
import styles from "./styles.module.css"

const HomeBanner = ({ data, statsData }) => {
    const sliderSettings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        infinite: true,
        pauseOnHover: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 600,
    };
    return (
        <div className="container-md-fluid d-flex justify-content-center" style={{ backgroundColor: '#f0fcff' }}>
            <div className={`${styles.container} d-flex justify-content-center align-items-end w-100`}>
                <div className="w-100 row gap-lg-3 align-items-center flex-column flex-lg-row">
                    <div className="d-flex col-12 col-lg-5 justify-content-end pb-lg-4 flex-column mb-lg-4 px-4 px-md-0 mb-md-0">
                        <h1 className={`fw-bold fs-1 ${styles.title}`}>
                            {data?.title}
                        </h1>
                        <ul className="list-unstyled fs-5 mt-4">
                            {
                                data?.highlights?.map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mb-3 gap-3">
                                        <div className={styles.tickIcon}>✓</div> {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <hr style={{ borderColor: "#CADCFC", opacity: 0.1 }} />
                        <div className={`border-0 mx-auto p-1 pt-2`}>
                            <div className="d-flex flex-column gap-4 gap-md-3 pt-2 pt-lg-0 flex-md-row text-center w-100">
                                {statsData?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${index == item.length - 1 ? "mb-0" : "mb-4"} d-flex flex-column gap-0 my-lg-1  flex-fill ${styles.statItem}`}
                                    >
                                        <h2 className="fw-bold fs-2" style={{ color: item.color }}>
                                            {item?.value}
                                        </h2>
                                        <p className="fw-semibold">
                                            {item?.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-0 col-12 col-lg-5 d-flex justify-content-center">
                        <div className={styles.bannerWrapper}>
                            <Slider {...sliderSettings} className={styles.bannerSlider}>
                                {data?.images?.map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            src={image}
                                            fill
                                            alt="Banner"
                                            style={{
                                                objectFit: 'cover',
                                                display: 'block',
                                                top: '0',
                                                left: '0',
                                            }}
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            className={styles.bannerimage}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeBanner;