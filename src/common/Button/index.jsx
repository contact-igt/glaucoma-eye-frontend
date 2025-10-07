import Image from "next/image";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Button = ({
  name,
  bgcolor,
  txtcolor,
  icon,
  iconcolor,
  isicon,
  isimg,
  imgicon,
  isbtn2,
  isbtn3,
  href,
  handleTogglecontactForm,
  disabled
}) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn text-decoration-none`}
    >
      <button
        onClick={href ? undefined : handleTogglecontactForm}
        className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button} ${!name ? "rounded-circle " : ""} w-100 h-100`}
        style={{ backgroundColor: bgcolor, color: txtcolor,padding:!name ? "15px 20px" : "15px 25px" }}
        disabled={disabled}
      >
        {isbtn3 ? <>{name && <h6 className="m-0">{name}</h6>} {isicon && <DynamicIcon name={icon} color={iconcolor} />}
          {isimg && imgicon && (
            <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
          )}
          </> : <> {isicon && <DynamicIcon name={icon} color={iconcolor} />}
          {isimg && imgicon && (
            <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
          )}
          {name && <h6 className="m-0">{name}</h6>}</>}
      </button>
    </a>
  ) : isbtn3 ? (
    <button
      className={`btn text-center d-flex align-items-center justify-cont ent-center gap-2 ${styles.button}`}
      onClick={handleTogglecontactForm}
      style={{ backgroundColor: bgcolor, color: txtcolor,padding:!name ? "15px 20px" : "15px 25px"  }}
      disabled={disabled}
    >
      {name && <h6 className="m-0">{name}</h6>}
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}
    </button>
  ) : isbtn2 ? (
    <button
      className={`btn ${styles.button2} gap-2 d-flex flex-row align-items-center justify-content-center p-2 p-lg-3   fw-bold`}
      onClick={handleTogglecontactForm}
      style={{
        borderRadius: "50px",
        border: "2px solid #ff6b5c",
        color: "#ff6b5c",
        background: "transparent",
        padding:!name ? "15px 20px" : "15px 25px" 
      }}
      disabled={disabled}
    >
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}{name && <h6 style={{ marginBottom: "0" }}>{name}</h6>}
    </button>
  ) : (
    <button
      className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button}`}
      onClick={handleTogglecontactForm}
      style={{ backgroundColor: bgcolor, color: txtcolor,padding:!name ? "15px 20px" : "15px 25px"  }}
      disabled={disabled}
    >
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}
      {name && <h6 className="m-0">{name}</h6>}
    </button>
  );
};

export default Button;