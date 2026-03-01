import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
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
