import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/jsx/Footer";
import Navbar from "./components/jsx/Navbar";
import Members from "./components/jsx/Members";
import Events from "./components/jsx/Events";
import NotFound from "./components/jsx/404";
import About from "./components/jsx/About";
import Archives from "./components/jsx/Archives";
import Contact from "./components/jsx/Contact";
// import GoogleForm from './components/jsx/GoogleForm';
import FAQ from "./components/jsx/FAQ";
import Home from "./components/jsx/Home";
import Gallery from "./components/jsx/Gallery";
import Sponsorship from "./components/jsx/Sponsorship";
import RaiseADispute from "./components/jsx/RaiseADispute";
import ScrollToTopArrow from "./components/jsx/ScrollToTopArrow";
import Registration from "./components/jsx/Registration";
import ActiveEvents from "./components/jsx/ActiveEvents";
import CsvDownloadButton from "./components/jsx/CsvDownloadButton";
import OfflinePage from "./components/jsx/OfflinePage";

import useOnlineStatus from "./components/utils/customhooks/useOnlineStatus";
import ChatLogin from "./components/jsx/ChatLogin";
import QuizCalendar from "./components/jsx/QuizCalendar";
const App = () => {
  const isOnline = useOnlineStatus();
  if (!isOnline) return <OfflinePage />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/active-events" element={<ActiveEvents />} />
        <Route path="/members" element={<Members />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contactus" element={<Contact />} />
        {/* <Route path="/registration-panel/:eventName" element={<GoogleForm />} /> */}
        <Route
          path="/registration-panel/:eventName"
          element={<Registration />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/raise-a-dispute" element={<RaiseADispute />} />
        <Route path="/admin" element={<CsvDownloadButton />} />
        <Route path="/chat" element={<ChatLogin />} />
        <Route path="/quiz-calendar" element={<QuizCalendar />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ScrollToTopArrow />
      <Footer />
    </>
  );
};

export default App;
