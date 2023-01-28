import React from "react";
import TimeTable from '../general/TimeTable'
import { Create } from "@mui/icons-material";
import button from '../../assets/CSS/general/AddButton.module.css'

const TeachersTimeTable = props => {
    return <>
        <button className={button.btn} onClick={props.onAddTimeTable} >
            <Create />
        </button>
        <TimeTable type={1} />
    </>
}

export default TeachersTimeTable;