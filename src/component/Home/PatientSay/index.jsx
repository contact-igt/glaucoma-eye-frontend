import Title from "@/common/Title";
import styles from "./styles.module.css";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/common/Button";

const PatientSay = ({handleTogglecontactForm}) => {
  return (
    <section className={styles.patientsaysec}>
      <div>
        <Title title={"What our Patients Say"} />

        <div className={`${styles.patientcard} commonshadow mt-4`}>
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={"/assets/google.png"}
              alt="google-logo"
              width={100}
              height={35}
              objectFit="cover"
            />
            <h5 className="m-0">Reviews</h5>
          </div>

          <div className="d-flex align-items-center gap-2 my-3">
            <h6 className="m-0">4.8</h6>
            <div>
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
            </div>
            <p className="m-0">{`(3,222 Reviews)`}</p>
          </div>

          <Button
            name={"Book Appoinment"}
            isicon={true}
            txtcolor={"#fff"}
            icon={"calendar"}
            iconcolor={"#fff"}
            bgcolor={"#21a179"}
            handleTogglecontactForm={()=>handleTogglecontactForm("Book Appoinment")}
          />
        </div>
      </div>
    </section>
  );
};

export default PatientSay;
