import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import hero from "@/app/assets/images/Hero.png"

import case1 from "@/app/assets/images/Case1.jpg"
import case2 from "@/app/assets/images/Case2.jpg"
import case3 from "@/app/assets/images/Case3.jpg"

export const generateMetadata = () => {
  return {
    title: "UPLIFT | Specialiseret CRO-bureau",
    description: "",
  };
};

export default function Home() {
  return (
    <>
      <div className="main__hero__container">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper">
          <div className="main__hero__content">
            <h1 className="main__hero__heading">Boost din konverterings-<br />rate på kort tid</h1>
            <p className="main__hero__description">Vi hjælper din virksomhed med at omsætte <span className="bold">værdifuld trafik til betalende kunder</span>, ved at optimere din hjemmeside.</p>
            <div className="main__hero__cta__container">
              <div className="main__hero__cta__wrapper">
                <Link href="/cro-analyse/" className="main__primary__btn">
                    Gratis CRO Analyse
                </Link>
                <Link href="#" className="main__secondary__btn">
                    Sådan gør vi
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </Link>
              </div>
              <div className="main__hero__cta__fud__wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" className="main__hero__cta__fud__icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                </svg>
                <p className="main__hero__cta__fud__p">Ingen målbar CRO-stigning. Ingen betaling.</p>
              </div>
            </div>
          </div>
          <div className="main__hero__banner">
            <Image src={hero} className="main__hero__image" width={500} alt="" />
          </div>
        </div>
        <Image src={dots} className="main__hero__banner__dots" width={350} alt="" />
      </div>
      <div className="section__cases__container">
        <div className="section__cases__wrapper">
          <div className="section__cases__header">
            <h2 className="section__cases__heading">Det siger vores kunder</h2>
            <Link href="#" className="main__secondary__btn">
                Se alle vores cases
                <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </Link>
          </div>
          <div className="section__cases__list">
            <Link href="#" className="section__cases__element">
              <div className="section__cases__element__image__container">
                <Image src={case1} fill alt="" className="section__cases__element__image" />
              </div>
              <div className="section__cases__element__tags">
                <p className="section__cases__element__tags__element">CR: <span className="highlight">7,5%</span></p>
                <p className="section__cases__element__tags__element">ROI: <span className="highlight">12x</span></p>
              </div>
              <div className="section__cases__element__content">
                <h3 className="section__cases__element_heading">Corazon</h3>
                <p className="section__cases__element__description">Sådan forenklede Frama deres B2B-løsning og gav kunderne en inspirerende shoppingoplevelse</p>
                <div className="section__cases__element__cta__wrapper">
                  Se case
                  <svg xmlns="http://www.w3.org/2000/svg" className="section__cases__element__icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="#" className="section__cases__element">
              <div className="section__cases__element__image__container">
                <Image src={case2} fill alt="" className="section__cases__element__image" />
              </div>
              <div className="section__cases__element__tags">
                <p className="section__cases__element__tags__element">CR: <span className="highlight">4,8%</span></p>
                <p className="section__cases__element__tags__element">ROI: <span className="highlight">7,5x</span></p>
              </div>
              <div className="section__cases__element__content">
                <h3 className="section__cases__element_heading">Luksusbaby</h3>
                <p className="section__cases__element__description">Sådan fik Luksusbaby en webshop der matcher ambitionerne</p>
                <div className="section__cases__element__cta__wrapper">
                  Se case
                  <svg xmlns="http://www.w3.org/2000/svg" className="section__cases__element__icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="#" className="section__cases__element">
              <div className="section__cases__element__image__container">
                <Image src={case3} fill alt="" className="section__cases__element__image" />
              </div>
              <div className="section__cases__element__tags">
                <p className="section__cases__element__tags__element">CR: <span className="highlight">5,2%</span></p>
                <p className="section__cases__element__tags__element">ROI: <span className="highlight">17,4x</span></p>
              </div>
              <div className="section__cases__element__content">
                <h3 className="section__cases__element_heading">Ortofon</h3>
                <p className="section__cases__element__description">Fra Umbraco til Shopify og nul disharmonier</p>
                <div className="section__cases__element__cta__wrapper">
                  Se case
                  <svg xmlns="http://www.w3.org/2000/svg" className="section__cases__element__icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
