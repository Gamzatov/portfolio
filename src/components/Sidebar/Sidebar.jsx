import React from 'react';
import s from './Sidebar.module.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [menu, setMenu] = React.useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="side_wrapper">
            <div className="mob_btn">
                <button onClick={handleMenu} className='mob_menu'>Menu</button>
            </div>

            <div className={!menu ? s.sidebar : s.hide}>


                <ul className={s.links_list_wrapper}>
                    <li className={s.sidebar_link}>
                        <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='home'><span className={s.icon_holder}><ion-icon className={s.icon} name="home-outline"></ion-icon></span> Home </NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='about'> <span className={s.icon_holder}><ion-icon className={s.icon} name="person-outline"></ion-icon> </span>About</NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='experience'> <span className={s.icon_holder}><ion-icon name="school-outline"></ion-icon> </span> Experience</NavLink>
                    </li>
                    <li className={s.sidebar_link}>
                        <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='works'> <span className={s.icon_holder}><ion-icon className={s.icon} name="construct-outline"></ion-icon> </span>Works</NavLink>
                    </li>
                    {/* <li className={s.sidebar_link}>
                    <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to='contact'><span className={s.icon_holder}><ion-icon className={s.icon} name="call-outline"></ion-icon></span> Contact</NavLink>
                </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;