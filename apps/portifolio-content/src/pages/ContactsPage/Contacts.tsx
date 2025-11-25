"use client";

import hs from "@/pages/HomePage/HomePage.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import s from "./Contacts.module.scss";

import Footer from "@/components/Footer/Footer";
import {useRef, useState} from "react";
import {sendForm} from "@emailjs/browser";


export default function ContactsPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        try {
            await sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus("sent");
            alert("✅ Mensagem enviada!");
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            alert("❌ Ops, algo deu errado.");
        }
    };

    return (
        <section className={hs.homeContainer}>
            <NavBar page={"contacts"} links={["/", "/AboutMePage/AboutMe", "/Projects/ProjectsPage", "contacts"]}/>
            <h1>Contacts</h1>
            <section className={s.formContainer}>
                <div className={s.formWrapepr}>
                    <h3>Let's talk for something special!</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className="contacts">
                        <fieldset className={s.inputsWrapper}>
                            <input placeholder="Name" type="text" name="name" required/>
                            <input placeholder="Email" type="email" name="email" required/>
                        </fieldset>
                        <input placeholder="Title" type="text" name="title" required/>
                        <textarea
                            placeholder="Message"
                            name="message"
                            id="message"
                            required
                        />
                    </form>
                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Enviando..." : "Enviar"}
                    </button>
                </div>
                <div className={s.cardWrapper}>
                {/* criar novo card [component */}
                </div>
            </section>
            <Footer page="other"/>
        </section>
    )
}
