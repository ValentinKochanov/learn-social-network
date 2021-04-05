import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from "react-router-dom";


const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <div><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
            <div><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
            <div><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        </div>
    )
}

export default Sidebar;