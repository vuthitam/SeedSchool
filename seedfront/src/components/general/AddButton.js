import { Add, AddCircleOutline, Create } from "@mui/icons-material";
import React from "react";
import classes from '../../assets/CSS/general/AddButton.module.css'

const AddButton = props => {
    return <>
        <div className={classes.btn} onClick={console.log(1)}>
            <Create />
        </div>
    </>
}

export default AddButton