import Title from "@/common/Title";
import styles from "./styles.module.css";

const WhyChoose = ({ chooselist , handleTogglecontactForm }) => {
  return (
    <section className={styles.whychoosesec}>
      <div>
        <Title title={"Why Choose Pixel Eye Hospital"} />

        <div className={`${styles.choosepoint} commonshadow mt-4 `} onClick={handleTogglecontactForm}>
          {chooselist?.map((data, i) => (
            <div
              className={`d-flex align-items-center gap-2 my-2 ${styles.choosecard}`}
            >
              <h5 className={styles.pointgreen}></h5>
              <div className={styles.choosec}>
                <h5>{data?.title}</h5>
                {/* <p>{data?.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
