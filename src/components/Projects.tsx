import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'Digital Experience',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Web Development',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80',
    link: '#',
  },
];

export function Projects() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24" id="work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="group relative block aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-full flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-light">{project.title}</h3>
                  <p className="text-neutral-400">{project.description}</p>
                </div>
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}