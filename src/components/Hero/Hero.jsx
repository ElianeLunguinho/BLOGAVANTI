import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const heroImages = [
	{
		url: 'https://images.unsplash.com/photo-1525921429618-f517086bba3d?w=1920&q=90',
		alt: 'Grupo de estudantes na biblioteca'
	},
	{
		url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=90',
		alt: 'Equipe trabalhando com laptops'
	},
	{
		url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=90',
		alt: 'Ambiente colaborativo moderno'
	},
	{
		url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=90',
		alt: 'Equipe conectada pela tecnologia'
	},
	{
		url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90',
		alt: 'Pessoas aprendendo juntas'
	},
	{
		url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=90',
		alt: 'Educação online e tecnologia'
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

				<button
					className="carousel-arrow carousel-arrow-prev"
					onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
					aria-label="Imagem anterior"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</button>
				<button
					className="carousel-arrow carousel-arrow-next"
					onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
					aria-label="Próxima imagem"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</button>
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
