import { motion } from 'framer-motion';
import { MagnifyingGlass, PencilRuler, Code, Rocket } from '@phosphor-icons/react';

const Process = () => {
  const steps = [
    { icon: <MagnifyingGlass size={24} weight="duotone" />, title: "1. Discovery & Planning", desc: "We talk about your idea, who it's for, and what you actually need. No unnecessary features, just a clear plan." },
    { icon: <PencilRuler size={24} weight="duotone" />, title: "2. UI/UX Design", desc: "I sketch out how it will look and feel. The goal is simple: it should look good and be easy for people to use." },
    { icon: <Code size={24} weight="duotone" />, title: "3. Development", desc: "I write the actual code. React on the frontend, Laravel on the back. I make sure it runs fast and doesn't break." },
    { icon: <Rocket size={24} weight="duotone" />, title: "4. Testing & Launch", desc: "I test everything on real phones and laptops. Once it's smooth, we put it live on the internet." },
  ];

  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-16">
          <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-royal"></div>
            <span className="text-royal font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">How I Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">My <span className="italic text-royal">Process</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="bg-[#0d1530] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-800 hover:border-royal/40 transition-all duration-300 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-royal/10 rounded-xl md:rounded-2xl flex items-center justify-center text-royal mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;