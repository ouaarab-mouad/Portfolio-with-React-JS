import React, { Component } from 'react';
import { Navbar } from './compoments/Navbar/Navbar';
import { Hero } from './compoments/Hero/hero';
import { About } from './compoments/about/About';
import { Services } from './compoments/Services/Services';
import { Mywork } from './compoments/Mywork/Mywork';
import { Contact } from './compoments/Contact/Contact';
import { Footer } from './compoments/footer/Footer';


class AppPortfolio extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Hero/>
                <About/>
                <Services/>
                <Mywork/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default AppPortfolio;
