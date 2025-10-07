import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../Button";

const SubBanner = ({
  title,
  spantitle,
  content,
  img,
  href,
  height,
  imgwidth,
  imgheight,
  bgcolor,
  spancolor,
  bordercolor,
  btn_name,
  btn_bgcolor,
  btn_txtcolor,
  icon_name,
  icon_color,
  isicons,
  isimg,
  btn_img,
  scale,
  handleTogglecontactForm,
}) => {
  return (
    <section className="my-4 overflow-hidden">
      <div
        className={`${styles.subbanner} commonshadow`}
        onClick={href ? undefined : ()=>handleTogglecontactForm(title,spantitle)}
        style={{
          backgroundColor: bgcolor,
          border: ` 1px solid ${bordercolor}`,
        }}
      >
        <div className="row gap-5 gap-md-0">
          <div className="col-lg-7">
            <div className={styles.subcontent}>
              <h4>
                {title}
                <span style={{ color: spancolor }}>{` ${spantitle}`}</span>
              </h4>
              <p>{content}</p>

              <Button
                name={btn_name} 
                bgcolor={btn_bgcolor}
                txtcolor={btn_txtcolor}
                icon={icon_name}
                iconcolor={icon_color}
                isicon={isicons}
                isimg={isimg}
                href={href && href}
                imgicon={btn_img}
              />
            </div>
          </div>
          <div className={`${styles.imageContainer} col-lg-5 d-flex align-items-start justify-content-start`} style={{ position: 'relative', height: height ? height : "180px" }}>
            <div style={{}}>
              <Image
                src={img ? img : '/placeholder.jpg'}
                alt="sub-banner-img"
                fill={true}
                style={{
                  objectFit: 'cover',
                  maxWidth: "100%",
                  transform: `scale(${scale})`,
                  objectPosition: 'center center'
                }}
                className={styles.subBannerImg}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
