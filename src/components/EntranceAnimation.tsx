import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GRID_SIZE = {
  sm: 4,
  md: 5,
  lg: 6,
};

export function EntranceAnimation({ onComplete }: { onComplete: () => void }) {
  const [gridSize, setGridSize] = useState(GRID_SIZE.md);

  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;
      if (width < 640) setGridSize(GRID_SIZE.sm);
      else if (width < 1024) setGridSize(GRID_SIZE.md);
      else setGridSize(GRID_SIZE.lg);
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const boxes = Array.from({ length: gridSize * gridSize }, (_, i) => i);
  
  const getDelay = (index: number) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const distance = Math.sqrt(Math.pow(row, 2) + Math.pow(col, 2));
    return distance * 0.1;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-transparent"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 500);
      }}
    >
      {boxes.map((index) => (
        <motion.div
          key={index}
          className="w-full h-full bg-indigo-600"
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 1.2, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            delay: getDelay(index),
            ease: [0.645, 0.045, 0.355, 1],
          }}
        />
      ))}
    </motion.div>
  );
}