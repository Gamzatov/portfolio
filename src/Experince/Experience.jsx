import React from 'react';
import s from './Experience.module.css'
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <motion.div className={s.experience_section}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}>
            <h2 className='section-title'>Experience</h2>
            <div className={s.study_wrapper}>
                <div className={s.study_info}>
                    <div className="timeline-container study">
                        <div className={s.study_info_wrapper}>
                            <p className={s.year}>
                                2013 - 2015
                            </p>
                            <p className={s.nameOf}>
                                National Aviation University
                            </p>
                            <p className={s.responsibility}>
                                <b> Technical Information Security Systems</b>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-container study">
                        <div className={s.study_info_wrapper}>
                            <p className={s.year}>
                                2019 - present
                            </p>
                            <p className={s.nameOf}>
                                Self Education
                            </p>
                            <p className={s.responsibility}>
                                <b> Creative manager</b>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className={s.study_info_wrapper}>
                            <p className={s.year}>
                                2020 - 24.02.22
                            </p>
                            <p className={s.nameOf}>
                                Friend Ads company
                            </p>
                            <p className={s.responsibility}>
                                <b> Creative manager</b>
                                <ul className={s.res_list}>
                                    <li>
                                        Creating a landing's pages
                                    </li>
                                    <li>
                                        Making a creatives and montage videos
                                    </li>
                                    <li>
                                        Pushing Facebook advertise
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>


                <div className={s.study_info}>
                    <div className="timeline-container">
                        <div className={s.study_info_wrapper}>
                            <p className={s.year}>
                                2019 - 2021
                            </p>
                            <p className={s.nameOf}>
                                OfferLeader
                            </p>
                            <p className={s.responsibility}>
                                <b> Creative manager</b>
                                <ul className={s.res_list}>
                                    <li>
                                        Creating a landing's pages
                                    </li>
                                    <li>
                                        Making a creatives and montage videos
                                    </li>
                                    <li>
                                        Pushing Facebook advertise
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className={s.study_info_wrapper}>
                            <p className={s.year}>
                                2019-2022
                            </p>
                            <p className={s.nameOf}>
                                Working on my own
                            </p>
                            <p className={s.responsibility}>
                                <ul className={s.res_list}>
                                    <li>
                                        Creating a landing's pages, web-sites
                                    </li>
                                    <li>
                                        Making a creatives and montage videos
                                    </li>
                                    <li>
                                        Pushing Facebook advertise
                                    </li>
                                </ul>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Experience;
