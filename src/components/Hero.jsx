import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(80px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', opacity: 0.15, filter: 'blur(80px)', zIndex: 0 }}></div>

      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: 'var(--space-md)', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
          <BarChart2 size={16} />
          <span>Premium Data Science Consultancy</span>
        </div>
        
        <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--space-sm)', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Turning Complex Data Into <br /> Strategic Advantage
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
          We partner with forward-thinking organizations to build scalable machine learning models, uncover hidden patterns, and drive data-informed decision making.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contact" className="btn btn-primary">
            Schedule a Consultation <ArrowRight size={18} />
          </a>
          <a href="#projects" className="btn btn-outline">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
