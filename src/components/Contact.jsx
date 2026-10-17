import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneRight, EnvelopeSimple, Phone, MapPin, CheckCircle, WarningCircle } from '@phosphor-icons/react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("https://formspree.io/f/mqpenpjk", {
        method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(formState)
      });
      if (response.ok) {
        setStatus('success'); setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); 
      } else { setStatus('error'); setTimeout(() => setStatus('idle'), 5000); }
    } catch (error) {
      console.error(error); setStatus('error'); setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24">
          
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <div className="h-[2px] w-8 md:w-12 bg-royal"></div>
              <span className="text-royal font-sans text-xs md:text-sm tracking-widest uppercase font-bold">Get in touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1128] mb-4 md:mb-6">Let's discuss your <br /><span className="italic text-royal">next project.</span></h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md">Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.</p>

            <div className="space-y-4 md:space-y-6">
              {[{ icon: <EnvelopeSimple size={20} />, label: "Email", value: "sa1717595@gmail.com", href: "mailto:sa1717595@gmail.com" }, { icon: <Phone size={20} />, label: "WhatsApp / Phone", value: "+92 342 4960779", href: "https://wa.me/923424960779" }, { icon: <MapPin size={20} />, label: "Location", value: "Jauharabad, Pakistan" }].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm border border-gray-200 rounded-full flex items-center justify-center text-royal">{item.icon}</div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">{item.label}</p>
                    {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="text-sm md:text-base text-[#0A1128] font-semibold hover:text-royal transition-colors">{item.value}</a> : <p className="text-sm md:text-base text-[#0A1128] font-semibold">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2 block">Your Name</label>
                  <input type="text" name="name" required value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm text-[#0A1128] focus:outline-none focus:border-royal focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2 block">Your Email</label>
                  <input type="email" name="email" required value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm text-[#0A1128] focus:outline-none focus:border-royal focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2 block">Your Message</label>
                <textarea name="message" required rows="4" value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm text-[#0A1128] focus:outline-none focus:border-royal focus:bg-white transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting' || status === 'success'} className={`w-full flex items-center justify-center space-x-2 rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-semibold transition-all shadow-md group ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : 'bg-royal text-white hover:bg-blue-600'}`}>
                {status === 'idle' && <><span>Send Message</span><PaperPlaneRight size={18} weight="fill" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                {status === 'submitting' && <span>Sending Message...</span>}
                {status === 'success' && <><CheckCircle size={18} weight="bold" /><span>Message Sent Successfully!</span></>}
                {status === 'error' && <><WarningCircle size={18} weight="bold" /><span>Something went wrong. Try again.</span></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;