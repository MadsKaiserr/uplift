import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'

import dots from "@/app/assets/images/Dots.svg"
import KontaktFormular from "./components/kontaktFormular";

export const generateMetadata = () => {
  return {
    title: "Kontakt UPLIFT | Har du spørgsmål? Kontakt os i dag!",
    description: "",
  };
};

export default function Kontakt() {
  
  return (
    <>
      <div className="main__hero__container main__contact__hero">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper main__heroform">
          <div className="main__hero__content">
            <h1 className="main__hero__heading main__hero__heading__sans">Klar til en <span className="highlight">snak</span>?</h1>
            <p className="main__hero__description">Skal vi tage en snak? Kontakt os i dag på mail eller telefon. Vi glæder os til at høre fra dig!</p>
            <div className="main__hero__checklist__container">
                <div className="main__hero__checklist__element">
                    <p className="main__hero__description main__hero__checklist__element__p">Mail: <span className="bold">support@upliftcro.dk</span></p>
                </div>
                <div className="main__hero__checklist__element">
                    <p className="main__hero__description main__hero__checklist__element__p">Tlf.: <span className="bold">+45 23 96 58 58</span></p>
                </div>
            </div>
            <div className="main__hero__form">
                <h2 className="main__hero__form__heading">Åbningstider</h2>
                <p className="main__hero__form__p">Vi svarer typisk må mail indenfor 24 timer</p>
                <div className="main__hero__checklist__container">
                    <div className="main__hero__checklist__element">
                        <p className="main__hero__description main__hero__checklist__element__p"><span className="bold">-</span> Mandag til fredag <span className="highlight bold">9:00 - 16:00</span></p>
                    </div>
                    <div className="main__hero__checklist__element">
                        <p className="main__hero__description main__hero__checklist__element__p"><span className="bold">-</span> Lørdag & søndag <span className="highlight bold">Lukket</span></p>
                    </div>
                </div>
            </div>
          </div>
          <KontaktFormular />
        </div>
        <Image src={dots} className="main__landingpage__dots" width={400} alt="" />
      </div>
    </>
  );
}