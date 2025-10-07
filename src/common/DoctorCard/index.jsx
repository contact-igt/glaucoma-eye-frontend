import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";

const DoctorCard = ({ name, destination, experience, reviews, img, data, handleTogglecontactForm }) => {
    return (
        <div className={`card ${styles.card} border-0 d-flex flex-row align-items-center justify-content-between`}>
            <div className={`d-flex ${styles.cardContent} gap-lg-0 align-items-center`}>
                <img
                    src={img}
                    alt="Doctor"
                    className={`${styles.doctorImage} rounded-circle`}
                />
                <div className={` ms-3`}>
                    <h5 className="mb-1 fw-bold">{name}</h5>
                    <p className={`mb-2 text-muted ${styles.destination}`}>{destination}</p>

                    <div className="d-flex align-items-start">
                        <div className="me-3 d-flex flex-column align-items-start border-end pe-3">

                            <div className="d-flex  align-items-center justify-content-start" style={{ gap: "8px" }}>
                                <img className={styles.icon} src="/assets/medical.png" alt="" />
                                <span className="fw-bold" style={{ color: "#CD7E2A" }}>{experience}</span>
                            </div>
                            <small className="d-block text-start text-muted ms-1">Experience</small>
                        </div>
                        <div className="d-flex flex-column align-items-start ms-3">
                            <div className="d-flex justify-content-start align-items-center" style={{ gap: "8px" }}>
                                <img className={styles.icon} src="/assets/like.png" alt="" />
                                <span className="fw-bold" style={{ color: "#7EE05F" }}>{reviews}</span>
                            </div>
                            <small className="d-block text-muted ms-1">Positive Reviews</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex justify-content-start ${styles.consultbtn}`}>
                <Button name={"Book Consultation"} isicon={true} txtcolor={"#ff6b5c"} icon="calendar" iconcolor="#ff6b5c" isbtn2={true} handleTogglecontactForm={() => handleTogglecontactForm("Top Doctor")} />
            </div>
        </div>
    );
};

export default DoctorCard;
