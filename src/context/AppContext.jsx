import { createContext, useContext, useState, useEffect } from 'react';
import { initialPeople, initialOffers } from '../data/mockData';

// backend base URL; can be overridden with VITE_API_URL env var
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(initialPeople);
  const [offers, setOffers] = useState(initialOffers);

  const [toast, setToast] = useState(null);

  // load initial data from backend once when provider mounts
  useEffect(() => {
    const load = async () => {
      try {
        const [peopleRes, offersRes] = await Promise.all([
          fetch(`${API_URL}/people`),
          fetch(`${API_URL}/offers`),
        ]);
        if (peopleRes.ok) setPeople(await peopleRes.json());
        if (offersRes.ok) setOffers(await offersRes.json());
      } catch (err) {
        console.warn('Unable to fetch initial data, using static mocks', err);
      }
    };
    load();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addPerson = async (person) => {
    try {
      const res = await fetch(`${API_URL}/people`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      });
      const newPerson = await res.json();
      setPeople((prev) => [...prev, newPerson]);
      showToast('Pessoa cadastrada com sucesso!');
      return newPerson;
    } catch (err) {
      showToast('Erro ao cadastrar pessoa', 'error');
      console.error(err);
    }
  };

  const addOffer = async (offer) => {
    try {
      const res = await fetch(`${API_URL}/offers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offer),
      });
      const newOffer = await res.json();
      setOffers((prev) => [...prev, newOffer]);
      showToast('Oferta cadastrada com sucesso!');
      return newOffer;
    } catch (err) {
      showToast('Erro ao cadastrar oferta', 'error');
      console.error(err);
    }
  };

  const updateOffer = async (id, updatedOffer) => {
    try {
      const res = await fetch(`${API_URL}/offers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedOffer),
      });
      const offer = await res.json();
      setOffers((prev) =>
        prev.map((o) => (o.id === id ? offer : o))
      );
      showToast('Oferta atualizada com sucesso!');
    } catch (err) {
      showToast('Erro ao atualizar oferta', 'error');
      console.error(err);
    }
  };

  const deleteOffer = async (id) => {
    try {
      await fetch(`${API_URL}/offers/${id}`, { method: 'DELETE' });
      setOffers((prev) => prev.filter((offer) => offer.id !== id));
      showToast('Oferta removida com sucesso!', 'info');
    } catch (err) {
      showToast('Erro ao remover oferta', 'error');
      console.error(err);
    }
  };

  const value = {
    people,
    offers,
    toast,
    addPerson,
    addOffer,
    updateOffer,
    deleteOffer,
    showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
