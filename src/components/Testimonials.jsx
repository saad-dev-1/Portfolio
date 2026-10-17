import { motion } from 'framer-motion';
import { MagnifyingGlass, PencilRuler, Code, Rocket } from '@phosphor-icons/react';

const Process = () => {
  const steps = [
    {
      icon: <MagnifyingGlass size={28} weight="duotone" />,
      title: "1. Discovery & Planning",
      desc: "We discuss your goals, target audience, and project scope. I figure out the best tech stack to bring your idea to life.",
    },
    {
      icon: <PencilRuler size={28} weight="duotone" />,
      title: "2. UI/UX Design",
      desc: "I create clean, modern, and user-friendly designs focused on converting visitors into customers.",
    },
    {
      icon: <Code size={28} weight="duotone" />,
      title: "3. Development",
      desc: "Writing clean, scalable code for both frontend (React) and backend (Laravel), ensuring high performance.",
    },
    {
      icon: <Rocket size={28} weight="duotone" />,
      title: "4. Testing & Launch",
      desc: "Rigorous testing across all devices. Once everything is perfect, we deploy your project to the live server.",
    },
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-royal"></div>
            <span className="text-royal font-sans text-sm tracking-widest uppercase font-semibold">How I Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            My <span className="italic text-royal">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#0d1530] rounded-3xl p-8 border border-gray-800 hover:border-royal/40 transition-colors relative group"
            >
              <div className="w-14 h-14 bg-royal/10 rounded-2xl flex items-center justify-center text-royal mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;