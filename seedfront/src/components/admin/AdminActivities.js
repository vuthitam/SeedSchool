import { Create } from "@mui/icons-material";
import React from "react";
import classes from '../../assets/CSS/general/Activities.module.css'
import button from '../../assets/CSS/general/AddButton.module.css'
import Activities from "../general/Activities";
import AddButton from "../general/AddButton";

const AdminActivities = props => {


    return <>
        <div className={classes.outermost}>
            <Activities onOpenActi={props.onOpenActi} />
        </div>
        <button className={button.btn} onClick={props.addActivities} >
            <Create />
        </button>
    </>

}

export default AdminActivities