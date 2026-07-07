import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <About setActiveTab={setActiveTab} />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <ProjectsPortfolio />;
      case 'publications':
        return <Publications />;
      case 'contact':
        return <Contact />;
      default:
        return <About setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-wrapper" style={{ paddingBottom: '4rem' }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-layout">
        {renderContent()}
      </main>
      <footer className="marquee-footer">
        <div className="marquee-content">
          Are you looking to understand what happened, how it happened, what is happening, and what will happen - using data? WELCOME HOME
        </div>
      </footer>
    </div>
  );
}

export default App;
