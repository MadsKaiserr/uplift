import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import trustpilot from "@/app/assets/images/Trustpilot.png"

export const generateMetadata = () => {
  return {
    title: "Case",
    description: "",
  };
};

export default function CaseStudy() {

  return (
    <>
      <div className="main__hero__container main__contact__hero">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper">
          <div className="main__hero__content">
            <Image src={trustpilot} className="main__hero__form__trustpilot" alt="Trustpilot 5 stjerner" />
            <h1 className="main__hero__heading main__hero__heading__sans">Corazon</h1>
            <p className="main__hero__description">Se et udvalg af vores cases. Har du nogen spørgsmål, så er du altid velkommen til at skrive eller give os et kald.</p>
          </div>
        </div>
        <Image src={dots} className="main__landingpage__dots" width={400} alt="" />
      </div>
    </>
  );
}
