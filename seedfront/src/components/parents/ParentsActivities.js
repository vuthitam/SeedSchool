import React from "react";
import classes from '../../assets/CSS/general/Activities.module.css'
import Activities from "../general/Activities";

const ParentsActivities = props => {
    return <>
        <div className={classes.outermost}>
            <Activities onOpenActi={props.onOpenActi} />
        </div>
    </>

}

export default ParentsActivities