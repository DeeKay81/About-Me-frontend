import React, { Component } from 'react';

import { Header } from '../components/pageSubdivisions/header/Header.jsx';
import { Nav } from '../components/pageSubdivisions/nav/Nav.jsx';
import { About } from '../components/about/About.jsx';
import { Testimonials } from '../components/testimonials/Testimonials.jsx';
import { Contact } from '../components/contact/Contact.jsx';
import { Footer } from '../components/pageSubdivisions/footer/Footer.jsx';


export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Nav />
                <About />
                <Testimonials />
                <Contact />
                <Footer />
            </>
        );
    }
}