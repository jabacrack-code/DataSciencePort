import React from 'react';
import { Database, TrendingUp, Cpu, Network } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Predictive Analytics",
      description: "Forecast market trends, customer behavior, and operational bottlenecks with high-accuracy predictive models.",
      icon: <TrendingUp size={40} color="var(--accent-primary)" />
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom end-to-end ML pipelines from data ingestion to model deployment and monitoring.",
      icon: <Cpu size={40} color="var(--accent-secondary)" />
    },
    {
      title: "Data Engineering",
      description: "Robust data architectures, ETL processes, and data warehousing to ensure data reliability and scale.",
      icon: <Database size={40} color="var(--accent-primary)" />
    },
    {
      title: "Network & Graph Analysis",
      description: "Uncover complex relationships in your data to detect fraud, optimize logistics, or enhance recommendations.",
      icon: <Network size={40} color="var(--accent-secondary)" />
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Consulting Expertise</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card animate-fade-in" style={{ animationDelay: `${0.1 * idx}s`, display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                {service.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
