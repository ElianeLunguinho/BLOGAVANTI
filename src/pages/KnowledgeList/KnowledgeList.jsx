import { useState, useMemo, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useApp } from '../../context/AppContext';
import KnowledgeCard from '../../components/KnowledgeCard/KnowledgeCard';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import { categories, levels } from '../../data/mockData';
import './KnowledgeList.css';

const KnowledgeList = () => {
  const { offers, deleteOffer, updateOffer, people } = useApp();

  // synchronize filter state with the URL so it can be bookmarked/shared
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || ''
  );
  const [selectedLevel, setSelectedLevel] = useState(
    searchParams.get('level') || ''
  );

  const debouncedSearch = useDebounce(searchTerm, 250);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filteredOffers = useMemo(() => {
    return offers.filter((offer) => {
      const searchLower = debouncedSearch.toLowerCase();
      const matchesSearch =
        !debouncedSearch ||
        offer.title.toLowerCase().includes(searchLower) ||
        offer.description.toLowerCase().includes(searchLower) ||
        offer.personName.toLowerCase().includes(searchLower);
      const matchesCategory = !selectedCategory || offer.category === selectedCategory;
      const matchesLevel = !selectedLevel || offer.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [offers, debouncedSearch, selectedCategory, selectedLevel]);

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
    // remove query params as well
    setSearchParams({});
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedLevel;

  // keep URL in sync whenever filters change
  useEffect(() => {
    const params = {};
    if (searchTerm) params.q = searchTerm;
    if (selectedCategory) params.category = selectedCategory;
    if (selectedLevel) params.level = selectedLevel;
    setSearchParams(params);
  }, [searchTerm, selectedCategory, selectedLevel, setSearchParams]);

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

          {hasActiveFilters && (
            <div className="filter-badges">
              {searchTerm && <span className="badge">Busca: {searchTerm}</span>}
              {selectedCategory && <span className="badge">Categoria: {selectedCategory}</span>}
              {selectedLevel && <span className="badge">Nível: {selectedLevel}</span>}
            </div>
          )}
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
