import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, Gauge, Calendar, X } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

const projectDetails = {
  "featured-solar": {
    title: "500 kWp Rooftop Solar Project",
    category: "COMMERCIAL SOLAR",
    location: "Chennai, Tamil Nadu",
    capacity: "500 kWp",
    type: "On-grid Solar",
    status: "In Progress",
    scope: ["Engineering", "Installation", "Commissioning"],
    video: "/src/assets/videos/project-video.mp4",
    images: [
      { 
        url: "/src/assets/images/Project1.JPG", 
        title: "Site Infrastructure", 
        description: "High-resolution view of the module mounting structures and array layout, engineered for maximum wind load resistance." 
      },
      { 
        url: "/src/assets/images/Project3.JPG", 
        title: "Inverter Installation", 
        description: "Detailed shot of the string inverter setup and ACDB panel, ensuring optimal power conversion and safety." 
      },
      { 
        url: "/src/assets/images/Project4.JPG", 
        title: "Final Commissioning", 
        description: "Aerial view of the completed rooftop installation, showing the seamless integration across the industrial roof." 
      },
    ],
    description: "A comprehensive commercial solar installation designed to maximize energy yield for an industrial facility in Chennai. This project involves high-efficiency mono-perc modules and a robust mounting structure engineered for coastal wind conditions.",
    technicalDetails: [
      "High-efficiency Mono-PERC Solar Modules",
      "String Inverter Configuration",
      "Remote Monitoring and SCADA Integration",
      "Net-metering connectivity with TANGEDCO",
    ],
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];
  const [selectedImg, setSelectedImg] = useState(null);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <PageHero 
        crumb="Featured Projects / Project Details" 
        title={project.title} 
        description={project.category} 
      />

      <section className="section">
        <div className="container">
          <div className="project-detail-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px', 
            alignItems: 'center' 
          }}>
            <ScrollReveal>
              <div className="video-container" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#000' }}>
                <video 
                  src={project.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: 'auto', minHeight: '300px', display: 'block', objectFit: 'cover' }} 
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={1}>

              <div className="project-info">
                <div className="eyebrow-line" style={{ marginBottom: '12px' }}>PROJECT SPECIFICATIONS</div>
                <h2 style={{ marginBottom: '24px', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>{project.title}</h2>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '16px', 
                  marginBottom: '32px' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="var(--pro-blue)" /> <span><strong style={{ fontSize: '0.9rem' }}>Location:</strong> {project.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gauge size={18} color="var(--pro-blue)" /> <span><strong style={{ fontSize: '0.9rem' }}>Capacity:</strong> {project.capacity}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} color="var(--pro-blue)" /> <span><strong style={{ fontSize: '0.9rem' }}>Status:</strong> {project.status}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="var(--pro-blue)" /> <span><strong style={{ fontSize: '0.9rem' }}>Type:</strong> {project.type}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Scope of Work</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.scope.map(item => (
                      <span key={item} style={{ padding: '4px 12px', background: 'var(--light-blue)', color: 'var(--pro-blue)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{ lineHeight: '1.6', color: 'var(--grey-600)', marginBottom: '32px', fontSize: '0.95rem' }}>
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <section className="section" style={{ marginTop: '80px' }}>
            <SectionTitle eyebrow="GALLERY" title="Project Visuals" center />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
              {project.images.map((img, i) => (
                <ScrollReveal key={i} delay={i}>
                  <div 
                    onClick={() => setSelectedImg(img)}
                    style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img src={img.url} alt={img.title} style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </section>

      {selectedImg && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          padding: '20px', backdropFilter: 'blur(8px)' 
        }}>
          <button 
            onClick={() => setSelectedImg(null)} 
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 1001 }}
          >
            <X size={32} />
          </button>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px', 
            maxWidth: '1200px', 
            width: '100%', 
            alignItems: 'center',
            maxHeight: '90vh'
          }}>
            <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
              <img src={selectedImg.url} alt={selectedImg.title} style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
            </div>
            <div style={{ color: 'white', textAlign: 'left', padding: '20px' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '16px' }}>{selectedImg.title}</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>{selectedImg.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}