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
      className="relative h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden w-full pt-20 lg:pt-24 pb-10 lg:pb-16"
    >
      {/* ================= MOBILE BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 md:hidden z-0 h-[100dvh]">
        <img 
          src="/Hero.jpeg" 
          alt="Saad Ahmad" 
          className="w-full h-full object-cover object-[50%_25%] [@media(min-height:740px)]:scale-110"
          
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[95%] [@media(max-height:700px)]:h-[63%] bg-gradient-to-t from-[#0A1128] via-[#0A1128]/90 to-transparent"></div>
      </div>

      {/* ================= DESKTOP BACKGROUND GLOWS ================= */}
      <div className="hidden md:block absolute top-1/4 left-0 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[150px] z-0 pointer-events-none"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 w-full relative z-10 flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:gap-16 xl:gap-32 md:items-center">

        {/* ================= SHORT MOBILE CONTENT (iPhones) ================= */}
        <div className="short-mobile-only flex-col items-center text-center w-full lg:hidden mt-auto pb-2 relative z-10 px-4">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-royal/20 blur-[80px] -z-10 rounded-full pointer-events-none"></div>

          {/* Name */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col items-center mb-3"
          >
            <div className="flex items-center space-x-2 mb-1">
              <div className="h-[1px] w-6 bg-royal"></div>
              <span className="text-royal font-sans text-[10px] tracking-[0.2em] uppercase font-bold">Hello, I'm</span>
              <div className="h-[1px] w-6 bg-royal"></div>
            </div>
            <h1 className="text-[3rem] leading-[1.0] font-serif font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Saad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-royal bg-[length:200%_auto] animate-gradient drop-shadow-sm">Ahmad</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="mb-4 w-full flex justify-center"
          >
            <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse shrink-0"></span>
              <h2 className="text-[11px] text-gray-100 font-sans font-medium tracking-wide whitespace-nowrap">
                Full-Stack Developer <span className="text-royal mx-1">•</span> React & Laravel
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="text-gray-300 font-sans max-w-[280px] leading-snug text-[12px] mb-5 drop-shadow-md [@media(max-height:700px)]:hidden"
          >
            I build web apps that solve real problems. From designing clean React interfaces to writing solid Laravel backends, I handle the whole stack so you don't have to.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-row items-center justify-center gap-3 w-full mb-5"
          >
            <a 
              href="#projects" 
              className="flex-1 justify-center flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-royal to-blue-600 text-white rounded-xl text-[12px] font-semibold hover:scale-105 transition-all shadow-[0_8px_20px_rgba(37,99,235,0.4)]"
            >
              <span>View Work</span>
              <ArrowRight weight="bold" size={14} />
            </a>
            <a 
              href="/Saad_Ahmad_CV.pdf" 
              download 
              className="flex-1 justify-center flex items-center space-x-2 px-4 py-2.5 border border-white/20 text-white rounded-xl text-[12px] font-semibold hover:bg-white/10 transition-all bg-white/5 backdrop-blur-md"
            >
              <span>Download CV</span>
              <DownloadSimple weight="bold" size={14} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }} 
            className="flex items-center justify-center space-x-8 w-full py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <a href="https://github.com/saad-dev-1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"><FaGithub size={18} /></a>
            <a href="https://www.instagram.com/saadahm__x" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-300"><FaInstagram size={18} /></a>
            <a href="https://www.facebook.com/share/1EHYdxkVJC/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-300"><FaFacebookF size={18} /></a>
            <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300"><FaLinkedinIn size={18} /></a>
          </motion.div>
        </div>

        {/* ================= TALL MOBILE CONTENT (Androids - Full Details) ================= */}
        <div className="tall-mobile-only flex-col items-center text-center w-full lg:hidden mt-auto pb-24 relative z-10 px-4">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-royal/20 blur-[80px] -z-10 rounded-full pointer-events-none"></div>

          {/* Name */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col items-center mb-4"
          >
            <div className="flex items-center space-x-2 mb-1">
              <div className="h-[1px] w-6 bg-royal"></div>
              <span className="text-royal font-sans text-[10px] tracking-[0.2em] uppercase font-bold">Hello, I'm</span>
              <div className="h-[1px] w-6 bg-royal"></div>
            </div>
            <h1 className="text-[3.2rem] leading-[1.0] font-serif font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Saad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-royal bg-[length:200%_auto] animate-gradient drop-shadow-sm">Ahmad</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="mb-5 w-full flex justify-center"
          >
            <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse shrink-0"></span>
              <h2 className="text-[11px] text-gray-100 font-sans font-medium tracking-wide whitespace-nowrap">
                Full-Stack Developer <span className="text-royal mx-1.5">•</span> React & Laravel
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="text-gray-300 font-sans max-w-[300px] leading-relaxed text-[14px] mb-6 drop-shadow-md"
          >
            I build web apps that solve real problems. From designing clean React interfaces to writing solid Laravel backends, I handle the whole stack so you don't have to.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex flex-row items-center justify-center gap-3 w-full mb-8"
          >
            <a 
              href="#projects" 
              className="flex-1 justify-center flex items-center space-x-2 px-8 py-6.5 bg-gradient-to-r from-royal to-blue-600 text-white rounded-xl text-[14px] font-bold hover:scale-105 transition-all shadow-[0_8px_20px_rgba(37,99,235,0.4)]"
            >
              <span>View Work</span>
              <ArrowRight weight="bold" size={16} />
            </a>
            <a 
              href="/Saad_Ahmad_CV.pdf" 
              download 
              className="flex-1 justify-center flex items-center space-x-2 px-8 py-6.5 border border-white/20 text-white rounded-xl text-[14px] font-bold hover:bg-white/10 transition-all bg-white/5 backdrop-blur-md"
            >
              <span>Download CV</span>
              <DownloadSimple weight="bold" size={16} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }} 
            className="flex items-center justify-center space-x-8 w-full py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <a href="https://github.com/saad-dev-1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"><FaGithub size={20} /></a>
            <a href="https://www.instagram.com/saadahm__x" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-300"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com/share/1EHYdxkVJC/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-300"><FaFacebookF size={20} /></a>
            <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300"><FaLinkedinIn size={20} /></a>
          </motion.div>
        </div>

        {/* ================= DESKTOP CONTENT ================= */}
        <div className="hidden md:flex flex-col items-start justify-center md:space-y-3 lg:space-y-4 xl:space-y-6 lg:pt-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-royal"></div>
            <span className="text-royal font-sans text-sm tracking-[0.2em] uppercase font-bold">Hello, I'm</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-5xl lg:text-[5rem] xl:text-[6.5rem] font-serif font-bold text-white leading-[1.05] whitespace-nowrap">
            Saad <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal via-blue-300 to-royal bg-[length:200%_auto] animate-gradient">Ahmad</span>
          </motion.h1>
          
          {/* Subtitle Fixed for 768px */}
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-[13px] lg:text-2xl text-gray-200 font-sans font-light tracking-wide md:whitespace-nowrap">
            Full-Stack Web Developer <span className="text-gray-500 mx-2">|</span> React & Laravel
          </motion.h2>

          {/* Paragraph Fixed for 768px */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-300 font-sans max-w-[260px] md:max-w-[280px] lg:max-w-lg xl:max-w-xl leading-relaxed text-[12px] md:text-[13px] lg:text-[15px] xl:text-base">
            I build web apps that solve real problems. From designing clean React interfaces to writing solid Laravel backends, I handle the whole stack so you don't have to.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-row items-center gap-4 pt-2">
            
            {/* View My Work Button Fixed for 768px */}
            <a href="#projects" className="justify-center flex items-center space-x-2 md:px-3 lg:px-8 py-3 md:py-2 lg:py-4 bg-royal text-white rounded-full md:text-[11px] lg:text-base font-medium hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] whitespace-nowrap">
              <span>View My Work</span><ArrowRight weight="bold" size={18} />
            </a>
            
            {/* Download CV Button Fixed for 768px */}
            <a href="/Saad_Ahmad_CV.pdf" download className="justify-center flex items-center space-x-2 md:px-3 lg:px-8 py-3 md:py-2 lg:py-4 border border-gray-600 text-gray-300 rounded-full md:text-[11px] lg:text-base font-medium hover:border-royal hover:text-royal transition-all whitespace-nowrap">
              <span>Download CV</span><DownloadSimple weight="bold" size={18} />
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
          className="hidden md:flex relative justify-center items-center w-full shrink-0" 
          style={{ perspective: 1200 }}
        >
          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center items-center w-full"
          >
            <motion.div 
              style={{ rotateX, rotateY, x: imageX, y: imageY, transformStyle: 'preserve-3d' }} 
              whileHover={{ scale: 1.03 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }} 
              className="relative w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px] aspect-[4/5] group"
            >
              
              {/* 1. Deep Ambient Glow (Peeche ka noor) */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-royal/40 via-blue-600/20 to-cyan-400/20 rounded-[4rem] blur-[50px] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 -z-20"></div>

              {/* 2. Premium Metallic Frame */}
              <div className="w-full h-full rounded-[2.5rem] p-[4px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative z-10">
                
                {/* Image Container */}
                <div 
                  className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#0d1530] bg-cover bg-[center_25%] relative"
                  style={{ backgroundImage: "url('/Hero.jpeg')" }}
                >
                  
                  {/* Tech Grid Overlay (Halki lines) */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                  {/* Cinematic Glass Shine (Hover par chamak) */}
                  <div className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none z-10"></div>

                  {/* Vignette Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(10,17,40,0.8)_100%)] pointer-events-none"></div>
                </div>
              </div>

              {/* 3. Premium HUD "Available" Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.6 }} 
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0A1128]/90 backdrop-blur-xl border border-green-500/40 rounded-full px-5 py-2 shadow-[0_0_30px_rgba(34,197,94,0.2)] z-30 flex items-center space-x-3 pointer-events-none group-hover:-translate-y-1 group-hover:border-green-400 transition-all duration-500 whitespace-nowrap" 
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                </div>
                <p className="text-white text-[11px] font-bold tracking-widest uppercase">Available for work</p>
              </motion.div>

            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;