import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [menu, setMenu] = React.useState(false);
    const handleMenu = () => {
        if (window.screen.width <= 1023) {
            setMenu(!menu);
        }
        
    }
    let wind = window.screen.width
    console.log(wind)
    return (
        <div className="side_wrapper">
            <div className="mob_btn">
                <button onClick={handleMenu}
                    className={!menu ? 'mob_menu' : 'close_btn'}>{!menu ? 'Menu' : 'X'}</button>
            </div>

            <div className={!menu ? s.sidebar : s.hide}>


                <ul className={s.links_list_wrapper}>
                    <li className={s.sidebar_link}>
                        <NavLink onClick={()=> handleMenu()}
                            className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}
                            to='/portfolio/'><span className={s.icon_holder}><ion-icon className={s.icon}
                                name="home-outline"></ion-icon></span> Home
                        </NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink onClick={()=> handleMenu()}
                            className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='portfolio/about'>
                            <span className={s.icon_holder}><ion-icon className={s.icon}
                                name="person-outline"></ion-icon> </span>About</NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink onClick={()=> handleMenu()}
                            className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}
                            to='portfolio/experience'> <span className={s.icon_holder}><ion-icon
                                name="school-outline"></ion-icon> </span> Experience</NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink onClick={()=> handleMenu()}
                            className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='portfolio/works'>
                            <span className={s.icon_holder}><ion-icon className={s.icon}
                                name="construct-outline"></ion-icon> </span>Works</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
