import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import QuickAction from "@/common/QuickAction";
import AfterSurgery from "@/component/Home/AfterSurgery";
import DelayRisk from "@/component/Home/DelayRisk";
import FAQ from "@/component/Home/Faq";
import HomeBanner from "@/component/Home/HomeBanner";
import PatientSay from "@/component/Home/PatientSay";
import RightSticky from "@/component/Home/RightSticky";
import StatsSection from "@/component/Home/StatsSection";
import TopDoctor from "@/component/Home/TopDoctor";
import TreatmentCost from "@/component/Home/TreatmentCost";
import WhyChoose from "@/component/Home/Whychoose";
import { HomeData } from "@/constant/Home";
import { useState } from "react";
import styles from "./styles.module.css";

const HomePageComponent = () => {
  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState({ title: "", subtitle: "" });
  const handleTogglecontactForm = (title, subtitle) => {
    setFormTitle({ title: title, subtitle: subtitle });
    setOpen(!open);
  };

  return (
    <>
      <div className="p-0 position-relative">
        <Header />
        <HomeBanner data={HomeData?.banner} statsData={HomeData?.stats} />
        <div className={`${styles.container} container`}>
          <div className="row">
            <div className="col-12 mx-auto col-lg-8 order-2 order-lg-1">
              <StatsSection
                data={HomeData?.stats}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <DelayRisk
                data={HomeData?.risks}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <TopDoctor
                data={HomeData?.topDoctor}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <TreatmentCost
                treatmentlist={HomeData?.treatmentData}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <WhyChoose
                chooselist={HomeData?.whychoose}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <PatientSay handleTogglecontactForm={handleTogglecontactForm} />
              <AfterSurgery
                surgerydata={HomeData?.after_surgery}
                handleTogglecontactForm={handleTogglecontactForm}
              />
              <FAQ faqlist={HomeData?.Faq} handleTogglecontactForm={handleTogglecontactForm} />
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <div className={styles.rightSticky}>
                <RightSticky />
              </div>
            </div>
          </div>
        </div>
        <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
      </div>

      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form
          handleTogglecontactForm={handleTogglecontactForm}
          title={formTitle}
        />
      </Popup>
    </>
  );
};

export default HomePageComponent;