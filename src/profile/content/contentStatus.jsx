import React, { useState, useEffect } from "react";

const ProfileStatus = props => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { (!editMode) && <div>
                <span onClick={ () => { setEditMode(c => !c) } }>{props.status}</span>
            </div>}
            { (editMode) && <div>
                <input onChange={onChangeStatus} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
            </div>}
        </div>
    )
}

export default ProfileStatus;