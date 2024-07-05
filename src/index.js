import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@nextcss/reset';
import App from './App';
import Header from "./pages/Header/Header";
import StartScreen from "./pages/startScreen/startScreen";
import RewardsHub from "./pages/RewardsHub/RewardsHub";
import Bonus from "./pages/Bonus/Bonus";
import Faq from "./pages/Faq/Faq";
import Offer from "./pages/Offer/Offer";
import Statistic from "./pages/Statistic/Statistic";
import Footer from "./pages/Footer/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<Header/>*/}
        {/*<section id="start-screen">*/}
        {/*    <StartScreen/>*/}
        {/*</section>*/}
        <section id="rewards-hub">
            <RewardsHub/>
        </section>
        {/*<section id="bonus">*/}
        {/*    <Bonus/>*/}
        {/*</section>*/}
        {/*<section id="faq">*/}
        {/*    <Faq/>*/}
        {/*</section>*/}
        {/*<section id="offer">*/}
        {/*    <Offer/>*/}
        {/*</section>*/}
        {/*<section id="statistic">*/}
        {/*    <Statistic/>*/}
        {/*</section>*/}
        {/*<Footer/>*/}
    </React.StrictMode>
);