import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'
import Link from "next/link";

import dots from "@/app/assets/images/Dots.svg"
import hero from "@/app/assets/images/Hero.png"

import { cases } from "@/app/assets/data/cases";
import LeadFormular from "@/app/cro-analyse/components/leadFormular";

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
      <div className="section__textwithimage__container section__textwithimage__divider">
        <div className="section__textwithimage__wrapper">
          <div className="section__textwithimage__content">
            <h2 className="section__textwithimage__heading">Stop spildet af dine dyre marketing-kroner i 2026</h2>
            <p className="section__textwithimage__p">I 2026 kæmper de fleste virksomheder med stigende annoncepriser og et mættet marked, hvor de besøgende er mere skeptiske end nogensinde før. Det er ikke længere nok blot at "få folk ind i butikken". Hvis din hjemmeside ikke øjeblikkeligt fjerner tvivl og frygt hos den besøgende, forlader de siden hurtigere, end du kan nå at betale for deres klik.</p>
          </div>
        </div>
      </div>
      <div className="section__textwithimage__container">
        <Image src={dots} className="main__hero__dots" width={350} alt="" />
        <div className="section__textwithimage__wrapper">
          <div className="section__textwithimage__image__container">
            <Image src={hero} alt="" className="section__textwithimage__image" />
          </div>
          <div className="section__textwithimage__content">
            <h2 className="section__textwithimage__heading">Hvad er konverteringsoptimering (CRO)?</h2>
            <p className="section__textwithimage__p">Forestil dig, at du ejer en fysisk butik. Hvis der går 100 mennesker ind ad døren, men kun 2 af dem køber noget, så er din konverteringsrate 2 %. <Link href="/hvad-er-konverteringsoptimering/" className="bold link">CRO (Conversion Rate Optimization)</Link> er arbejdet med at finde ud af, hvorfor de 98 andre gik igen uden at købe noget - og så fikse det.</p>
            <p className="section__textwithimage__p">Mange virksomhedsejere begår fejlen ved at tro, at vækst udelukkende handler om at få mere trafik. Men i 2026 er trafik dyrt, og konkurrencen om opmærksomheden er enorm. Data viser, at <Link href="https://baymard.com/lists/cart-abandonment-rate" className="bold link" target="_BLANK">~70%</Link> <span className="bold">af alle online indkøbskurve bliver forladt før betaling</span>, og bliver derfor aldrig til et køb. Ved du, hvorfor dine kunder falder fra lige før målstregen?</p>
            <Link href="/cro-analyse/" className="main__primary__btn">
                Få en Gratis CRO Analyse
                <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </Link>
          </div>
        </div>
        <Image src={dots} className="main__hero__banner__dots" width={350} alt="" />
      </div>
      <div className="section__textwithimage__container">
        <Image src={dots} className="main__hero__dots" width={350} alt="" />
        <div className="section__textwithimage__wrapper">
          <div className="section__textwithimage__content">
            <h2 className="section__textwithimage__heading">Hvordan øger vi jeres bundlinje gennem CRO?</h2>
            <p className="section__textwithimage__p">Vi arbejder ikke med gætværk eller overfladisk design. Vores proces er bygget til at identificere de steder på jeres site, hvor I <span className="extrabold">taber omsætning</span> lige nu, og fikse dem med det samme. Vi starter altid med en <Link href="/cro-analyse/" className="extrabold link">indledende analyse</Link>, hvor vi kortlægger jeres svage punkter. Herfra lægger vi en <Link href="#" className="extrabold link">strategi</Link>, der prioriterer de "lavthængende frugter" – de ændringer, der kræver mindst indsats, men giver det største udslag på bundlinjen.</p>
            <p className="section__textwithimage__p">Når strategien er på plads, <span className="extrabold">designer og eksekverer</span> vi løsninger baseret på anerkendte psykologiske teorier. Men vi stopper ikke der. Vi <span className="extrabold">overvåger tallene ugentligt</span> og evaluerer på den data, vi får ind. Hvis noget ikke performer som forventet, retter vi til med det samme. Det er en konstant proces, hvor vi skruer på de knapper, der rent faktisk flytter procenterne.</p>
          </div>
          <div className="section__textwithimage__image__container">
            <Image src={hero} alt="" className="section__textwithimage__image" />
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
      <div className="section__lead__container">
          <div className="section__lead__wrapper">
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
            <LeadFormular />
          </div>
      </div>
    </>
  );
}
