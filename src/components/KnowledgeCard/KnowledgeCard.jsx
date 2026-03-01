import { motion } from 'framer-motion';
import { FiEdit2, FiTrash2, FiClock, FiBarChart } from 'react-icons/fi';
import './KnowledgeCard.css';

const KnowledgeCard = ({ offer, onEdit, onDelete, delay = 0 }) => {
  return (
    <motion.div
      className="knowledge-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="knowledge-card-header">
        <span className="knowledge-category">{offer.category}</span>
        <div className="knowledge-actions">
          <button
            className="action-btn edit-btn"
            onClick={() => onEdit(offer)}
            aria-label="Editar oferta"
          >
            <FiEdit2 />
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => onDelete(offer.id)}
            aria-label="Excluir oferta"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
      
      <h3 className="knowledge-title">{offer.title}</h3>
      <p className="knowledge-description">{offer.description}</p>
      
      <div className="knowledge-meta">
        {offer.level && (
          <span className="knowledge-level">
            <FiBarChart /> {offer.level}
          </span>
        )}
        <span className="knowledge-duration">
          <FiClock /> {offer.duration}
        </span>
      </div>
      
      <div className="knowledge-card-footer">
        <span className="knowledge-provider">
          Por: <strong>{offer.personName}</strong>
        </span>
      </div>
    </motion.div>
  );
};

export default KnowledgeCard;
