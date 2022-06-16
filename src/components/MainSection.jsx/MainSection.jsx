import React from 'react';
import s from './MainSection.module.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import me from '../../assets/img/me.jpg'



const MainSection = () => {
    return (
        <motion.div className={s.mainSec} initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <div className={s.max_width_wrapper}>
                
                <div className={s.mainSec_grid_wrapper}>
                    <div className={s.info}>
                        <p className={s.home_name}>DIRKSEN <br /> ARTEM</p>
                        <div className={s.socials}>
                            <p>
                                <a href="https://telegram.me/ads_dev">Telegram</a> | <a href="https://api.whatsapp.com/send?phone=3800683863010"> WhatsApp</a>
                            </p>
                            <p>
                                <a href='mailto:dirksenartem@gmail.com'>dirksenartem@gmail.com</a> | <a href='tel:+380683863010'>+380(68)-386-30-10 </a>
                            </p>
                        </div>
                        {/* <div >
                            <NavLink to='/contact'>
                                <button className='btn'>
                                    Contact me <span className='icon_holder'><ion-icon className={s.icon} name="call-outline"></ion-icon></span>
                                </button>
                            </NavLink>

                        </div> */}
                    </div>
                    <div className={s.photo_wrapper}>
                        <img src={me} alt="" />
                    </div>
                    <div className={s.jobTitle}>
                        <p className={s.home_name}>
                            Front-end Developer
                        </p>
                        <p className={s.aboutMe}>
                            Hi, i'm front-end developer. I found this sphere about 3 years ago, and fall in love with it.
                            I'll prove it. Our life get a sence if you always growing up. IT sphere catch me on this. Yon won't stay on the one point if you wanna grow up, you will alway study something new.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MainSection;
