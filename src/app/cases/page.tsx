import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import trustpilot from "@/app/assets/images/Trustpilot.png"
import { cases } from "@/app/assets/data/cases";

export const generateMetadata = () => {
  return {
    title: "Vores cases | Se et udvalg af vores samarbejder",
    description: "",
  };
};

export default function Cases() {
  return (
    <>
      <div className="main__hero__container main__contact__hero">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper">
          <div className="main__hero__content">
            <Image src={trustpilot} className="main__hero__form__trustpilot" alt="Trustpilot 5 stjerner" />
            <h1 className="main__hero__heading main__hero__heading__sans">Læs vores <span className="highlight">Case Studies</span></h1>
            <p className="main__hero__description">Se et udvalg af vores cases. Har du nogen spørgsmål, så er du altid velkommen til at skrive eller give os et kald.</p>
          </div>
        </div>
        <Image src={dots} className="main__landingpage__dots" width={400} alt="" />
      </div>
      <div className="section__cases__container__single">
        <div className="section__cases__container">
          <div className="section__cases__wrapper">
            <div className="section__cases__list">
              {cases.map((item, index) => (
                <Link href={"/cases/" + item.slug} key={index} className="section__cases__element">
                  <div className="section__cases__element__image__container">
                    <Image 
                      src={item.image} 
                      fill 
                      alt={item.title} 
                      className="section__cases__element__image" 
                    />
                  </div>
                  
                  <ul className="section__cases__element__tags">
                    {item.highlights.map((highlightItem, index) => {
                      return (
                        <li key={"highlight-" + index} className="section__cases__element__tags__element">
                          {highlightItem.label}: <span className="highlight">{highlightItem.value}</span>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="section__cases__element__content">
                    <h3 className="section__cases__element_heading">{item.title}</h3>
                    <p className="section__cases__element__description">{item.description}</p>
                    
                    <div className="section__cases__element__cta__wrapper">
                      Se case
                      <svg xmlns="http://www.w3.org/2000/svg" className="section__cases__element__icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
