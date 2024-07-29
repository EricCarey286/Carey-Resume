'use client'

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import Section from "../Section/Section";

export default function Contact() {
  const [isSuccessful, setIsSuccessful] = useState("null");

  const serviceKey = "service_8e72fb5";
  const templateKey = "template_e8oqcb9";
  const publicKey = "V_TYKAT8dkSssHTNv";

  const form = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current!, publicKey).then(
      (result) => {
        validateSuccess(true);
        console.log(result.text);
      },
      (error) => {
        validateSuccess(false);
        console.log(error.text);
      },
    );
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  function validateSuccess(result: boolean) {
    if (result) {
      setIsSuccessful("success");
    } else {
      setIsSuccessful("error");
    }
  }

  return (
    <Section title="Contact">
      <div id="contact-div">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Contact Me</h3>
          <h5>For more information</h5>
          <label htmlFor="user_name">Name</label>
          <input
            ref={nameRef}
            type="text"
            name="user_name"
            id="user_name"
            className="contact-input"
            required
            title="Your full name"
            placeholder="Enter your name"
          />
          <label htmlFor="user_email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="user_email"
            id="user_email"
            className="contact-input"
            required
            title="Your email address"
            placeholder="Enter your email"
          />
          <label htmlFor="message">Message</label>
          <textarea 
            id="contact-message" 
            ref={messageRef} 
            name="message"
            title="Your message"
            placeholder="Enter your message"
          />
          <input type="submit" value="Send" className="submit" required title="Send your message" />
          {isSuccessful === "success" ? (
            <p className="contact-success "> Your message has been sent</p>
          ) : isSuccessful === "error" ? (
            <p className="contact-error">
              There was an error sending your message.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
