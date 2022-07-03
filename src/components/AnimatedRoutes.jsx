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
                {/* <Route path='home' element={<MainSection />} /> */}
<<<<<<< HEAD
                <Route index path='/portfolio/' element={<MainSection />} />
=======
                <Route index path='/portfolio/'exact element={<MainSection />} />
>>>>>>> c83f0a88901e6328c543e09f4772663f9e8fffc7
                <Route path='/portfolio/about' element={<About />} />
                <Route path='/portfolio/experience' element={<Experience />} />
                <Route path='/portfolio/works' element={<Works />} />
            </Routes>
        </AnimatePresence>

    );
}

export default AnimatedRoutes;
