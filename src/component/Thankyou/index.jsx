import Button from "@/common/Button";
import styles from "./styles.module.css";
import Image from "next/image";

const Thankyou = () => {

    return (
        <section className={`${styles.container} d-flex justify-content-center align-items-center flex-column`}>
            <Image src="/assets/check.png" alt="" width={120} height={120} className={styles.image}/>
            <h1 className={`${styles.title} mt-3 fw-bold`}>Thank You for Booking Your Consultation!</h1>
            <p>We’ve received your mobile number and our specialist will contact you soon.</p>

            <div className={`${styles.videoContainer} mt-4`}>
                <iframe
                    src="https://www.youtube.com/embed/j5SPXVOftC0?si=dB0xVMPe7tayYFuJ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={styles.card}>
                <h4 className="fs-6">Next Step</h4>
                <ul>
                    <li>
                        Our team will call or message you within 24 hours.
                    </li>
                    <li>Prepare your questions about Glaucoma Treatment.</li>
                </ul>
            </div>
            <div className="mt-4">
                <Button href="https://www.pixeleyehospitals.com/"
               isbtn3={true} name="Back to Home" bgcolor="#cf873d" txtcolor="#fff" isicon={true} icon={"arrow-right"} iconcolor={"#fff"} />
            </div>
        </section>
    );
};

export default Thankyou;