import { motion } from 'framer-motion';
import { Briefcase, FolderOpen, CheckCircle, ArrowRight } from '@phosphor-icons/react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC] text-[#0f172a] relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-royal/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 md:mb-20 text-center flex flex-col items-center">
          <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
            <div className="h-[2px] w-6 md:w-8 bg-royal"></div>
            <span className="text-royal font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">About Me</span>
            <div className="h-[2px] w-6 md:w-8 bg-royal"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A1128] max-w-3xl leading-tight">
            Building digital products with <span className="italic text-royal">passion.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          
                    {/* Box 1: Main Bio (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // items-start aur text-left add kiya hai taake sab kuch left se shuru ho
            className="lg:col-span-2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start text-left relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(37,99,235,0.06)] hover:border-royal/20 transition-all duration-500"
          >
            
            <div className="relative z-10 w-full">
              {/* Tags / Chips */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                <span className="flex items-center px-3 py-1 md:px-3.5 md:py-1.5 bg-royal/5 text-royal text-[10px] md:text-[11px] font-bold rounded-full border border-royal/10 tracking-widest uppercase">
                  Full-Stack Developer
                </span>
                <span className="flex items-center px-3 py-1 md:px-3.5 md:py-1.5 bg-gray-50 text-gray-600 text-[10px] md:text-[11px] font-bold rounded-full border border-gray-200 tracking-widest uppercase">
                  BSCS Student
                </span>
              </div>

              {/* Bio Text: Left aligned, perfect line-height for both mobile & desktop */}
              <div className="font-sans text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-[1.8] md:leading-[1.85] max-w-2xl text-left">
                <p>
                  I'm currently studying Computer Science at the <strong className="font-semibold text-gray-900">University of Sargodha</strong>, but most of what I know comes from breaking things, building them again, and learning to code on my own. Based in <strong className="font-semibold text-gray-900">Jauharabad</strong>, I mostly work with <strong className="font-semibold text-gray-900">React</strong> and <strong className="font-semibold text-gray-900">Laravel</strong>, handling both sides of a project to make sure the frontend looks clean and the backend actually works without falling apart. Recently, I've been building custom e-commerce stores, client portals, and experimenting with AI tools. When I'm not coding, I'm probably watching tech videos or exploring new tools.
                </p>
              </div>
            </div>
            
            {/* Divider and CTA Button (Aligned Left) */}
            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-100 w-full flex justify-start relative z-10">
              <a 
                href="https://wa.me/923424960779" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-2 md:space-x-3 px-5 md:px-6 py-2.5 md:py-3 bg-royal text-white rounded-full text-xs md:text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                <span>Let's Talk on WhatsApp</span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={14} weight="bold" />
                </div>
              </a>
            </div>
          </motion.div>

                              {/* Box 2: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="lg:col-span-1 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative min-h-[300px] lg:min-h-full shadow-lg border border-gray-100 group"
          >
            {/* Image ko background ke tor par lagaya hai taake yeh poore box ko 100% fill kare */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop')" }}
            ></div>
            
            {/* Dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-[#0A1128]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Box 3 & 4: Stats (Smaller paddings on mobile) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-start shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-royal"><Briefcase size={20} className="md:w-6 md:h-6" weight="duotone" /></div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128]">2+</h3>
            </div>
            <div>
              <p className="text-sm text-[#0A1128] font-bold mb-1">Years of Experience</p>
              <p className="text-xs text-gray-500 leading-relaxed">Building web applications and continuously learning modern tech stacks.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-start shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-royal"><FolderOpen size={20} className="md:w-6 md:h-6" weight="duotone" /></div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128]">10+</h3>
            </div>
            <div>
              <p className="text-sm text-[#0A1128] font-bold mb-1">Projects Completed</p>
              <p className="text-xs text-gray-500 leading-relaxed">Successfully delivered e-commerce platforms, dashboards, and interactive sites.</p>
            </div>
          </motion.div>

          {/* Box 5: Freelance (p-6 on mobile) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-[#0A1128] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-xl border border-white/10">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3 md:mb-4">
                  <CheckCircle size={18} weight="fill" className="text-green-400" />
                  <span className="text-gray-300 text-[10px] md:text-xs font-medium tracking-widest uppercase">Available for</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">Freelance</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5 md:mb-6">Let's build something amazing together. I'm currently accepting new projects.</p>
              </div>
              <a href="#contact" className="inline-flex items-center space-x-2 px-4 py-2 md:px-5 md:py-2.5 bg-royal hover:bg-blue-600 rounded-lg md:rounded-xl text-white text-xs font-semibold transition-all w-max">
                <span>Start a Project</span>
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;