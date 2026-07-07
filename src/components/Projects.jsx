import React from 'react';
import { GitBranch, Star, AlertCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DataSciencePort",
      description: "A personal data science portfolio repository showcasing end-to-end analytical projects — from data collection and cleaning to statistical modelling, machine learning, and dashboard development.",
      updated: "2025",
      githubUrl: "https://github.com/jabacrack-code/DataSciencePort",
      tags: [
        { name: "Python", color: "var(--tag-model)" },
        { name: "Machine Learning", color: "var(--tag-cv)" },
        { name: "Power BI", color: "var(--tag-audio)" },
        { name: "Data Analysis", color: "var(--tag-dataset)" },
      ],
      forks: 0,
      issues: 0,
      stars: 0
    },
    {
      title: "Yoga-Pose-Classification",
      description: "Yoga Pose classification with Dagshub streaming.",
      updated: "9 months ago",
      githubUrl: null,
      tags: [
        { name: "dataset", color: "var(--tag-dataset)" },
        { name: "model", color: "var(--tag-model)" },
        { name: "computer vision", color: "var(--tag-cv)" },
        { name: "image classification", color: "var(--tag-vision)" },
      ],
      forks: 2,
      issues: 0,
      stars: 3
    },
    {
      title: "SavtaDepth",
      description: "Open Source Data Science (OSDS) Monocular Depth Estimation - Turn 2d photos into 3d photos...",
      updated: "10 months ago",
      githubUrl: null,
      tags: [
        { name: "dataset", color: "var(--tag-dataset)" },
        { name: "model", color: "var(--tag-model)" },
        { name: "computer vision", color: "var(--tag-cv)" },
        { name: "pytorch", color: "var(--tag-pytorch)" },
      ],
      forks: 0,
      issues: 0,
      stars: 0
    },
    {
      title: "Urdu-ASR-SOTA",
      description: "Automatic Speech Recognition using Facebook wav2vec2-xls-r-300m model and mozilla-foundation...",
      updated: "10 months ago",
      githubUrl: null,
      tags: [
        { name: "dataset", color: "var(--tag-dataset)" },
        { name: "model", color: "var(--tag-model)" },
        { name: "audio", color: "var(--tag-audio)" },
        { name: "pytorch", color: "var(--tag-pytorch)" },
      ],
      forks: 1,
      issues: 0,
      stars: 1
    },
    {
      title: "CHiME-Home",
      description: "The CHiME-Home dataset is a collection of annotated domestic environment audio recordings.",
      updated: "1 year ago",
      githubUrl: null,
      tags: [
        { name: "dataset", color: "var(--tag-dataset)" },
        { name: "audio", color: "var(--tag-audio)" },
        { name: "dvc", color: "var(--tag-dvc)" },
        { name: "git", color: "var(--tag-git)" },
      ],
      forks: 0,
      issues: 0,
      stars: 0
    }
  ];

  return (
    <div className="section" id="projects">
      <h2 className="section-title">Repositories</h2>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3 className="project-title">
              <span style={{ fontSize: '1.2rem' }}>📦</span>{' '}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                >
                  {project.title}
                </a>
              ) : project.title}
            </h3>
            <div className="project-date">Updated {project.updated}</div>
            <p className="project-desc">{project.description}</p>
            
            <div className="tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag" style={{ backgroundColor: tag.color }}>
                  {tag.name}
                </span>
              ))}
            </div>
            
            <div className="project-stats">
              <div className="stat">
                <GitBranch size={14} /> {project.forks}
              </div>
              <div className="stat">
                <AlertCircle size={14} /> {project.issues}
              </div>
              <div className="stat">
                <Star size={14} /> {project.stars}
              </div>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
