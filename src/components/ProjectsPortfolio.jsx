import React, { useState } from 'react';
import { FaGithub, FaTimes, FaBookOpen } from 'react-icons/fa';

const ProjectsPortfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Excel', 'SQL', 'Python', 'Machine Learning', 'Power BI', 'Stata/SPSS'];

  const projects = [
    {
      title: 'Modeling System Resource Usage for Predictive Scheduling',
      category: 'Machine Learning',
      tags: ['statistics', 'python', 'machine learning', 'neural network'],
      date: 'June 27, 2018',
      image: '/server_room.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>In this project, we developed a predictive scheduling model to optimize server resource usage across a large distributed system. By forecasting CPU, memory, and disk utilization, the scheduling engine can pre-allocate workloads, reducing bottlenecks and latency spikes.</p>
        
        <h3>Methodology</h3>
        <p>We utilized a Long Short-Term Memory (LSTM) recurrent neural network architecture trained on historical system metrics. Time-series data was normalized, and features were selected based on correlation and relevance metrics. An ensemble technique combining statistics and neural networks was implemented to refine predictability under peak load conditions.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Achieved a 35% reduction in compute overhead by pre-empting idle scheduling.</li>
          <li>Lowered SLA violations due to resource contention by 22%.</li>
          <li>Optimized GPU allocation schedules dynamically.</li>
        </ul>
      `
    },
    {
      title: "Exploring Fitbit Data using Fitbit's API",
      category: 'Python',
      tags: ['statistics', 'python', 'SQL', 'API'],
      date: 'March 11, 2018',
      image: '/fitbit_activity.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>This project showcases an automated pipeline that extracts physical activity and heart rate metrics from Fitbit's REST API, structures it, and stores it in a PostgreSQL database for multi-dimensional statistical analysis.</p>
        
        <h3>Methodology</h3>
        <p>We built a Python ETL script that fetches daily biometric records via OAuth 2.0 authorization. Data is parsed and normalized from JSON files into relational tables. Complex SQL queries perform window functions, aggregates, and date-time arithmetic to isolate sleep phases, activity levels, and resting heart rates over time.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Created a fully automated ETL pipeline running on a daily cron schedule.</li>
          <li>Built custom SQL views to query longitudinal physiological patterns.</li>
          <li>Discovered correlation between heart-rate variability and sleep duration.</li>
        </ul>
      `
    },
    {
      title: "PostgreSQL Database Performance Optimization",
      category: 'SQL',
      tags: ['PostgreSQL', 'Database Tuning', 'SQL Query Optimization'],
      date: 'February 10, 2019',
      image: '/server_room.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>A query optimization and indexing strategy project executed on a production-scale database consisting of over 50 million sales and analytics logs, aimed at reducing dashboard load times and data latency.</p>
        
        <h3>Methodology</h3>
        <p>Analyzed slower queries using PostgreSQL EXPLAIN ANALYZE execution plans. Implemented B-Tree and GIN indexing on heavily queried columns, restructured multi-table joins into partitioned tables, and configured custom database connection pooling parameters.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Reduced average query execution times by 72% across all operational dashboards.</li>
          <li>Optimized nested aggregation queries, eliminating redundant subqueries.</li>
          <li>Set up materialised views with automatic refresh rules to handle heavy analytics tasks.</li>
        </ul>
      `
    },
    {
      title: "Sales Performance Interactive Dashboard",
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'Data Visualization'],
      date: 'January 15, 2019',
      image: '/powerbi_dashboard.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>A comprehensive Power BI business intelligence dashboard designed for executive leadership. It provides real-time visibility into sales KPIs, region performance, product margin distributions, and historical growth trends.</p>
        
        <h3>Methodology</h3>
        <p>Using Power Query, we cleansed and blended transaction records, customer demographics, and product catalog data. We established a star-schema data model and authored advanced DAX measures to calculate Year-over-Year (YoY) growth, moving averages, and dynamic customer segment sales shares.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Implemented interactive drill-through views down to individual store levels.</li>
          <li>Reduced executive reporting turnaround times from weeks to seconds.</li>
          <li>Enabled automated forecasting parameters within the visual layouts.</li>
        </ul>
      `
    },
    {
      title: "Advanced Financial Forecasting Model",
      category: 'Excel',
      tags: ['Excel', 'Financial Modeling', 'VBA'],
      date: 'October 04, 2018',
      image: '/excel_forecasting.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>A robust Excel-based financial forecasting sheet designed to model business cash flows, operating budgets, and capital expenditures over a 5-year period under varying economic scenarios.</p>
        
        <h3>Methodology</h3>
        <p>Leveraged advanced dynamic array formulas, nested XLOOKUPs, and Pivot Tables to aggregate complex historical tables. Implemented Excel Solver for resource optimization and wrote VBA macros to execute automated Monte Carlo simulations assessing credit risks and profit margins.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Built high-impact sensitivity heatmaps using conditional formatting and scenario managers.</li>
          <li>Decreased spreadsheet calculation times by optimizing matrix math.</li>
          <li>Enabled users to generate instant PDF financial summary decks with a single click.</li>
        </ul>
      `
    },
    {
      title: "Cognitive Psychology Longitudinal Analysis",
      category: 'Stata/SPSS',
      tags: ['SPSS', 'Stata', 'ANOVA', 'Biometrics'],
      date: 'November 18, 2017',
      image: '/statistical_plots.png',
      github: 'https://github.com',
      blogContent: `
        <h3>Project Overview</h3>
        <p>A multi-year longitudinal study evaluating the correlation between cognitive loading, age-related biometrics variables, and response latency patterns in older adult groups.</p>
        
        <h3>Methodology</h3>
        <p>Cleaned and structured behavioral assessment scores from a cohort of 400+ participants. Executed Repeated Measures ANOVA, Multivariate Linear Regressions, and Factor Analysis using SPSS syntax and Stata commands. Conducted rigorous post-hoc adjustments (Bonferroni correction) to control Type I error rates.</p>
        
        <h3>Key Results</h3>
        <ul>
          <li>Mapped a clear statistical decline curve matching specific biometrics markers.</li>
          <li>Resolved conflicting findings in literature regarding age-related cognitive processing speeds.</li>
          <li>Exported publication-ready APA-style statistical reports directly from Stata tables.</li>
        </ul>
      `
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio-section" style={{ position: 'relative' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects Portfolio</h2>
      
      {/* Category Navigation Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        marginBottom: '3rem'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              backgroundColor: filter === cat ? 'var(--button-dark)' : 'transparent',
              color: filter === cat ? 'white' : 'var(--text-primary)',
              border: '1px solid var(--button-dark)',
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem',
              cursor: 'pointer',
              borderRadius: '2px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="blog-card" style={{ height: '100%', justifyContent: 'space-between' }}>
            <div style={{ width: '100%' }}>
              <div className="blog-tags">
                <span className="blog-tag" style={{ fontWeight: 'bold', border: '1px solid var(--text-primary)' }}>
                  {project.category}
                </span>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="blog-title" style={{ minHeight: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {project.title}
              </h3>
              <div className="blog-date">{project.date}</div>

              <div className="blog-image-wrapper">
                <img src={project.image} alt={project.title} className="blog-image" />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%', marginTop: '1rem' }}>
              <button 
                onClick={() => setSelectedProject(project)}
                className="read-more-btn"
                style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <FaBookOpen /> Blog
              </button>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
                style={{ 
                  flex: 1, 
                  backgroundColor: 'transparent', 
                  color: 'var(--text-primary)', 
                  border: '1px solid var(--button-dark)',
                  textDecoration: 'none',
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.5rem' 
                }}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Explanation Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '2.5rem',
            borderRadius: '2px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '2px solid var(--border-card)'
          }}>
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              <FaTimes />
            </button>

            <div style={{ marginBottom: '1.5rem' }}>
              <span className="blog-tag" style={{ fontWeight: 'bold', border: '1px solid var(--text-primary)' }}>
                {selectedProject.category}
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', margin: '0.75rem 0 0.25rem 0' }}>
                {selectedProject.title}
              </h2>
              <div className="blog-date">{selectedProject.date}</div>
            </div>

            <div 
              className="blog-modal-content"
              dangerouslySetInnerHTML={{ __html: selectedProject.blogContent }}
              style={{
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', borderTop: '1px solid var(--border-card)', paddingTop: '1.5rem' }}>
              <button 
                onClick={() => setSelectedProject(null)}
                className="read-more-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPortfolio;
