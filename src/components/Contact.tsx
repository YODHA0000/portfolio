import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

const socials = [
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-8">Let's Create Something Together</h2>
        <p className="text-neutral-400 text-lg mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex justify-center gap-8">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <social.icon className="w-5 h-5" />
              <span>{social.name}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}