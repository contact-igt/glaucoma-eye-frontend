import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import styles from "./styles.module.css";

const QuickAction = ({ handleTogglecontactForm }) => {
  return (
    <div
      className={`
        ${styles.quickBar}
        d-flex d-lg-none justify-content-around align-items-center
      `}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/917075008561"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.actionBtn}`}
      >
        <Image src="/assets/whatsappfilled.png" alt="WhatsApp" width={25} height={25} />
        <p>WA</p>
      </a>

      {/* Address */}
      <a
        href="https://share.google/7oRvWKdsnAvwPiL9b" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionBtn}
      >
        <DynamicIcon name="map-pin" color="#2A3B77" size={25} />
        <p>Address</p>
      </a>

      {/* Call */}
      <a
        href="tel:+917075008561"
        className={`${styles.actionBtn}`}
      >
        <DynamicIcon name="phone" color="#21a179" size={25} />
         <p>Call</p>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/pixeleyehospital/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionBtn}
      >
        <DynamicIcon name="instagram" color="black" size={25} />
        <p>Insta</p>
      </a>

      {/* Book / Calendar */}
      <div
        onClick={handleTogglecontactForm}
        className={styles.actionBtn}
      >
        <DynamicIcon name="calendar" color="#CD7E2A" size={27} />
        <p>Book</p>
      </div>
    </div>
  );
};

export default QuickAction;
