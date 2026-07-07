import React, { useState, useEffect } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = ({ setActiveTab }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const aestheticImages = [
    { src: '/server_room.png', caption: 'Infrastructure & ML Scheduling' },
    { src: '/fitbit_activity.png', caption: 'Wearables & IoT Analytics' },
    { src: '/powerbi_dashboard.png', caption: 'BI Dashboard Design' },
    { src: '/excel_forecasting.png', caption: 'Financial Modeling' },
    { src: '/customer_segmentation.png', caption: 'Customer Clusters' },
    { src: '/statistical_plots.png', caption: 'Statistical Modeling' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [currentImgIndex]);

  const handlePrev = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + aestheticImages.length) % aestheticImages.length);
  };

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % aestheticImages.length);
  };

  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '300px 1.8fr 1.4fr',
      gap: '3rem',
      width: '100%',
      alignItems: 'start',
      padding: '2rem 0'
    }}>
      {/* Column 1: Profile Card */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <img
          src="/kelvin_profile.png"
          alt="Kelvin Wang'ondu Maina"
          style={{
            width: '270px',
            height: '270px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 0.25rem 0' }}>
          Kelvin Maina
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>
          Data Analyst / Scienctist
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.75rem',
          width: '100%',
          paddingLeft: '2.5rem',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} />
            <span>Nairobi, Kenya</span>
          </div>
          <a
            href="https://linkedin.com/in/kelvin-maina"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            <FaLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            <FaGithub size={16} />
            <span>Github</span>
          </a>
        </div>
      </div>

      {/* Column 2: Bio / About Me */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        color: 'var(--text-primary)'
      }}>
        <div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
            Kelvin Wang'ondu Maina
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0 }}>
            Data Scientist focused on Diagnostic, Prescriptive and Predictive Analytics.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', margin: '1rem 0 0.75rem 0', borderBottom: 'none' }}>
            About Me
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            My love for data started in primary school, where mathematics was the one subject I consistently excelled in — scoring 81 in KCPE at a school where high performance was the exception, not the norm. That pattern held through secondary school, where scoring below 95% in math was rare for me.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            The passion became a discipline in my third year of university, when I built my first harmonic interpolation model. It became a career when I ran my first XGBoost model to guide a real franchising decision for a business — and watched data translate directly into a decision that mattered.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Since then, I've grown into a key voice in business decision-making, using data to answer the questions that matter most: why a decision makes sense, when to act on it, and how to execute it well.
          </p>

        </div>
      </div>

      {/* Column 3: Slideshow / Aesthetic Images Gallery */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        padding: '1rem 0',
        backgroundColor: 'transparent',
        width: '100%',
        maxWidth: '377px',
        margin: '0 auto'
      }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.5rem 0', color: 'var(--text-secondary)', textAlign: 'center' }}>
          Research Gallery
        </h4>

        {/* Dynamic Image Wrapper with specified size */}
        <div style={{
          width: '377px',
          height: '371px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 6px 15px rgba(0,0,0,0.05)'
        }}>
          {aestheticImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentImgIndex === idx ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: currentImgIndex === idx ? 2 : 1
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#ffffff',
                padding: '0.35rem',
                fontSize: '0.75rem',
                textAlign: 'center'
              }}>
                {img.caption}
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '5px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '5px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.4rem',
          marginTop: '0.4rem'
        }}>
          {aestheticImages.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentImgIndex(idx)}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: currentImgIndex === idx ? 'var(--button-dark)' : 'rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
