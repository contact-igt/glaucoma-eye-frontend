import React from "react";
import styles from "./styles.module.css";
import Title from "@/common/Title";
const DelayRisk = ({ data, handleTogglecontactForm }) => {
  console.log(data?.title)
  return (
    <div className="mt-5 my-3">
      <Title title={data?.title} />
      <div
        className={`card ${styles.card} p-4 mt-4 d-flex align-items-start justify-content-center`}
        style={{ borderRadius: "21px" }}
        onClick={handleTogglecontactForm}
      >
        <ul className="fs-6 mt-3 list-disc">
          {data?.riskList?.map((item) => (
            <li className="mb-3">
              <span style={{ fontWeight: "600" }}>{item.title} </span>-{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DelayRisk;
