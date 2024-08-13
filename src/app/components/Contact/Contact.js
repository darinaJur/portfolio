"use client";

import { useState } from "react";
import "./Contact.scss";

export default function Contact({ font }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirm, setConfirm] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    if (event.target.id === "name") {
      setFormData({
        ...formData,
        name: event.target.value,
      });
    }

    if (event.target.id === "email") {
      setFormData({
        ...formData,
        email: event.target.value,
      });
    }

    if (event.target.id === "message") {
      setFormData({
        ...formData,
        message: event.target.value,
      });
    }
  };

  return (
    <main id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-title-container">
          <h1>contact</h1>
        </div>
        <div className={font}>
          <form className="contact-form">
            <label>
              <p>Full Name</p>
              <input
                type="text"
                id="name"
                required
                placeholder="Name*"
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                id="email"
                required
                placeholder="Email Address*"
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Message</p>
              <textarea
                type="text"
                id="message"
                required
                placeholder="Message*"
                onChange={handleChange}
              />
            </label>
            <button>Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
