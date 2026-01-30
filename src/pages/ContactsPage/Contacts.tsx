"use client";

import hs from "@/pages/HomePage/HomePage.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import s from "./Contacts.module.scss";

import Footer from "@/components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import Link from "next/link";
import SocialCard from "@/components/SkillsCard/SocialCard";
import ContactsSK from "@/components/ui/skeleton/ContactsSK";
import { useEmailSend } from "@/hooks/useSentEmail";

export default function ContactsPage() {
    // Interface para os dados do formulário que seu hook espera, se necessário
    interface FormData {
        name: string;
        email: string;
        title: string;
        message: string;
    }


    const formRef = useRef<HTMLFormElement>(null);

    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const { sendEmail } = useEmailSend();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const data: FormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            title: formData.get("title") as string,
            message: formData.get("message") as string,
        };

        // if (!data.name || !data.email || !data.title || !data.message) {
        //     alert("Please, preencha todos os campos.");
        //     return;
        // }

        setStatus("sending");

        try {
            await sendEmail(data);
            setStatus("sent");
            alert("Sucessfuly sent message!");
            formRef.current.reset();

        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            alert("Something went wrong");
        }
    };

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <ContactsSK />

    return (
        <section className={hs.homeContainer}>
            <NavBar page={"contacts"} links={["/", "/AboutMePage/AboutMe", "/Projects/ProjectsPage", "contacts"]} />
            <h1 id="home" className={s.cTitle}>Contacts</h1>
            <section className={s.contactsContainer}>
                <div className={s.formContainer}>
                    <h3>Let's talk for something special!</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className={s.contacts}>
                        <fieldset>
                            <input className={s.formInput}
                                id="name"
                                placeholder="Name"
                                type="name"
                                required />
                            <input className={s.formInput}
                                id="email"
                                placeholder="Email"
                                type="email"
                                required />
                        </fieldset>
                        <input className={s.formInput}
                            id="title"
                            placeholder="Title"
                            type="title"
                            required />
                        <textarea className={s.formInput}
                            placeholder="Message"
                            name="message"
                            id="message"
                            required
                        />
                        <button className={`${status === "sending" ? s.disabled : ''} ${hs.button}`}
                            type="submit" disabled={status === "sending"}>
                            {status === "sending" ? "Sending..." : "Submit"}
                            <ArrowIcon />
                        </button>
                    </form>
                </div>
                <div className={s.cardWrapper}>
                    <SocialCard contact="linkedin" />
                    <SocialCard contact="insta" />
                    <SocialCard contact="github" />
                </div>
            </section>
            <Footer page="other" />
        </section>
    )
}
