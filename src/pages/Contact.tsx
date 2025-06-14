
import NavBar from "../components/NavBar";
import { Mail, Linkedin, Download, Phone } from "lucide-react";
import React, { useState } from "react";

const defaultForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(defaultForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true); // In extension, add backend/email logic here.
    setForm(defaultForm);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      <main className="pt-28 pb-14 container max-w-xl mx-auto px-4 animate-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary">Contact Me</h2>
        <section className="bg-card rounded-3xl shadow-xl p-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={20} />
              <span className="text-white/90">
                <a href="mailto:samarth.mistry@email.com" className="hover:underline">samarth.mistry@email.com</a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={20} />
              <span className="text-white/90">+91 99999 99999</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-primary" size={20} />
              <a
                href="https://linkedin.com/in/samarth-mistry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/samarth-mistry
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Download className="text-primary" size={20} />
              <a href="/samarth-mistry-resume.pdf" download className="hover:underline">
                Download Resume
              </a>
            </div>
          </div>
        </section>
        <section className="bg-card rounded-3xl shadow-lg p-8">
          <h3 className="font-semibold text-xl mb-3 text-accent">Contact Form</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary"
              name="email"
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary min-h-[120px]"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              className="w-full mt-2 bg-primary text-[#16202a] py-3 rounded-lg font-semibold text-lg hover:bg-accent transition-colors"
              type="submit"
              disabled={sent}
            >
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
