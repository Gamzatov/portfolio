import React from 'react';
import { motion } from 'framer-motion'
import s from './Works.module.css'
import pizza from '../../assets/img/works/pizza.jpg'
import barelief from '../../assets/img/works/barelief.jpg'
import localgram from '../../assets/img/works/localgram.jpg'
import georgina from '../../assets/img/works/georgina.jpg'
import anton from '../../assets/img/works/anton.jpg'
import { NavLink } from 'react-router-dom';

const Works = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>

            <div className={s.item_wrapper}>
                <div className={s.item}>
                    <div className={s.item_img}>
                        <img src={pizza} alt="Pizza" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            ReactPizza
                        </p>
                        <p className={s.description}>
                            Little web-site for pizzeria.
                            There you can choose pizza, add it to cart or remove unnecessary.
                            <br /> <b>  **Unfortunately for now works only with local database(with json-server).</b>
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/reactPizza/">  Visit</a>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_img}>
                        <img src={localgram} alt="Pizza" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            Localgram
                        </p>
                        <p className={s.description}>
                            Just the start of a project from my mind.
                            There you can find out, pagination, axios requests and simple work with hooks.
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/localgram/"> Visit</a>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_img}>
                        <img src={barelief} alt="barelief" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            Bud-Barelief
                        </p>
                        <p className={s.description}>
                            Site for the team involved in the repair of apartments
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/barelief">
                                Visit
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_img}>
                        <img src={georgina} alt="georgina" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            Georgina
                        </p>
                        <p className={s.description}>
                            Landing page for beauty saloon.
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/Georgina/">
                                Visit
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_img}>
                        <img src={anton} alt="anton" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            A1 - Technology
                        </p>
                        <p className={s.description}>
                            Landing page for guy, that makes sculpture from stone.
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/a1-technology/">
                                Visit
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default Works;
