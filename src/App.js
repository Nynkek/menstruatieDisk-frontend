import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Information from "./pages/Information";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import headerImg from '../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg'
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import Header from "./components/header/Header";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Footer from "./components/footer/Footer";


function App() {

  const [headerImage, setHeaderImage] = useState(headerImg);
  const [pageTitle, setPageTitle] = useState("Menstruatiedisk");

  return (
      <div className="container">
        <Header headerImage={headerImage} pageTitle={pageTitle}/>
        test
        <Routes>
          <Route path="/" exact>
            <HomePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <Route path="/informatie-over-menstruatiedisks" exact>
            <Information headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <Route path="/vergelijk-meerdere-menstruatiedisks" exact>
            <Compare headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <Route path="/contact" exact>
            <Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <Route path="/registreren" exact>
            <SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <Route path="/inloggen" exact>
            <SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
          <PrivateRoute path="/profiel" exact>
            <Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </PrivateRoute>
          <Route path="/doneren" exact>
            <Donate headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
