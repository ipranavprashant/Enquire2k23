import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/jsx/Footer';
import Navbar from './components/jsx/Navbar';
import Members from './components/jsx/Members';
import Events from './components/jsx/Events';
import NotFound from './components/jsx/404';
import About from './components/jsx/About';
import Archives from './components/jsx/Archives';
import Contact from './components/jsx/Contact';
import GoogleForm from './components/jsx/GoogleForm';
import FAQ from './components/jsx/FAQ';
import Home from './components/jsx/Home';
import Gallery from './components/jsx/Gallery';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/registration-panel" element={<GoogleForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
