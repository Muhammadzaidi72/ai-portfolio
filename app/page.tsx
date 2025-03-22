import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Syed Muhammad Raza Shah
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }}
        >
          Graduating Student Specialising in AI
        </motion.p>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">
          I am a graduate student with a specialization in Artificial Intelligence. I have developed a solid understanding of modern AI technologies, and my skill set includes all the hot and in-demand tools in today’s AI-driven world. I'm passionate about solving real-world problems through innovative, data-driven solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'Next.js', 'Tailwind CSS', 'React', 'GitHub', 'Framer Motion'].map(skill => (
            <Card key={skill} className="shadow-md">
              <CardContent className="p-4 font-medium">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {[
          {
            title: "Lesion Detection and Segmentation for Diabetic Retinopathy",
          },
          {
            title: "Fine-tuning Whisper for Low-Resource Languages",
          },
          {
            title: "Automatic Speech Recognition (ASR) with Mozilla DeepSpeech",
          },
          {
            title: "Wav2Vec2-Based Speech Transcription for Rare Languages",
          },
          {
            title: "AI4Bharat Speech-to-Text Model for Indian & South Asian Languages",
          },
          {
            title: "Comprehensive Analysis & Optimization of Classification and Regression Models",
          }
        ].map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">More details coming soon...</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:smrz1272@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
          </a>
          <a href="https://github.com/Muhammadzaidi72" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
          </a>
          <a href="http://linkedin.com/in/syed-muhammad-raza-shah-887l1044" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
