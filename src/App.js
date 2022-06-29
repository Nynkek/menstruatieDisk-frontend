import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Information from "./pages/Information";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import headerImg
    from '../../menstruatiedisk-frontend/src/assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4308-1000x400.jpg'
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import Header from "./components/pageItems/header/Header";
import PrivateRoute from "./components/pageItems/privateRoute/PrivateRoute";
import Footer from "./components/pageItems/footer/Footer";
import AddDisc from "./pages/AddDisc";
import ApproveDisc from "./pages/ApproveDisc";


function App() {

    const [headerImage, setHeaderImage] = useState(headerImg);
    const [pageTitle, setPageTitle] = useState("Menstruatiedisk");

    return (
        <div className="container">
            <Header headerImage={headerImage} pageTitle={pageTitle}/>

            <Routes>
                <Route path="/*"
                       element={<HomePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>
                <Route path="/informatie-over-menstruatiedisks/"
                       element={<Information headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/vergelijk-meerdere-menstruatiedisks/"
                       element={<Compare headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>


                <Route path="/contact/"
                       element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/registreren/"
                       element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>


                <Route path="/inloggen"
                       element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>


                <Route path="/profiel/"
                              element={<PrivateRoute><Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                <Route path="/doneren"
                       element={<Donate headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/disk-toevoegen"
                        element={<AddDisc headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/disk-accepteren"
                       element={<ApproveDisc headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
