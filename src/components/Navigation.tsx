import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className={`fixed inset-0 z-50 bg-black ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="absolute top-4 right-6">
        <button onClick={onClose} className="p-2 hover:opacity-70 transition-opacity">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="h-full flex items-center justify-center">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: isOpen ? 0 : 40, opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-center"
        >
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={onClose}
                className="text-4xl font-light hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}