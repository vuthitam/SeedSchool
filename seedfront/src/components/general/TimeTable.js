import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import Day from '../../assets/DummyData/General/TimeTable'
import classes from '../../assets/CSS/general/TimeTable.module.css'
import TimeTableDay from "./TimeTableDay";

const TimeTable = props => {
    return <>
        <div className={classes.box}>
            {Day.map(element =>
                <TimeTableDay id={element} type={props.type} closeAddTimeTable={props.closeAddTimeTable} />)}
        </div>
    </>
}

export default TimeTable;