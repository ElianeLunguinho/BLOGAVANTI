<div align="center">

# 🚀 Blog Avanti

_Uma plataforma de troca de conhecimentos e ofertas educacionais_

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=for-the-badge)]()

</div>

---

## 📚 Sobre o Projeto

Blog Avanti é uma plataforma web de troca de conhecimentos onde pessoas podem compartilhar suas habilidades/conhecimentos e conectar-se com outras para trocar oportunidades de aprendizado.

### ✨ Funcionalidades Principais

- **Página Inicial** - Seção Hero com proposta da plataforma, overview de funcionalidades e chamada para ação
- **Lista de Conhecimentos** - Exibição de todas as ofertas de conhecimento disponíveis
- **Cadastro de Pessoas** - Registro de usuários na plataforma
- **Criação de Ofertas** - Criação e gerenciamento de ofertas educacionais
- **Gerenciamento de Ofertas** - Editar e remover ofertas existentes
- **Modo Escuro** - Alternância entre tema claro e escuro
- **Animações Suaves** - Transições fluidas com Framer Motion
- **Design Responsivo** - Layout adaptável para mobile, tablet e desktop

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|-----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Roteamento** | React Router DOM 7 |
| **Animações** | Framer Motion 12 |
| **Ícones** | React Icons 5 (Feather Icons) |
| **Linting** | ESLint |
| **Estilização** | CSS Modules |

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Primária | `#2D3436` | Fundo escuro, textos principais |
| Secundária | `#00B894` | Botões primários, highlights |
| Accent | `#E17055` | Botões de danger, alertas |
| Background | `#FAFAFA` | Fundo principal |
| Card | `#FFFFFF` | Fundo dos cartões |
| Texto Secundário | `#636E72` | Textos secundários |
| Borda | `#DFE6E9` | Bordas e separadores |

### Modo Escuro

O projeto conta com suporte a tema claro e escuro, comutável através do botão na navbar. As variáveis CSS adaptam automaticamente todas as cores do sistema.

| Variável | Modo Claro | Modo Escuro |
|----------|------------|-------------|
| Background | `#FAFAFA` | `#1A1A2E` |
| Card | `#FFFFFF` | `#16213E` |
| Texto Primário | `#2D3436` | `#EAEAEA` |
| Texto Secundário | `#636E72` | `#B0B0B0` |

### Tipografia

- **Headings**: Poppins (Bold/Semibold)
  - H1: 48px
  - H2: 36px
  - H3: 24px
- **Body**: Open Sans
  - Regular: 16px
  - Small: 14px

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)

---

## 🔧 Instalação

1. **Clone este repositório:**

```
bash
git clone https://github.com/seu-usuario/blog-avanti.git
```

2. **Navegue até a pasta do projeto:**

```
bash
cd blog-avanti
```

3. **Instale as dependências:**

```
bash
npm install
```

---

## ▶️ Executando o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```
bash
npm run dev
```

O projeto estará disponível em: **http://localhost:5184/BLOGAVANTI/**

### Build de Produção

Para criar uma versão otimizada para produção:

```
bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

### Visualizar Build de Produção

Para visualizar o build de produção localmente:

```
bash
npm run preview
```

---

## 🧪 Verificação de Código

Para verificar erros de linting:

```
bash
npm run lint
```

---

## 📁 Estrutura do Projeto

```
blog-avanti/
├── public/                    # Arquivos públicos estáticos
├── src/
│   ├── assets/              # Imagens e recursos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── FeatureCard/     # Cards de funcionalidades
│   │   ├── Footer/          # Rodapé
│   │   ├── Form/            # Componentes de formulário
│   │   ├── Hero/            # Seção Hero
│   │   ├── KnowledgeCard/   # Cards de conhecimento
│   │   ├── Modal/           # Modal/dialog
│   │   ├── Navbar/          # Navegação
│   │   └── Toast/           # Notificações toast
│   ├── context/             # Context API do React
│   ├── data/                # Dados mockados
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/            # Página inicial
│   │   ├── KnowledgeList/  # Lista de conhecimentos
│   │   └── Register/        # Cadastro
│   ├── styles/              # Estilos globais e variáveis
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Ponto de entrada
├── eslint.config.js         # Configuração do ESLint
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── SPEC.md                  # Especificação do projeto
└── vite.config.js           # Configuração do Vite
```

---

## ✅ Critérios de Aceitação

- [x] Página inicial carrega com hero, funcionalidades e CTA
- [x] Navegação entre páginas funciona corretamente
- [x] Lista de conhecimentos exibe todas as ofertas em grid de cards
- [x] Formulário de pessoa valida e submete corretamente
- [x] Formulário de oferta valida e submete corretamente
- [x] Ofertas podem ser editadas
- [x] Ofertas podem ser deletadas com confirmação
- [x] Design responsivo funciona em mobile/tablet/desktop
- [x] Todas as animações e transições são suaves
- [x] Sem erros de console no carregamento
- [x] Botão de alternância de tema funciona corretamente
- [x] Tema escuro aplicado em todos os componentes
- [x] Scroll navbar com efeito de desfoque

---

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie sua branch de funcionalidade (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

Desenvolvido com ❤️ por [Eliane Lunguinho]

---

<div align="center">

_Feito com React e Vite_

</div>
