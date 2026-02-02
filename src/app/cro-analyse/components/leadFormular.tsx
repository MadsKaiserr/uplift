"use client"
import Image from 'next/image'
import Mads from "@/app/assets/images/MadsKaiser_cropped.webp"
import { useState } from "react";
import Mathias from '@/app/components/cards/mathias';

export default function LeadFormular() {

    const [formState, setFormState] = useState(0)

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [domain, setDomain] = useState("");
    const [navn, setNavn] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [note, setNote] = useState("");

    function nextStep() {
        if (formState < 1) {
            setFormState(formState + 1)
        } else {
            handleSubmit()
        }
    }

    async function handleSubmit() {
        setLoading(true);
        setSuccess(false);

        const data = {
            domain: domain || '',
            name: navn || 'Anonym',
            email: email || "",
            telefon: telefon || "",
            note: note || "",
        };

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Der skete en fejl');
            }

            setSuccess(true);
            setNavn(data.name);
        } catch (err) {
            console.error('Fejl ved afsendelse af mail:', err);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="main__hero__form">
            <h2 className="main__hero__form__heading">Hvilket domæne skal vi <span className="highlight">analysere</span>?</h2>
            <p className="main__hero__form__p">Udfyld formularen nedenfor, så kontakter vi dig indenfor 24 timer.</p>
            <form onSubmit={handleSubmit} className="main__hero__form__wrapper">
                {!success ? <>
                    {formState == 0 && <>
                        <div className="main__hero__form__input__container">
                            <label className="main__hero__form__input__label">Domæne</label>
                            <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} required className="main__hero__form__input" placeholder="Ex. minvirksomhed.dk" />
                        </div>
                        <div className="main__hero__form__input__container">
                            <label className="main__hero__form__input__label">Besked (Valgfri)</label>
                            <textarea name="note" value={note} onChange={(e) => setNote(e.target.value)} className="main__hero__form__textarea" placeholder="" />
                        </div>
                    </>}
                    {formState == 1 && <>
                        <div className="main__hero__form__input__container">
                            <label className="main__hero__form__input__label">Navn</label>
                            <input type="text" value={navn} onChange={(e) => setNavn(e.target.value)} name="name" required className="main__hero__form__input" placeholder="Fulde navn" />
                        </div>
                        <div className="main__hero__form__input__container">
                            <label className="main__hero__form__input__label">Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required className="main__hero__form__input" placeholder="Mailadresse" />
                        </div>
                        <div className="main__hero__form__input__container">
                            <label className="main__hero__form__input__label">Telefonnummer (Valgfri)</label>
                            <input type="text" value={telefon} onChange={(e) => setTelefon(e.target.value)} name="telefon" className="main__hero__form__input" placeholder="Tlf. nummer" />
                        </div>
                    </>}
                    <button type="button" onClick={() => nextStep()} className="main__primary__btn" disabled={loading}>
                        {loading ? (
                            <span className="main__primary__btn__spinner" aria-label="Sender..." />
                        ) : (<>
                            Næste
                            <svg xmlns="http://www.w3.org/2000/svg" className="main__secondary__btn__icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                            </svg>
                        </>
                        )}
                    </button>
                </>
                : <div className="main__hero__form__success__wrapper">
                    <p className="main__hero__form__success__heading">Tak for din besked {navn}!</p>
                    <p className="main__hero__form__success__p">Vi bestræber os på at svare tilbage indenfor 24 timer.</p>
                </div>}


                <Mathias />
            </form>
        </div>
    );
}
