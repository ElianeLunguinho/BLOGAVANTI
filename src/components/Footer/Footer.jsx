import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const knowledgeAreas = [
    { id: 1, name: 'Tecnologia', slug: 'tecnologia' },
    { id: 2, name: 'Idiomas', slug: 'idiomas' },
    { id: 3, name: 'Artes', slug: 'artes' },
    { id: 4, name: 'Negócios', slug: 'negocios' },
    { id: 5, name: 'Saúde', slug: 'saude' },
  ];

  const quickLinks = [
    { id: 1, name: 'Início', path: '/' },
    { id: 2, name: 'Conhecimentos', path: '/conhecimentos' },
    { id: 3, name: 'Cadastrar', path: '/cadastrar' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Blog Avanti - Início">
              <svg 
                className="logo-icon" 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M16 2L28 9V23L16 30L4 23V9L16 2Z" 
                  fill="currentColor" 
                  opacity="0.2"
                />
                <path 
                  d="M16 2L28 9V23L16 30L4 23V9L16 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" 
                  fill="currentColor"
                />
              </svg>
              <span>Blog Avanti</span>
            </Link>
            <p className="footer-tagline">
              Plataforma de troca de conhecimentos onde você pode compartilhar suas habilidades e aprender com outros.
            </p>
            <p className="footer-bio">
              Conecte-se, cresça insieme!
            </p>
          </div>

          {/* Quick Links */}
          <nav className="footer-section" aria-label="Links Rápidos">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Knowledge Areas */}
          <nav className="footer-section" aria-label="Áreas de Conhecimento">
            <h3 className="footer-title">Áreas de Conhecimento</h3>
            <ul className="footer-list">
              {knowledgeAreas.map((area) => (
                <li key={area.id}>
                  <Link to={`/conhecimentos?categoria=${area.slug}`} className="footer-link">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="footer-section footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Receba novidades sobre novas habilidades disponíveis e conecte-se com a comunidade.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="newsletter-input"
                  aria-label="E-mail para newsletter"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">Contato</h3>
            <div className="social-links">
              <a 
                href="mailto:elianelunguinho123@gmail.com" 
                className="social-link"
                aria-label="Enviar e-mail"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a 
                href="https://github.com/ElianeLunguinho" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/eliane-lunguinho" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Blog Avanti. Todos os direitos reservados.
            </p>
            <Link to="/privacidade" className="privacy-link">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
