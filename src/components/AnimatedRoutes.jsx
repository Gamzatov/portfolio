import React from 'react';
import MainSection from './MainSection.jsx/MainSection';
import About from './About/About';
import Experience from '../Experince/Experience';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Contact/Contact';
import { AnimatePresence } from 'framer-motion'
import Works from './Works/Works';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='home' element={<MainSection />} />
                <Route path='about' element={<About />} />
                <Route path='experience' element={<Experience />} />
                {/* <Route path='contact' element={<Contact />} /> */}
                <Route path='works' element={<Works />} />
            </Routes>
        </AnimatePresence>

    );
}

export default AnimatedRoutes;
