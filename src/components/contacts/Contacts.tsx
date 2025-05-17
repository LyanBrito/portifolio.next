'use client';

import React, {useRef, useState} from 'react';
import {Button} from '../small-componnets/Button';
import {SubButton} from '../small-componnets/SubButton';
import {TitleWrapper} from '../small-componnets/TitleWrapper';
import {PageProps} from '@/types';
import {GithubIcon, InstaIcon, LinkedinIcon} from '@/assets/icons/export';
import emailjs from '@emailjs/browser';
import './contacts.scss';

export default function Contacts({page}: PageProps) {
    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        blockHeadless: true,
        blockList: {
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            watchVariable: 'userEmail',
        },
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus('sent');
            alert('✅ Message sent!');
            formRef.current.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            alert('❌ Oops, something went wrong.');
        }
    };

    return (
        <section className="contacts-container">
            <TitleWrapper page={page} index="/" title="contact-me"/>
            <div className="contacts-content">
                <form ref={formRef} onSubmit={handleSubmit} className="contacts">
                    <div className="inputs-wrapper">
                        <input placeholder="Name" type="text" name="name" required/>
                        <input placeholder="Email" type="email" name="email" required/>
                    </div>
                    <input placeholder="Title" type="text" name="title" required/>
                    <textarea placeholder="Message" name="message" id="message" required/>
                    <div className="buttons-wrapper">
                        <SubButton
                            type="submit"
                            Btype="secondary-button"
                            disabled={status === 'sending'}
                            content={status === 'sending' ? 'Sending...' : 'Send'}
                        />

                        <Button
                            type="button"
                            Btype="github-icon icon-button"
                            content={<GithubIcon width={24} height={24}/>}
                        />
                        <Button
                            type="button"
                            Btype="linkedin-icon icon-button"
                            content={<LinkedinIcon width={24} height={24}/>}
                        />
                        <Button
                            type="button"
                            Btype="insta-icon icon-button"
                            content={<InstaIcon width={24} height={24}/>}
                        />
                    </div>
                </form>
                <div className="contacts-title">
                    <h2><span className={page}>##</span> Let’s talk for something special 🚀</h2>
                    <p>
                        I seek to push the limits of creativity to create high-engaging,
                        user-friendly, and memorable interactive experiences.
                    </p>
                    <h3>
                        <span className={page}>+55</span> (11) 9 8658<span className={page}>-</span>1730
                        <br/>
                        lyanbrito613<span className={page}>@gmail.com</span>
                    </h3>
                </div>
            </div>
        </section>
    );
}
