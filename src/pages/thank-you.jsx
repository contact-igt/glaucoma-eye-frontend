import { MetaTitle } from "@/common/MetaTitle";
import ThankyouPageComponent from "@/PageComponent/Thankyou";


export default function Thankyou() {
  return (
    <>
      <MetaTitle
        title="Thank You | Pixel Eye Hospital"
        description="Thank you for contacting Pixel Eye Hospital. We will reach out shortly to confirm your appointment."
        keywords="thank you, appointment submitted, pixel eye hospital, confirmation page"
      />
      <ThankyouPageComponent />
    </>
  )
}
