import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Contact from "./pages/Contact"
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <main className="pt-20 min-h-screen bg-furniture-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
