export const categories = [
  { id: 1, name: 'Programação', color: '#00B894' },
  { id: 2, name: 'Design', color: '#E17055' },
  { id: 3, name: 'Idiomas', color: '#0984E3' },
  { id: 4, name: 'Música', color: '#6C5CE7' },
  { id: 5, name: 'Culinária', color: '#FDCB6E' },
  { id: 6, name: 'Negócios', color: '#00CEC9' },
];

export const levels = [
  { id: 1, name: 'Iniciante', color: '#00B894' },
  { id: 2, name: 'Intermediário', color: '#FDCB6E' },
  { id: 3, name: 'Avançado', color: '#E17055' },
];

export const initialPeople = [
  {
    id: 1,
    name: 'Maria Santos',
    email: 'maria@email.com',
    bio: 'Desenvolvedora frontend com 5 anos de experiência.',
    interests: ['React', 'UI/UX', 'TypeScript'],
  },
  {
    id: 2,
    name: 'João Silva',
    email: 'joao@email.com',
    bio: 'Designer gráfico apaixonado por branding.',
    interests: ['Photoshop', 'Ilustração', 'Branding'],
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana@email.com',
    bio: 'Professora de inglês com certificação TESOL.',
    interests: ['Inglês', 'Espanhol', 'Gramática'],
  },
];

export const initialOffers = [
  {
    id: 1,
    personId: 1,
    personName: 'Maria Santos',
    title: 'React JS do Zero',
    description: 'Aprenda ReactJS desde o básico até conceitos avançados, incluindo hooks, context API e boas práticas.',
    category: 'Programação',
    level: 'Iniciante',
    duration: '4 semanas',
  },
  {
    id: 2,
    personId: 2,
    personName: 'João Silva',
    title: 'Introdução ao Design Gráfico',
    description: 'Conceitos fundamentais de design, teoria das cores, tipografia e composição visual.',
    category: 'Design',
    level: 'Iniciante',
    duration: '3 semanas',
  },
  {
    id: 3,
    personId: 3,
    personName: 'Ana Costa',
    title: 'Inglês Conversacional',
    description: 'Aprimore sua fluência em inglês com conversas práticas sobre diversos temas.',
    category: 'Idiomas',
    level: 'Intermediário',
    duration: '6 semanas',
  },
  {
    id: 4,
    personId: 1,
    personName: 'Maria Santos',
    title: 'CSS Moderno',
    description: 'Domine CSS Grid, Flexbox, animações e técnicas de design responsivo.',
    category: 'Programação',
    level: 'Intermediário',
    duration: '3 semanas',
  },
  {
    id: 5,
    personId: 2,
    personName: 'João Silva',
    title: 'UX Design Avançado',
    description: ' Técnicas avançadas de pesquisa com usuários, prototipagem e testes de usabilidade.',
    category: 'Design',
    level: 'Avançado',
    duration: '5 semanas',
  },
];
