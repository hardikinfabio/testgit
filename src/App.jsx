import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CompanyPage from './pages/CompanyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeCase, setActiveCase] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const caseStudies = [
    {
      client: "Alpha Logistics",
      title: "NEUTRALIZING $40K MONTHLY BOT LOSS.",
      problem: "Hidden bot farms were drainining search budgets with 85% bounce rates.",
      results: "+42% ROAS in 30 days via Signal Filtering.",
      accent: "#33B6E5",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      client: "V-Fintech",
      title: "SCALING SHIELDED CONVERSIONS.",
      problem: "Attribution blindness causing overspend on non-performing signals.",
      results: "Saved $1.2M in annual waste via Neural Attribution.",
      accent: "#6B46C1",
      image: "https://tse1.mm.bing.net/th/id/OIP.3xwt2G9KD3DYBUrgh8aqKwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
      >
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                activeCase={activeCase} 
                setActiveCase={setActiveCase} 
                caseStudies={caseStudies} 
              />
            } 
          />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;