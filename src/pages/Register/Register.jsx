import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import Form from '../../components/Form/Form';
import { categories, levels } from '../../data/mockData';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { addPerson, addOffer, people } = useApp();
  const [activeTab, setActiveTab] = useState('person');
  const [loading, setLoading] = useState(false);

  const personFields = [
    {
      name: 'name',
      label: 'Nome Completo',
      required: true,
      placeholder: 'Ex: João Silva',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Ex: joao@email.com',
    },
    {
      name: 'bio',
      label: 'Biografia',
      type: 'textarea',
      required: true,
      placeholder: 'Conte um pouco sobre você...',
    },
    {
      name: 'interests',
      label: 'Interesses',
      required: true,
      placeholder: 'Ex: React, Node.js, Design',
    },
  ];

  const offerFields = [
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
  ];

  const handlePersonSubmit = async (formData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    addPerson({
      ...formData,
      interests: formData.interests.split(',').map((i) => i.trim()),
    });
    setLoading(false);
    setActiveTab('offer');
  };

  const handleOfferSubmit = async (formData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    addOffer(formData);
    setLoading(false);
    navigate('/conhecimentos');
  };

  return (
    <div className="register-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Cadastro</h1>
          <p className="page-subtitle">
            Cadastre-se na plataforma e adicione suas ofertas de conhecimento
          </p>
        </header>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'person' ? 'active' : ''}`}
            onClick={() => setActiveTab('person')}
          >
            Dados Pessoais
          </button>
          <button
            className={`tab ${activeTab === 'offer' ? 'active' : ''}`}
            onClick={() => setActiveTab('offer')}
            disabled={people.length === 0}
          >
            Nova Oferta
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'person' && (
            <div className="form-container">
              <h2 className="form-title">Seus Dados</h2>
              <p className="form-description">
                Preencha seus dados pessoais para se cadastrar na plataforma.
              </p>
              {people.length === 0 ? (
                <div className="info-box">
                  <p>
                    <strong>Nota:</strong> Cadastre-se primeiro para poder adicionar ofertas de conhecimento.
                  </p>
                </div>
              ) : null}
              <Form
                fields={personFields}
                onSubmit={handlePersonSubmit}
                buttonText="Cadastrar Pessoa"
                loading={loading}
              />
            </div>
          )}

          {activeTab === 'offer' && (
            <div className="form-container">
              <h2 className="form-title">Nova Oferta</h2>
              <p className="form-description">
                Adicione uma nova oferta de conhecimento para compartilhar com a comunidade.
              </p>
              <Form
                fields={offerFields}
                onSubmit={handleOfferSubmit}
                buttonText="Criar Oferta"
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
