import NavBar from "../components/NavBar";
import { Mail, Linkedin, Download, Phone } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
const EMAILJS_SERVICE_ID = "service_gpca5z7";
const EMAILJS_TEMPLATE_ID = "template_su6ynmg";
const EMAILJS_PUBLIC_KEY = "_O-2MQUN2USiHJs96";
const defaultForm = {
  name: "",
  email: "",
  message: ""
};
const Contact = () => {
  const [form, setForm] = useState(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({
    ...form,
    [e.target.name]: e.target.value
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    };
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setForm(defaultForm);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <NavBar />
      <main className="pt-28 pb-14 container max-w-xl mx-auto px-4 animate-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary">Contact Me</h2>
        <section className="bg-card rounded-3xl shadow-xl p-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={20} />
              <span className="text-white/90">
                <a href="mailto:samarth.mistry@email.com" className="hover:underline">sam.mistry119.83@gmail.com</a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={20} />
              <span className="text-white/90">+91 88490-69680</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-primary" size={20} />
              <a href="https://www.linkedin.com/in/samarth-mistry13/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/samarth-mistry13</a>
            </div>
            <div className="flex items-center gap-3">
              <Download className="text-primary" size={20} />
              <a
                href="https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
        <section className="bg-card rounded-3xl shadow-lg p-8">
          <h3 className="font-semibold text-xl mb-3 text-accent">Contact Form</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required disabled={isLoading} />
            <input className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary" name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} required disabled={isLoading} />
            <textarea className="px-4 py-3 rounded-lg bg-[#232a3f] border-none text-white placeholder:text-gray-400 outline-primary min-h-[120px]" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required disabled={isLoading} />
            <button className={`w-full mt-2 bg-primary text-[#16202a] py-3 rounded-lg font-semibold text-lg hover:bg-accent transition-colors ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`} type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>
    </div>;
};
export default Contact;
