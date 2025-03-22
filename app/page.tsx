"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6 space-y-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Syed Muhammad Raza Shah
      </motion.h1>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">
          I am a graduating student with a specialization in Artificial Intelligence.
          I work with modern AI tools and build real-world solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "Next.js",
            "React",
            "Tailwind CSS",
            "GitHub",
            "Framer Motion",
          ].map((skill) => (
            <div key={skill} className="border rounded p-4 shadow">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:smrz1272@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/Muhammadzaidi72" target="_blank">
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/syed-muhammad-raza-shah-887l1044"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </section>
    </main>
  );
}
