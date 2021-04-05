import React from 'react';
import s from './../messages.module.css';

const MessagesItem = (props) => {
    return (
        <div className={s.message}>                
            {props.text}
        </div>

    )
}

export default MessagesItem;