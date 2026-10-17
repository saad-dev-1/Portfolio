import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { projects } from '../data/projects';
import { SiReact, SiLaravel, SiTailwindcss, SiMysql, SiInertia, SiTypescript, SiShopify, SiJavascript, SiPhp } from 'react-icons/si';
import { FaDatabase, FaFilePdf, FaCode, FaRobot, FaCss3Alt } from 'react-icons/fa6';

const getTechIcon = (tech) => {
  switch (tech) {
    case 'React': return <SiReact className="text-[#61DAFB]" />;
    case 'Laravel': return <SiLaravel className="text-[#FF2D20]" />;
    case 'PHP': return <SiPhp className="text-[#777BB4]" />;
    case 'MySQL': return <SiMysql className="text-[#4479A1]" />;
    case 'Tailwind CSS': return <SiTailwindcss className="text-[#06B6D4]" />;
    case 'Sanctum': return <SiLaravel className="text-[#FF2D20]" />;
    case 'Inertia.js': return <SiInertia className="text-[#9553E9]" />;
    case 'TypeScript': return <SiTypescript className="text-[#3178C6]" />;
    case 'Gemini AI': return <FaRobot className="text-[#4285F4]" />;
    case 'Shopify': return <SiShopify className="text-[#7AB55C]" />;
    case 'Liquid': return <SiShopify className="text-[#7AB55C]" />;
    case 'Vanilla JS': return <SiJavascript className="text-[#F7DF1E]" />;
    case 'Custom CSS': return <FaCss3Alt className="text-[#1572B6]" />;
    case 'REST API': return <FaDatabase className="text-[#FF6C37]" />;
    case 'DomPDF': return <FaFilePdf className="text-[#FF0000]" />;
    default: return <FaCode className="text-gray-400" />;
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-royal"></div>
              <span className="text-royal font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">Selected Projects</h2>
          </motion.div>
          
          <motion.a href="https://github.com/saad-dev-1" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-royal transition-colors font-medium text-sm md:text-base group">
            <span>View All Projects</span>
            <ArrowUpRight weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} onClick={() => setSelectedProject(project)} className="group relative bg-[#0d1530] rounded-[1.5rem] md:rounded-3xl overflow-hidden border border-gray-800 hover:border-royal/50 transition-all duration-500 cursor-pointer">
              
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1530] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={20} weight="bold" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-[10px] md:text-xs text-royal font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1 md:mt-2 mb-2 md:mb-3">{project.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="flex items-center space-x-1.5 px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-royal/50 transition-colors">
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-navy/80 backdrop-blur-lg" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-[#0d1530] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[1.5rem] md:rounded-3xl border border-gray-700 shadow-2xl relative">
              
              <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-royal transition-colors">
                <X size={16} weight="bold" className="md:w-5 md:h-5" />
              </button>

              <div className="relative h-56 md:h-80 w-full overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1530] to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8">
                  <span className="text-[10px] md:text-xs text-royal font-semibold uppercase tracking-wider">{selectedProject.category}</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-5 md:p-10 space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['problem', 'solution', 'result'].map((key) => (
                    <div key={key} className="space-y-2">
                      <h4 className={`${key === 'result' ? 'text-green-400' : 'text-royal'} font-semibold text-xs md:text-sm uppercase tracking-wider flex items-center space-x-2`}>
                        <span className={`w-4 md:w-6 h-[1px] ${key === 'result' ? 'bg-green-400' : 'bg-royal'}`}></span>
                        <span>The {key}</span>
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{selectedProject[key]}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4 flex items-center space-x-2">
                    <CheckCircle size={18} weight="fill" className="text-royal" />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="flex items-center space-x-1.5 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-royal/10 text-white rounded-full border border-royal/20">
                        <span className="text-sm md:text-lg">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 border-t border-gray-800">
                  {selectedProject.liveLink !== "#" && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-5 py-2.5 md:px-6 md:py-3 bg-royal text-white rounded-full text-sm md:text-base font-medium hover:bg-blue-600 transition-colors">
                      <span>View Live Site</span>
                      <ArrowUpRight weight="bold" />
                    </a>
                  )}
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-5 py-2.5 md:px-6 md:py-3 border border-gray-600 text-gray-300 rounded-full text-sm md:text-base font-medium hover:border-royal hover:text-royal transition-colors">
                    <span>View Code</span>
                    <ArrowRight weight="bold" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;