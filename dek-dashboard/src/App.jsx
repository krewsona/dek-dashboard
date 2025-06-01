import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Stats from './pages/Stats';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
