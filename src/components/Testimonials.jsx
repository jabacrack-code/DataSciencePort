import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Their ability to translate complex machine learning concepts into actionable business strategy is unparalleled. They didn't just build a model; they transformed how we operate.",
      author: "Sarah Jenkins",
      role: "VP of Engineering, FinTrust",
      company: "FinTrust"
    },
    {
      text: "We hired them to optimize our logistics network. Within three months, their graph analytics solution saved us millions in operational costs. An absolute game-changer.",
      author: "Michael Chen",
      role: "COO, GlobalShip",
      company: "GlobalShip"
    }
  ];

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      
      <div className="container">
        <h2 className="section-title">Client Endorsements</h2>
        
        <div className="grid grid-cols-2">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card animate-fade-in" style={{ animationDelay: `${0.2 * idx}s`, padding: '2.5rem', position: 'relative' }}>
              <Quote size={48} color="var(--border-color)" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', opacity: 0.2 }} />
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '2rem', position: 'relative', zIndex: 1, lineHeight: 1.8 }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--border-color) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{review.author}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
