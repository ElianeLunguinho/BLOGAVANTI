import { createContext, useContext, useState, useEffect } from 'react';
import { initialPeople, initialOffers } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem('blog-avanti-people');
    return saved ? JSON.parse(saved) : initialPeople;
  });

  const [offers, setOffers] = useState(() => {
    const saved = localStorage.getItem('blog-avanti-offers');
    return saved ? JSON.parse(saved) : initialOffers;
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('blog-avanti-people', JSON.stringify(people));
  }, [people]);

  useEffect(() => {
    localStorage.setItem('blog-avanti-offers', JSON.stringify(offers));
  }, [offers]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addPerson = (person) => {
    const newPerson = { ...person, id: Date.now() };
    setPeople((prev) => [...prev, newPerson]);
    showToast('Pessoa cadastrada com sucesso!');
    return newPerson;
  };

  const addOffer = (offer) => {
    const person = people.find((p) => p.id === parseInt(offer.personId));
    const newOffer = {
      ...offer,
      id: Date.now(),
      personName: person?.name || 'Unknown',
      personId: parseInt(offer.personId),
      level: offer.level || 'Iniciante', // Default level
    };
    setOffers((prev) => [...prev, newOffer]);
    showToast('Oferta cadastrada com sucesso!');
    return newOffer;
  };

  const updateOffer = (id, updatedOffer) => {
    const person = people.find((p) => p.id === parseInt(updatedOffer.personId));
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              ...updatedOffer,
              personName: person?.name || offer.personName,
              personId: parseInt(updatedOffer.personId),
              level: updatedOffer.level || offer.level || 'Iniciante',
            }
          : offer
      )
    );
    showToast('Oferta atualizada com sucesso!');
  };

  const deleteOffer = (id) => {
    setOffers((prev) => prev.filter((offer) => offer.id !== id));
    showToast('Oferta removida com sucesso!', 'info');
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
