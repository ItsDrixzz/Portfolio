'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, Linkedin, ArrowDown, Code2, Briefcase, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Will Weber
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button variant="outline" size="icon" className="hover:bg-primary/10">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Button className="animate-bounce bg-blue-600 hover:bg-blue-700">
            <ArrowDown className="mr-2 h-4 w-4" /> Explore My Work
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:bg-secondary/50 border-secondary">
              <Code2 className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Building responsive and performant web applications using modern technologies.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:bg-secondary/50 border-secondary">
              <Briefcase className="h-12 w-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful and intuitive user interfaces with great user experience.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:bg-secondary/50 border-secondary">
              <User className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Providing expert advice on web development and design solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
            <Mail className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
        </div>
      </section>
    </main>
  );
}