
import NavBar from "../components/NavBar";
import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const RESUME_LINK = "https://drive.google.com/file/d/13LUvlfcsxVpfSRIg0tSnVEU4AToX71x5/view?usp=sharing";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const blockVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.10 + i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#181e2e] to-[#0f172a] font-sans text-white">
    <NavBar />
    <main className="pt-3 md:pt-32 pb-24 container max-w-7xl mx-auto px-8">
      <motion.section
        className="bg-card/95 rounded-3xl shadow-2xl px-12 sm:p-16 md:p-20 relative border border-[#27458a]/30 backdrop-blur-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h2
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-primary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          About Me
        </motion.h2>
        {/* Resume button below About Me on mobile only */}
        <motion.div
          className="flex md:hidden justify-center mb-12"
          initial="hidden"
          animate="visible"
          variants={blockVariants}
          custom={0}
        >
          <a
            href={RESUME_LINK}
            className="inline-flex items-center px-8 py-4 font-semibold rounded-xl bg-primary text-[#16202a] hover:bg-accent transition-colors shadow-lg text-xl whitespace-nowrap animate-scale-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={24} className="mr-3" />
            Resume
          </a>
        </motion.div>
        <motion.p
          className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={blockVariants}
          custom={1}
        >
          Aspiring Game Designer passionate about creating immersive environments and gameplay experiences.<br />
          Moderately skilled in Unreal Engine&nbsp;5, environment art, and prototyping using Blueprint.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-20 mt-16"
          initial="hidden"
          animate="visible"
          variants={blockVariants}
          custom={2}
        >
          <div className="flex-1 bg-white/5 rounded-2xl p-12 shadow-sm border border-primary/10 mb-8 md:mb-0">
            <h3 className="font-semibold text-3xl md:text-4xl mb-8 text-accent">Education</h3>
            <ul className="list-disc list-inside space-y-4 text-white/90 text-xl">
              <li>Completed 12th grade</li>
              <li>Pursuing B.Tech </li>
            </ul>
          </div>
          <div className="flex-1 bg-white/5 rounded-2xl p-12 shadow-sm border border-primary/10">
            <h3 className="font-semibold text-3xl md:text-4xl mb-8 text-accent">Skills</h3>
            <ul className="flex flex-wrap gap-6 text-xl">
              <li className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold">Unreal Engine</li>
              <li className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold">Blueprint Scripting</li>
              <li className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold">C++</li>
              <li className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold">Environment Design</li>
              <li className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold">Gameplay Mechanics</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </main>
  </div>
);

export default About;
