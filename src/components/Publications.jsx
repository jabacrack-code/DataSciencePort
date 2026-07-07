import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: "Vision 2030 Medium Term Plans: A Performance Tracking Report",
      journal: "Department of Central Planning, Public Service and Human Capital",
      year: "2026",
      authors: "Maina, K. W.",
      link: "#"
    },
    {
      title: "Data Quality Auditing Methodologies for Survey-Generated Datasets",
      journal: "Academic Researcher Publications & Lab Reports",
      year: "2025",
      authors: "Maina, K. W.",
      link: "#"
    },
    {
      title: "Database Security & Backup Implementations for Digital CMS Platforms",
      journal: "Commonwealth Youth Council Systems Audit",
      year: "2025",
      authors: "Maina, K. W.",
      link: "#"
    }
  ];

  return (
    <div className="content-section" id="publications">
      <h2 className="section-title">Academic Reports & Research</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {publications.map((pub, idx) => (
          <div key={idx} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--text-secondary)' }}>
            <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.25rem 0' }}>{pub.title}</h3>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {pub.authors} — <span style={{ fontStyle: 'italic' }}>{pub.journal} ({pub.year})</span>
            </div>
            <a href={pub.link} style={{ fontSize: '0.9rem', color: 'var(--button-dark)', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block' }}>
              View Report Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
