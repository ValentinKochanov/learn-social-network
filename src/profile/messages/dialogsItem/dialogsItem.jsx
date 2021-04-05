import React from 'react';
import s from './../messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id

    return <div className={s.dialogs}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;