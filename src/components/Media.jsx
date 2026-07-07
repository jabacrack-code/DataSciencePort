import React from 'react';
import { PlayCircle } from 'lucide-react';

const Media = () => {
  const videos = [
    {
      title: "Demystifying Transformers in NLP",
      duration: "14:20",
      thumbnail: "linear-gradient(135deg, #1f2024 0%, #141518 100%)" // Placeholder for an actual image
    },
    {
      title: "Graph Neural Networks for Fraud Detection",
      duration: "22:15",
      thumbnail: "linear-gradient(135deg, #1f2024 0%, #141518 100%)"
    }
  ];

  return (
    <section id="media" className="section container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-lg)' }}>
        <div>
          <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Insights & Explanations</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '500px' }}>
            Breaking down complex machine learning concepts into digestible, actionable insights.
          </p>
        </div>
        <a href="#" className="btn btn-outline" style={{ display: 'none' }}>View YouTube Channel</a>
        <a href="#" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1rem' }}>
          View Channel
        </a>
      </div>
      
      <div className="grid grid-cols-2">
        {videos.map((video, idx) => (
          <div key={idx} className="glass-card animate-fade-in" style={{ padding: 0, overflow: 'hidden', animationDelay: `${0.2 * idx}s`, cursor: 'pointer' }}>
            <div style={{ background: video.thumbnail, height: '250px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', transition: 'background 0.3s' }}></div>
              <PlayCircle size={64} color="rgba(255,255,255,0.8)" style={{ position: 'relative', zIndex: 1, transition: 'transform 0.3s' }} className="play-icon" />
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#fff', fontWeight: 500 }}>
                {video.duration}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .glass-card:hover .play-icon {
          transform: scale(1.1);
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Media;
