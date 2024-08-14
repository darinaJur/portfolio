"use client";

import { useState } from "react";
import "./Contact.scss";

export default function Contact({ font }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const sendEmail = async (formData) => {
    const apiEndpoint = "/api/email";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }
      return data.message;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendEmail(formData);
      alert("Message sent!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send the message.");
    }
  };

  return (
    <main id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-title-container">
          <h1>contact</h1>
        </div>
        <div className={font}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <p>Full Name</p>
              <input
                type="text"
                id="name"
                value={formData.name}
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
                value={formData.email}
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
                value={formData.message}
                required
                placeholder="Message*"
                onChange={handleChange}
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
