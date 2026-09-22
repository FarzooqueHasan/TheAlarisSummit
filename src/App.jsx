import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Committees from './components/Committees.jsx';
import Schedule from './components/Schedule.jsx';
import Awards from './components/Awards.jsx';
import Registration from './components/Registration.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#register-page') {
        setCurrentPage('register');
      } else if (window.location.hash && window.location.hash !== '#register-page') {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToRegister = () => {
    setCurrentPage('register');
    window.location.hash = 'register-page';
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    if (window.location.hash === '#register-page') {
      history.pushState(null, '', ' ');
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Navbar 
        onOpenRegister={navigateToRegister}
        onNavigateHome={navigateToHome}
        currentPage={currentPage}
      />

      {currentPage === 'register' ? (
        <main id="register-content">
          <RegisterPage onBack={navigateToHome} />
        </main>
      ) : (
        <>
          {/* Hero Section with Cloud Unreveal & Reference Reproduction */}
          <Hero onOpenRegister={navigateToRegister} />

          {/* Main Page Content */}
          <main id="main-content">
            <About />
            <Committees />
            <Schedule />
            <Awards />
            <Registration onOpenRegister={navigateToRegister} />
            <FAQ />
          </main>
        </>
      )}

      {/* Diplomatic Footer */}
      <Footer onOpenRegister={navigateToRegister} />
    </div>
  );
}
