import React from 'react';
import { motion } from 'framer-motion'
import s from './Works.module.css'
import pizza from '../../assets/img/works/pizza.jpg'
import testway from '../../assets/img/works/testway.jpg'
import localgram from '../../assets/img/works/localgram.jpg'
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
                        <img src={testway} alt="Pizza" />
                    </div>
                    <div className={s.item_text}>
                        <p className={s.title}>
                            TestWay
                        </p>
                        <p className={s.description}>
                            Simple page concentrate on register users for some database.
                        </p>
                        <div className={s.link}>
                            <a href="https://gamzatov.github.io/testWay/">
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
