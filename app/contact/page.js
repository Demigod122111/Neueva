"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const serviceID = process.env.NEXT_PUBLIC_serviceID; 
      const templateID = process.env.NEXT_PUBLIC_templateID;
      const userID = "JhbQnlcYv2xjzdAf9";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setIsSubmitting(false);
      setStatus("Your message has been sent! Thank you for reaching out.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsSubmitting(false);
      setStatus("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Contact Me</h1>
      <p className="text-white mb-6">
        I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out using the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md placeholder-gray-400"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md placeholder-gray-400"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md placeholder-gray-400"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"}`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-6 text-white">{status}</p>}
    </div>
  );
};

export default ContactPage;
