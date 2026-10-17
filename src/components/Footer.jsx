import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a1c] text-white border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        
        {/* Brand */}
        <div>
          <a href="#home" className="text-2xl md:text-3xl font-serif font-bold">SA<span className="text-royal">.</span></a>
          <p className="text-gray-400 text-xs md:text-sm mt-3 md:mt-4 leading-relaxed max-w-xs">Full-Stack Web Developer building scalable, end-to-end digital solutions with React and Laravel.</p>
        </div>

        {/* Links */}
        <div className="md:mx-auto">
          <h4 className="text-white font-semibold mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-royal transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="md:ml-auto">
          <h4 className="text-white font-semibold mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wider">Let's Connect</h4>
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {[{ icon: <FaGithub size={18} />, href: "https://github.com/saad-dev-1", color: "hover:text-white" }, { icon: <FaLinkedinIn size={16} />, href: "YOUR_LINKEDIN_URL", color: "hover:text-[#0A66C2]" }, { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/saadahm__x", color: "hover:text-[#E1306C]" }, { icon: <FaFacebookF size={16} />, href: "https://www.facebook.com/share/1EHYdxkVJC/", color: "hover:text-[#1877F2]" }, { icon: <FaEnvelope size={16} />, href: "mailto:sa1717595@gmail.com", color: "hover:text-royal" }].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer" className={`w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:border-current hover:bg-white/10 transition-all duration-300 hover:-translate-y-1`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-4 md:py-6 flex justify-center items-center">
          <p className="text-gray-500 text-[10px] md:text-sm text-center">© {currentYear} Saad Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;