import Image from 'next/image'
import Mads from "@/app/assets/images/MadsKaiser_cropped.webp"
import Mathias from "@/app/assets/images/Mathias-Billede-kopi.webp"

export default function Card() {
  return (
    <div className="main__hero__form__ansvarlig__container">
        <Image src={Mathias} className="main__hero__form__ansvarlig__image" alt="Mathias Marquard Profilbillede" />
        <div className="main__hero__form__ansvarlig__wrapper">
        <p className="main__hero__form__ansvarlig__heading">
            Mathias Marquard, Co-Founder & CCO
        </p>
        <p className="main__hero__form__ansvarlig__p">
            mmr@upliftcro.dk <span className="divider">eller</span> +45 23 96 58 58
        </p>
        </div>
    </div>
  );
}
