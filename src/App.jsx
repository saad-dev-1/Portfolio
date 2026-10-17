import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton'; 

function App() {
  return (
    <div className="bg-navy min-h-screen text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process /> 
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton /> 
    </div>
  );
}

export default App;