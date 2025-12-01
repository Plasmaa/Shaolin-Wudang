import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Branches from './components/Branches';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-shaolin-black font-sans text-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <Programs />
        <Branches />
      </main>
      <Footer />
    </div>
  );
}

export default App;
