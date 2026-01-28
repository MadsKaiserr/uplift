import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import Mads from "@/app/assets/images/MadsKaiser_cropped.webp"
import trustpilot from "@/app/assets/images/Trustpilot.png"

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
          <div className="main__hero__form">
            {/* <Image src={trustpilot} className="main__hero__form__trustpilot" alt="Trustpilot 5 stjerner" /> */}
            <h2 className="main__hero__form__heading">Send os en <span className="highlight">besked</span></h2>
            <p className="main__hero__form__p">Udfyld formularen nedenfor, så kontakter vi dig indenfor 24 timer.</p>
            <div className="main__hero__form__wrapper">
              <div className="main__hero__form__input__container">
                <label className="main__hero__form__input__label">Navn</label>
                <input type="text" required className="main__hero__form__input" placeholder="Fulde navn" />
              </div>
              <div className="main__hero__form__input__container">
                <label className="main__hero__form__input__label">E-mail</label>
                <input type="text" required className="main__hero__form__input" placeholder="Mailadresse" />
              </div>
              <div className="main__hero__form__input__container">
                <label className="main__hero__form__input__label">Besked</label>
                <textarea required className="main__hero__form__textarea" />
              </div>
              <button className="main__primary__btn">
                Næste
                <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </button>
              <div className="main__hero__form__ansvarlig__container">
                <Image src={Mads} className="main__hero__form__ansvarlig__image" alt="Mads Kaiser" />
                <div className="main__hero__form__ansvarlig__wrapper">
                  <p className="main__hero__form__ansvarlig__heading">Mads Kaiser, Founder & CRO Specialist</p>
                  <p className="main__hero__form__ansvarlig__p">mbk@upliftcro.dk <span className="divider">eller</span> +45 23 96 58 58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={dots} className="main__landingpage__dots" width={400} alt="" />
      </div>
    </>
  );
}
