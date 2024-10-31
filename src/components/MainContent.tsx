import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Blog } from './Blog';
import { Contact } from './Contact';

export function MainContent() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </motion.main>
  );
}