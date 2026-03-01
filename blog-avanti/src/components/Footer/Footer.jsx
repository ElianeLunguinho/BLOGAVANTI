import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">▲</span>
              <span className="logo-text">Blog Avanti</span>
            </Link>
            <p className="footer-description">
              Compartilhando conhecimento e experiências de desenvolvimento.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navegação</h4>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/conhecimentos">Conhecimentos</Link></li>
                <li><Link to="/cadastrar">Cadastrar</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Categorias</h4>
              <ul>
                <li><Link to="/conhecimentos?categoria=frontend">Frontend</Link></li>
                <li><Link to="/conhecimentos?categoria=backend">Backend</Link></li>
                <li><Link to="/conhecimentos?categoria=mobile">Mobile</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <div className="footer-social">
                <a href="mailto:contato@blogavanti.com" aria-label="Email">
                  <FiMail size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Blog Avanti. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
