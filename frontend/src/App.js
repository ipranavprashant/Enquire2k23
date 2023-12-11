import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/jsx/Footer';
import Navbar from './components/jsx/Navbar';
import Members from './components/jsx/Members';
import Events from './components/jsx/Events';
import Hero from './components/jsx/Hero';
import NotFound from './components/jsx/404';
import About from './components/jsx/About';
import Archives from './components/jsx/Archives';
import Contact from './components/jsx/Contact';
import GoogleForm from './components/jsx/GoogleForm';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/registration-panel" element={<GoogleForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
