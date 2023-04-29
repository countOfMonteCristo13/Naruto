import React from "react";

import {Footer , Enemies, Bff, Teachers, WhoIsNaruto, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

import './App.css';


const App = () =>{
    return(

        <div className="App">
            <div className="gradient__bg-naruto">
                <Navbar />
                <Header />
        </div>
            <Brand/>
            <WhoIsNaruto/>
            <Teachers/>
            <Bff/>
            <CTA/>
            <Enemies/>
            <Footer/>
        </div>
    );
}


export default App;