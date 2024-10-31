import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl">
        <motion.p 
          variants={item}
          className="text-neutral-400 text-lg md:text-xl mb-4"
        >
          Creative Developer
        </motion.p>
        <motion.h1 
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8"
        >
          Crafting Digital
          <br />
          Experiences Through
          <br />
          Code & Design
        </motion.h1>
        <motion.div 
          variants={item}
          className="flex gap-8 text-neutral-400"
        >
          <a href="#work" className="group flex items-center gap-2 hover:text-white transition-colors">
            View Work
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#contact" className="group flex items-center gap-2 hover:text-white transition-colors">
            Get in Touch
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}