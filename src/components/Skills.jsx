import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTailwindcss, SiTypescript, SiInertia, SiLaravel, SiPhp, SiMysql, SiShopify, SiGit, SiVercel } from 'react-icons/si';
import { FaDatabase, FaServer } from 'react-icons/fa6';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Inertia.js', icon: <SiInertia />, color: '#9553E9' },
    { name: 'Shopify', icon: <SiShopify />, color: '#7AB55C' },
    { name: 'REST APIs', icon: <FaDatabase />, color: '#FF6C37' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'Railway', icon: <FaServer />, color: '#4B5563' },
  ];

  const experience = [
    { year: '2024 - Present', title: 'Full-Stack Developer (Freelance)', description: 'Building scalable web applications and e-commerce platforms using React, Laravel, and MySQL for clients worldwide.' },
    { year: '2023 - 2024', title: 'Frontend Developer Intern', description: 'Creative Agency. Worked on responsive UI/UX designs and collaborated with backend teams to deliver high-quality websites.' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#f8fafc] text-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32">
          
          {/* Skills */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-[#2563EB]"></div>
              <span className="text-[#2563EB] font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">My Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-6 md:mb-8">Technologies I <br className="hidden md:block"/> work with</h2>
            
            {/* Grid: 2 cols on mobile, 3 on sm, 4 on md */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>{skill.icon}</div>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-600 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-500 text-xs md:text-sm mt-5 md:mt-6 italic">From pixel-perfect UIs to robust backend architectures.</p>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center mt-8 lg:mt-0">
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <div className="h-[1px] w-8 md:w-12 bg-[#2563EB]"></div>
              <span className="text-[#2563EB] font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0f172a] mb-8 md:mb-10">My Journey <br className="hidden md:block"/> So Far</h2>

            <div className="relative border-l-2 border-[#2563EB]/20 ml-2 md:ml-3 space-y-8 md:space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 md:pl-10">
                  <div className="absolute -left-[7px] md:-left-[9px] top-1 md:top-1.5 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#2563EB] border-2 md:border-4 border-[#f8fafc]"></div>
                  <span className="inline-block px-2.5 py-1 md:px-3 md:py-1 bg-[#2563EB]/10 text-[#2563EB] text-[10px] md:text-xs font-bold rounded-full mb-2 md:mb-3">{exp.year}</span>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#0f172a] mb-1 md:mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;