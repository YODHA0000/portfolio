import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'Development',
    link: '#',
  },
  {
    title: 'Designing for Performance',
    excerpt: 'Best practices for creating fast, responsive, and user-friendly web applications.',
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    category: 'Design',
    link: '#',
  },
  {
    title: 'The Art of Animation',
    excerpt: 'Creating meaningful animations that enhance user experience and engagement.',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    category: 'Animation',
    link: '#',
  },
];

export function Blog() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24" id="blog">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-light mb-12"
      >
        Latest Thoughts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <a href={post.link} className="block p-6 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <span className="text-neutral-400 text-sm">{post.category}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-2xl font-light mb-3">{post.title}</h3>
              <p className="text-neutral-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}