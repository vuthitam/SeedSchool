import React from "react";
import classes from '../../assets/CSS/general/Anounn.module.css'
import Anounn from '../general/Anounn'

const AdminAnounn = props => {
    return <>
        <div className={classes.notification}>
            <p className={classes.add_notification} onClick={props.addAnounn}><i className="ti-plus"></i> + Thêm thông báo</p>
            <Anounn />
        </div>
    </>
}

export default AdminAnounn