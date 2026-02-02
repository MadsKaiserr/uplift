"use client"
import Image from 'next/image'
import Mads from "@/app/assets/images/MadsKaiser_cropped.webp"
import { useState } from "react";
import Mathias from '@/app/components/cards/mathias';

export default function KontaktFormular() {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [navn, setNavn] = useState("");

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();

        const form = e.currentTarget;
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(form);

        const data = {
            name: formData.get('name')?.toString() || 'Anonym',
            email: formData.get('email')?.toString(),
            message: formData.get('message')?.toString(),
        };

        try {
            const res = await fetch('/api/contact', {
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
            form.reset();
        } catch (err) {
            console.error('Fejl ved afsendelse af mail:', err);
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <div className="main__hero__form">
            <h2 className="main__hero__form__heading">Send os en <span className="highlight">besked</span></h2>
            <p className="main__hero__form__p">Udfyld formularen nedenfor, så kontakter vi dig indenfor 24 timer.</p>
            <form onSubmit={handleSubmit} className="main__hero__form__wrapper">
                {!success ? <>
                    <div className="main__hero__form__input__container">
                        <label className="main__hero__form__input__label">Navn</label>
                        <input
                        name="name"
                        type="text"
                        required
                        className="main__hero__form__input"
                        placeholder="Fulde navn"
                        />
                    </div>
                    <div className="main__hero__form__input__container">
                        <label className="main__hero__form__input__label">E-mail</label>
                        <input
                        name="email"
                        type="email"
                        required
                        className="main__hero__form__input"
                        placeholder="Mailadresse"
                        />
                    </div>
                    <div className="main__hero__form__input__container">
                        <label className="main__hero__form__input__label">Besked</label>
                        <textarea
                        name="message"
                        required
                        className="main__hero__form__textarea"
                        />
                    </div>
                    <button type="submit" className="main__primary__btn" disabled={loading}>
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
