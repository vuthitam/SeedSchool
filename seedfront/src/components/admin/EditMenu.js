import React from "react";
import classes from '../../assets/CSS/admin/EditMenu.module.css'
import icon from '../../assets/Icons/menu.jpg'

const EditMenu = props => {
    return <>
        <div className={classes.popup} onClick={props.onTurnOffEditMenu} />
        <div className={classes.container}>
            <button>Thêm</button>
        </div>
    </>
}

export default EditMenu