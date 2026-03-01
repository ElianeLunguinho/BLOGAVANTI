import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import './Home.css';

const features = [
  {
    icon: '🎯',
    title: 'Aprenda com Experts',
    description: 'Conecte-se com profissionais experientes em diversas áreas do conhecimento.',
  },
  {
    icon: '🤝',
    title: 'Compartilhe Skills',
    description: 'Ensine o que você sabe e ajude outros a desenvolverem suas habilidades.',
  },
  {
    icon: '🌐',
    title: 'Comunidade Global',
    description: 'Faça parte de uma rede de troca de conhecimento sem fronteiras.',
  },
  {
    icon: '💼',
    title: 'Desenvolvimento Pessoal',
    description: 'Expanda seus horizontes e descubra novas oportunidades de crescimento.',
  },
];

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      <section className="features section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Por que usar a Blog Avanti?</h2>
            <p className="section-subtitle">
              Uma plataforma feita para conectar pessoas que querem aprender e ensinar
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para começar?</h2>
            <p className="cta-description">
              Junte-se à nossa comunidade e comece a trocar conhecimentos hoje mesmo.
            </p>
            <Link to="/cadastrar" className="cta-button">
              Criar conta gratuita
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2024 Blog Avanti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
