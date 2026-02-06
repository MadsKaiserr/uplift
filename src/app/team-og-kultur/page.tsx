import "@/app/assets/css/hero.css";
import "@/app/assets/css/forside.css";
import Image from 'next/image'

import dots from "@/app/assets/images/Dots.svg"

export const generateMetadata = () => {
  return {
    title: "Team & Kultur | Lær vores team bedre at kende",
    description: "",
  };
};

export default function TeamOgKultur() {
  
  return (
    <>
      <div className="main__hero__container main__contact__hero">
        <Image src={dots} className="main__hero__dots" width={600} alt="" />
        <div className="main__hero__wrapper main__heroform">
          <div className="main__hero__content">
            <h1 className="main__hero__heading main__hero__heading__sans">Lær vores <span className="highlight">team</span> at kende</h1>
            <p className="main__hero__description">Skal vi tage en snak? Kontakt os i dag på mail eller telefon. Vi glæder os til at høre fra dig!</p>
            <div className="main__hero__checklist__container">
                <div className="main__hero__checklist__element">
                    <p className="main__hero__description main__hero__checklist__element__p">Mail: <span className="bold">support@upliftcro.dk</span></p>
                </div>
                <div className="main__hero__checklist__element">
                    <p className="main__hero__description main__hero__checklist__element__p">Tlf.: <span className="bold">+45 23 96 58 58</span></p>
                </div>
            </div>
          </div>
        </div>
        <Image src={dots} className="main__landingpage__dots" width={400} alt="" />
      </div>
    </>
  );
}