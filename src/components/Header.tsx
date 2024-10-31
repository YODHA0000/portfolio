import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center"
    >
      <motion.a 
        href="#"
        className="text-xl font-light tracking-wider"
        whileHover={{ scale: 1.05 }}
      >
        YOUR NAME
      </motion.a>
      <button 
        onClick={onMenuClick}
        className="p-2 hover:opacity-70 transition-opacity"
      >
        <Menu className="w-6 h-6" />
      </button>
    </motion.header>
  );
}