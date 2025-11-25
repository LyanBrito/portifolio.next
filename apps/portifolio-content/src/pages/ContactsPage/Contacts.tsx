"use client";

import hs from "@/pages/HomePage/HomePage.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import s from "./Contacts.module.scss";

import Footer from "@/components/Footer/Footer";
import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import Link from "next/link";
import SocialCard from "@/components/SkillsCard/SocialCard";


export default function ContactsPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        try {
            await sendForm(
                process.env.S_ID!,
                process.env.T_ID!,
                formRef.current,
                process.env.EJS_PK!
            );

            setStatus("sent");
            alert("Sucessfuly sent message!");
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            alert("Something went wrong");
        }
    };

    return (
        <section className={hs.homeContainer}>
            <NavBar page={"contacts"} links={["/", "/AboutMePage/AboutMe", "/Projects/ProjectsPage", "contacts"]} />
            <h1 id="home" className={s.cTitle}>Contacts</h1>
            <section className={s.contactsContainer}>
                <div className={s.formContainer}>
                    <h3>Let's talk for something special!</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className={s.contacts}>
                        <fieldset>

                            <input className={s.formInput} placeholder="Name" type="text" name="name" required />
                            <input className={s.formInput} placeholder="Email" type="email" name="email" required />

                        </fieldset>
                        <input className={s.formInput} placeholder="Title" type="text" name="title" required />
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
