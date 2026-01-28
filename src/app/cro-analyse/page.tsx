import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import Mads from "@/app/assets/images/MadsKaiser_cropped.webp"
import trustpilot from "@/app/assets/images/Trustpilot.png"

export const generateMetadata = () => {
  return {
    title: "Gratis CRO-analyse | Få indsigt i, hvor du taber potentielle kunder",
    description: "",
  };
};

export default function croanalyse() {
  return (
    <>
      <div className="main__hero__container">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper main__heroform">
          <div className="main__hero__content">
            <h1 className="main__hero__heading main__hero__heading__sans">Få op til <span className="highlight">3x flere konverteringer</span> på din hjemmeside</h1>
            <p className="main__hero__description">Oplever I problemer med en lav konverteringsrate? Få lavet en <span className="bold">skræddersyet CRO-analyse af jeres hjemmeside gratis</span>.</p>
            <div className="main__hero__checklist__container">
                <div className="main__hero__checklist__element">
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__hero__checklist__element__icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                    </svg>
                    <p className="main__hero__description main__hero__checklist__element__p"><span className="bold">Uforpligtende</span> → Hverken binding eller betaling</p>
                </div>
                <div className="main__hero__checklist__element">
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__hero__checklist__element__icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                    </svg>
                    <p className="main__hero__description main__hero__checklist__element__p"><span className="bold">Samlet overblik </span>over jeres situation & potentiale</p>
                </div>
                <div className="main__hero__checklist__element">
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__hero__checklist__element__icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                    </svg>
                    <p className="main__hero__description main__hero__checklist__element__p">Baseret på data-drevet <span className="bold">analyse & psykologi</span></p>
                </div>
                <div className="main__hero__checklist__element">
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__hero__checklist__element__icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                    </svg>
                    <p className="main__hero__description main__hero__checklist__element__p">Dækker jeres<span className="bold"> vigtigste flows </span>for konvertering</p>
                </div>
            </div>
          </div>
          <div className="main__hero__form">
            <h2 className="main__hero__form__heading">Hvilket domæne skal vi <span className="highlight">analysere</span>?</h2>
            <p className="main__hero__form__p">Udfyld formularen nedenfor, så kontakter vi dig indenfor 24 timer.</p>
            <div className="main__hero__form__wrapper">
              <div className="main__hero__form__input__container">
                <label className="main__hero__form__input__label">Domæne</label>
                <input type="text" required className="main__hero__form__input" placeholder="Ex. minvirksomhed.dk" />
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
