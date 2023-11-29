import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavIcon from "./components/NavIcon";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import FlightRankings from "./components/FlightRankings";
import AlternativeFlights from "./components/AlternativeFlight";
import UpdateFlight from "./components/UpdateFlight";

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Login />
      <FlightRankings />
      <AlternativeFlights />
      <UpdateFlight />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
