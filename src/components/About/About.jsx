import React from 'react';
import s from './About.module.css'
import {motion} from 'framer-motion'
import me from '../../assets/img/me2.jpg'

const About = () => {
    return (
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.3}}}>
            <h2 className='section-title'>About</h2>
            <div className={s.about_wrapper}>
                <div className={s.about_photo}>
                    <img className={s.photo} src={me} alt=""/>
                </div>
                <div className={s.about_text_wrapper}>
                    <div className={s.about_text}>
                        <p>
                            Hi everyone, nice to meet you here!
                            I'm Artem Dirksen, 26 years old. I'm social, kind and self motivated front-end developer.
                            Here you can find some information about me. I like to travel and investigate interesting
                            places around the world.
                        </p>
                        <div className="btn_wrapper ">
                            <a href='../../assets/DirksenArtem.pdf' className='main_btn' download>Download CV</a>
                        </div>
                    </div>
                    <div className={s.about_skills_wrapper}>
                        <ul className={s.skills_list}>
                            <li className={s.skill}>
                                <ion-icon name="logo-html5"></ion-icon>
                                <span className={s.skill_name}> HTML5</span>
                            </li>
                            <li className={s.skill}>
                                <ion-icon name="logo-css3"></ion-icon>
                                <span className={s.skill_name}>  CSS3
                                    <i> preproccessors: SCSS</i></span>
                            </li>
                            <li className={s.skill}>
                                <ion-icon name="logo-nodejs"></ion-icon>
                                <span className={s.skill_name}>  JavaScript ES 6</span>
                            </li>
                            <li className={s.skill}>
                                <ion-icon name="logo-react"></ion-icon>
                                <span className={s.skill_name}> React/Redux</span>
                            </li>
                            <li className={s.skill}>
                                <ion-icon name="logo-github"></ion-icon>
                                <span className={s.skill_name}>  GIT</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
