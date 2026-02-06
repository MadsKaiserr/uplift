import "@/app/assets/css/header.css";
import Image from 'next/image'

import logo from "@/app/assets/images/UPLIFT Wordmark.svg"
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header__container">
          <div className="header__wrapper">
              <Link href="/" className="header__logo__container">
                  <Image src={logo} preload={true} loading={"eager"} className="header__logo__image" height={25} alt="UPLIFT Logo" />
              </Link>
              <div className="header__navigation__container">
                <Link href="#"  className="header__navigation__link">CRO services</Link>
                <Link href="#"  className="header__navigation__link">Info</Link>
                <Link href="/team-og-kultur/" className="header__navigation__link">Team og Kultur</Link>
                <Link href="/kontakt/" className="header__navigation__link">Kontakt</Link>
              </div>
              <div className="header__cta__container">
                <Link href="/cro-analyse/" className="main__secondary__btn header__cta__desktop__btn">
                    Gratis CRO Analyse
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </Link>
                <Link href="/cro-analyse/" className="main__primary__btn header__cta__mobile__btn">
                    Gratis CRO Analyse
                    <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="header__cta__mobilemenu" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
              </div>
          </div>
      </div>
      <div className="header__placeholder"></div>
    </>
  );
}