import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Download from '../components/Download';
import UseCases from '../components/UseCases';
import Features from '../components/Features';
import Community from '../components/Community';
import Support from '../components/Support';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onWatchDemo={() => setIsVideoModalOpen(true)} />
        <Download />
        <UseCases />
        <Features />
        <Community />
        <Support onContactClick={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />
      
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
