import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useApp } from '../../context/AppContext';
import KnowledgeCard from '../../components/KnowledgeCard/KnowledgeCard';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import { categories, levels } from '../../data/mockData';
import './KnowledgeList.css';

const KnowledgeList = () => {
  const { offers, deleteOffer, updateOffer, people } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filteredOffers = useMemo(() => {
    return offers.filter((offer) => {
      // Search filter - title, description, or person name
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        offer.title.toLowerCase().includes(searchLower) ||
        offer.description.toLowerCase().includes(searchLower) ||
        offer.personName.toLowerCase().includes(searchLower);
      
      // Category filter
      const matchesCategory = !selectedCategory || offer.category === selectedCategory;
      
      // Level filter
      const matchesLevel = !selectedLevel || offer.level === selectedLevel;
      
      // Combined filters
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [offers, searchTerm, selectedCategory, selectedLevel]);

  const handleEdit = (offer) => {
    setEditingOffer(offer);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      deleteOffer(deleteConfirm);
      setDeleteConfirm(null);
    }
  };

  const handleUpdateOffer = (formData) => {
    if (editingOffer) {
      updateOffer(editingOffer.id, formData);
      setIsEditModalOpen(false);
      setEditingOffer(null);
    }
  };

  const editFormFields = [
    {
      name: 'title',
      label: 'Título do Conhecimento',
      required: true,
      placeholder: 'Ex: Introdução ao ReactJS',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true,
      placeholder: 'Descreva o que será ensinado...',
    },
    {
      name: 'category',
      label: 'Categoria',
      type: 'select',
      required: true,
      options: categories.map((cat) => ({ value: cat.name, label: cat.name })),
    },
    {
      name: 'level',
      label: 'Nível',
      type: 'select',
      required: true,
      options: levels.map((level) => ({ value: level.name, label: level.name })),
    },
    {
      name: 'duration',
      label: 'Duração',
      required: true,
      placeholder: 'Ex: 4 semanas',
    },
    {
      name: 'personId',
      label: 'Pessoa',
      type: 'select',
      required: true,
      options: people.map((person) => ({
        value: person.id,
        label: person.name,
      })),
    },
  ];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedLevel;

  return (
    <div className="knowledge-list-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Conhecimentos Disponíveis</h1>
          <p className="page-subtitle">
            Explore as ofertas de conhecimento disponíveis na plataforma
          </p>
        </header>

        <div className="filters">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por título, descrição ou nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters-row">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as categorias</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos os níveis</option>
            {levels.map((level) => (
              <option key={level.id} value={level.name}>
                {level.name}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Limpar Filtros
            </button>
          )}
        </div>

        {filteredOffers.length > 0 ? (
          <div className="knowledge-grid">
            {filteredOffers.map((offer, index) => (
              <KnowledgeCard
                key={offer.id}
                offer={offer}
                onEdit={handleEdit}
                onDelete={handleDelete}
                delay={index * 0.05}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <h3>Nenhuma oferta encontrada.</h3>
            <p>
              {hasActiveFilters
                ? 'Tente ajustar seus filtros ou adicione uma nova oferta.'
                : 'Seja o primeiro a adicionar uma oferta de conhecimento!'}
            </p>
            {hasActiveFilters && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Limpar Filtros
              </button>
            )}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingOffer(null);
        }}
        title="Editar Oferta"
      >
        {editingOffer && (
          <Form
            fields={editFormFields}
            onSubmit={handleUpdateOffer}
            buttonText="Atualizar"
            initialData={{
              ...editingOffer,
              personId: editingOffer.personId.toString(),
            }}
          />
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Confirmar Exclusão"
      >
        <div className="delete-confirm">
          <p>Tem certeza que deseja excluir esta oferta?</p>
          <div className="delete-actions">
            <button
              className="btn-cancel"
              onClick={() => setDeleteConfirm(null)}
            >
              Cancelar
            </button>
            <button className="btn-delete" onClick={confirmDelete}>
              Excluir
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KnowledgeList;
