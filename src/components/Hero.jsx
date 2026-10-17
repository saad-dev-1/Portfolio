import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      // Section: Mobile par flex-col, aur pt-20 diya taake navbar se na takraye.
      className="relative h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden w-full pt-20 lg:pt-24 pb-0 lg:pb-16"
    >
      {/* ================= MOBILE BACKGROUND IMAGE ================= */}
                 {/* ================= MOBILE BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img 
          src="/Hero.jpeg" 
          alt="Saad Ahmad" 
          className="w-full h-full object-cover object-[50%_25%]" 
        />
        
        {/* 1. Base dark gradient (Overall readability ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-transparent"></div>
        
        {/* 2. Smooth bottom fade (Taake photo ka end line mix ho jaye) */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0A1128] via-[#0A1128]/90 to-transparent"></div>
      </div>

      {/* ================= DESKTOP BACKGROUND GLOWS ================= */}
      <div className="hidden lg:block absolute top-1/4 left-0 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[150px] z-0 pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 w-full relative z-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32 lg:items-center">

        {/* ================= MOBILE CONTENT (Locked to Bottom) ================= */}
        {/* mt-auto lagaya hai taake content bottom par lock ho jaye */}
        <div className="flex flex-col items-center text-center w-full lg:hidden pb-8">
          
          {/* Name */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col items-center mb-3"
          >
            <div className="flex items-center space-x-2 mb-1">
              <div className="h-[1px] w-4 bg-royal"></div>
              <span className="text-royal font-sans text-[10px] tracking-[0.2em] uppercase font-bold">Hello, I'm</span>
              <div className="h-[1px] w-4 bg-royal"></div>
            </div>
            <h1 className="text-[3.2rem] md:text-6xl leading-[1.05] font-serif font-bold text-white drop-shadow-2xl whitespace-nowrap">
              Saad <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-royal bg-[length:200%_auto] animate-gradient">
                Ahmad
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="mb-5"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
              <h2 className="text-[11px] text-white font-sans font-medium tracking-wide">
                Full-Stack Developer <span className="text-royal mx-1.5">•</span> React & Laravel
              </h2>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="flex flex-row items-center justify-center gap-3 w-full mb-6"
          >
            <a 
              href="#projects" 
              className="flex-1 justify-center flex items-center space-x-2 px-4 py-3 bg-royal text-white rounded-full text-[13px] font-semibold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <span>View Work</span>
              <ArrowRight weight="bold" size={16} />
            </a>
            <a 
              href="/Saad_Ahmad_CV.pdf" 
              download 
              className="flex-1 justify-center flex items-center space-x-2 px-4 py-3 border border-white/20 text-white rounded-full text-[13px] font-semibold hover:border-royal hover:text-royal transition-all bg-white/5 backdrop-blur-md"
            >
              <span>Download CV</span>
              <DownloadSimple weight="bold" size={16} />
            </a>
          </motion.div>

          {/* Social Icons (Sabse Neeche Page End) */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex items-center justify-center space-x-8 w-full pt-2 border-t border-white/10"
          >
            <a href="https://github.com/saad-dev-1" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all"><FaGithub size={20} /></a>
            <a href="https://www.instagram.com/saadahm__x" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#E1306C] transition-all"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/share/1EHYdxkVJC/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#1877F2] transition-all"><FaFacebookF size={20} /></a>
            <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#0A66C2] transition-all"><FaLinkedinIn size={20} /></a>
          </motion.div>
        </div>

        {/* ================= DESKTOP CONTENT ================= */}
        <div className="hidden lg:flex flex-col items-start space-y-6 xl:space-y-8">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-royal"></div>
            <span className="text-royal font-sans text-sm tracking-[0.2em] uppercase font-bold">Hello, I'm</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.05] whitespace-nowrap">
            Saad <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal via-blue-300 to-royal bg-[length:200%_auto] animate-gradient">Ahmad</span>
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl text-gray-200 font-sans font-light tracking-wide">
            Full-Stack Web Developer <span className="text-gray-500 mx-2">|</span> React & Laravel
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-400 font-sans max-w-md leading-relaxed text-base">
            I build web apps that solve real problems. From designing clean React interfaces to writing solid Laravel backends, I handle the whole stack so you don't have to.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-row items-center gap-4 pt-2">
            <a href="#projects" className="justify-center flex items-center space-x-2 px-6 py-3 bg-royal text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <span>View My Work</span>
              <ArrowRight weight="bold" size={18} />
            </a>
            <a href="/Saad_Ahmad_CV.pdf" download className="justify-center flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full font-medium hover:border-royal hover:text-royal transition-all">
              <span>Download CV</span>
              <DownloadSimple weight="bold" size={18} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center space-x-6 pt-8 border-t border-gray-800/50 mt-4 w-full justify-start">
            <span className="text-sm text-gray-500 font-sans tracking-widest uppercase">Follow me</span>
            <a href="https://github.com/saad-dev-1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all"><FaGithub size={20} /></a>
            <a href="https://www.instagram.com/saadahm__x" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-all"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/share/1EHYdxkVJC/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all"><FaFacebookF size={20} /></a>
            <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-all"><FaLinkedinIn size={20} /></a>
          </motion.div>
        </div>

                {/* ================= DESKTOP IMAGE ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="hidden lg:flex relative justify-center items-center w-full h-full" 
          style={{ perspective: 1200 }}
        >
          <motion.div 
            style={{ rotateX, rotateY, x: imageX, y: imageY, transformStyle: 'preserve-3d' }} 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }} 
            className="relative w-full max-w-[380px] lg:max-w-[340px] xl:max-w-[420px] aspect-[4/5] group"
          >
            {/* Peeche ka Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-royal/30 to-blue-400/10 rounded-[2.5rem] blur-2xl scale-105 -z-10 transition-all duration-700 group-hover:scale-110"></div>

            {/* Foolproof Image Box using Background Image */}
            <div 
              className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-10 bg-[#0d1530] bg-cover bg-[center_25%] transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/Hero.jpeg')" }}
            >
              {/* Inner Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-[5px] border-white/5 pointer-events-none"></div>
            </div>

            {/* Available for Work Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }} 
              className="absolute bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-2xl z-20 flex items-center space-x-3 pointer-events-none" 
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold whitespace-nowrap">Available for work</p>
                <p className="text-gray-300 text-[10px]">Open to projects</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;