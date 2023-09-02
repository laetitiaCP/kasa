import './RoutesApp.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
import React from "react";
import APropos from "./pages/Apropos/aPropos";
import Erreur404 from "./pages/Erreur404/erreur404";
import Logement from "./pages/logements/logement";
import listAnnonces from "./data/dataAnnonces.json";

function RoutesApp() {

  return (
      <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/apropos" element={ <APropos /> } />
          {listAnnonces.map( (annonce) => (
              <Route key={annonce.id} path={`/logement/${annonce.id}`} element={ <Logement /> } />
          ))}
          <Route path="/*" element={ <Erreur404 /> } />

      </Routes>
  );
}

export default RoutesApp;
