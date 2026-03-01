import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';
import Home from './pages/Home/Home';
import KnowledgeList from './pages/KnowledgeList/KnowledgeList';
import Register from './pages/Register/Register';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conhecimentos" element={<KnowledgeList />} />
                <Route path="/cadastrar" element={<Register />} />
              </Routes>
            </main>
            <Footer />
            <Toast />
          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
