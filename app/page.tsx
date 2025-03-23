"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all duration-500`}>      
      {/* Theme Toggle */}
      <div className="p-4 flex justify-end">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 border rounded-full">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20 space-y-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mohammed Zaidi
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI / ML Engineer | Building intelligent solutions
        </motion.p>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 space-y-3 text-center">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-400">
          I'm a graduate student specializing in Artificial Intelligence. I focus on applying deep learning and machine learning techniques to real-world challenges and have experience working with cutting-edge models for vision and speech.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "Next.js", "React", "Tailwind CSS", "GitHub", "Framer Motion"].map((skill) => (
            <motion.div
              key={skill}
              className="border p-4 rounded shadow hover:scale-105 transition"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        {["Lesion Detection and Segmentation for Diabetic Retinopathy", "Fine-tuning Whisper for Low-Resource Languages", "Wav2Vec2-Based Speech Transcription for Rare Languages", "AI4Bharat Speech-to-Text Model for Indian & South Asian Languages"].map((project, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded shadow hover:shadow-lg transition"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold">{project}</h3>
            <p className="text-sm text-gray-400">More details coming soon...</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-4 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:smrz1272@gmail.com" target="_blank">
            <Mail />
          </a>
          <a href="https://github.com/Muhammadzaidi72" target="_blank">
            <Github />
          </a>
          <a href="https://linkedin.com/in/syed-muhammad-raza-shah-887l1044" target="_blank">
            <Linkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 pb-4">
        © {new Date().getFullYear()} Mohammed Zaidi. All rights reserved.
      </footer>
    </main>
  );
}
