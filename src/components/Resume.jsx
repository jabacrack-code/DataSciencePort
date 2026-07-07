import React from 'react';

const Resume = () => {
  const education = [
    { degree: "BSc Mathematics and Computer Science (Second Class Upper Division)", school: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)", date: "2018 - 2023" },
    { degree: "Kenya Certificate of Secondary Education", school: "Giakaibii Boys High School", date: "2013 - 2016" }
  ];

  const experience = [
    {
      role: "Data Scientist Intern",
      company: "Dept. of Central Planning — Public Service & Human Capital",
      date: "Apr 2026 - Present",
      highlights: [
        "Monitor and track performance metrics across government programs, flagging deviations from planned timelines and budget allocations to senior advisors.",
        "Compile structured data reports on Vision 2030 Medium Term Plans and MTEF budget performance for review by planning managers.",
        "Coordinate data flows across interdepartmental units, maintaining version-controlled documentation and reporting templates.",
        "Analyse national economic trends and present data-backed findings to inform policy advisories."
      ]
    },
    {
      role: "Freelance Data Analyst & Researcher",
      company: "Uvorcorp",
      date: "Aug 2023 - March 2026",
      highlights: [
        "Conducted data quality audits on study-generated datasets, identifying duplicates, outliers, and missing values, reducing error rates by ~35%.",
        "Collected, cleaned, and compiled survey data from CRM and online platforms (KoboToolbox, Google Forms) into structured databases (Excel, Google Sheets, MySQL, MongoDB).",
        "Built automated Excel dashboards and Power BI reports with live filters, enabling stakeholders to monitor KPIs dynamically.",
        "Designed questionnaires, administered surveys, and managed end-to-end data workflows covering collection, cleaning, analysis, and archiving.",
        "Delivered statistical analysis using SPSS and Python (Pandas) to support monthly business reviews and performance evaluations."
      ]
    },
    {
      role: "Web & Data Content Officer (Part-time)",
      company: "Commonwealth Youth Council",
      date: "Oct 2025 - March 2026",
      highlights: [
        "Designed and maintained live CMS databases (WordPress) for long-term data storage and backup integrity.",
        "Digitized and archived organizational records in line with departmental data management procedures.",
        "Tracked and logged system issues, maintaining incident records and coordinating resolution to minimize platform downtime.",
        "Collaborated with communication teams to align content publishing workflows with data accuracy standards."
      ]
    }
  ];

  return (
    <div className="content-section" id="resume">
      <h2 className="section-title">Resume</h2>

      {/* Professional Profile */}
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Professional Profile</h3>
      <div style={{ marginBottom: '2.5rem', padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,0.03)', borderLeft: '3px solid var(--button-dark)', borderRadius: '4px' }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: '0 0 0.75rem 0' }}>
          Detail-oriented Data Analyst/Scientist with a BSc in Mathematics and Computer Science and hands-on experience in data collection, cleaning, quality control, MIS reporting, and operational dashboard development.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: '0 0 0.75rem 0' }}>
          Proficient in Excel (pivot tables, advanced formulas), Power BI, Python (Pandas, NumPy), SPSS, and KoboToolbox. Experienced in building automated trackers, compiling daily/weekly/monthly performance reports, and translating CRM and survey data into actionable insights for operational teams.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
          Adept at maintaining data integrity, documenting processes, and supporting cross-functional teams in fast-paced environments.
        </p>
      </div>

      {/* Education */}
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Education</h3>
      <div style={{ marginBottom: '2.5rem' }}>
        {education.map((edu, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--text-secondary)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span>•</span>
              <span>{edu.degree}</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', textAlign: 'right' }}>
              {edu.school} <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>({edu.date})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills Table */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Technical Skills</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-primary)' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold', width: '180px' }}>Reporting & BI:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Power BI, Excel (Pivot Tables, Advanced Formulas, Macros/VBA), Google Sheets</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Data & Analysis:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Python (Pandas, NumPy), SPSS, NVivo, Statistical Modelling</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Data Collection:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>KoboToolbox, ODK, Google Forms, Survey Design & Administration</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Databases:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>MySQL, MongoDB, Database Design & Backups</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Workforce Tools:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Scheduling frameworks, roster management, adherence tracking (Excel-based)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Systems & IT:</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>Git / GitHub, AWS Cloud, WordPress / CMS, Hardware & Network Troubleshooting</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--text-secondary)' }}>
              <td style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>Dev (Support):</td>
              <td style={{ padding: '0.75rem 0', color: 'var(--text-secondary)' }}>React.js, Node.js, Express (for building internal reporting tools & dashboards)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Experience */}
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>Work Experience</h3>
      <div>
        {experience.map((job, idx) => (
          <div key={idx} className="resume-item">
            <div className="resume-header">
              <span className="resume-title">{job.role} @ {job.company}</span>
              <span className="resume-date">({job.date})</span>
            </div>
            <ul className="resume-details">
              {job.highlights.map((highlight, hIdx) => (
                <li key={hIdx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
