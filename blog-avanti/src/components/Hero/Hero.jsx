import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    alt: 'Pessoas aprendendo juntas'
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    alt: 'Educação online'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    alt: 'Trabalho em equipe'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    alt: 'Networking profissional'
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
        {/* Image Carousel */}
        <div className="hero-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="hero-carousel-image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img 
                src={heroImages[currentImage].url} 
                alt={heroImages[currentImage].alt}
              />
            </motion.div>
          </AnimatePresence>
          <div className="hero-carousel-overlay"></div>
        </div>
        {/* Carousel Dots */}
        <div className="hero-carousel-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">🚀 Transforme seu conhecimento</span>
          <h1 className="hero-title">
            Aprenda e ensine,<br />
            <span className="highlight">conectando pessoas</span>
          </h1>
          <p className="hero-description">
            A Blog Avanti é uma plataforma de troca de conhecimentos onde você pode 
            compartilhar suas habilidades e aprender com outros. Conecte-se, 
            cresça insieme!
          </p>
          
          <div className="hero-actions">
            <Link to="/cadastrar" className="btn btn-primary">
              Começar agora
              <FiArrowRight />
            </Link>
            <Link to="/conhecimentos" className="btn btn-outline">
              Ver conhecimentos
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-card hero-card-1">
            <div className="card-icon">💡</div>
            <span>Compartilhe</span>
          </div>
          <div className="hero-card hero-card-2">
            <div className="card-icon">🤝</div>
            <span>Conecte</span>
          </div>
          <div className="hero-card hero-card-3">
            <div className="card-icon">🌟</div>
            <span>Cresça</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
