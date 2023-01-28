import { ChatBubbleOutline, Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router";
import classes from '../../assets/CSS/general/Nav.module.css'

const Nav = props => {

    const navigate = new useNavigate();

    const Logout = () => {
        navigate('/login');
    }

    return <>
        <div className={classes.container}>
            {/* <h2 className={classes.title}>
                SEED SCHOOL
            </h2> */}
            <div className={classes.search}>
                <Search className={classes.icon} />
                <input placeholder="Search" />
            </div>
            <div className={classes.user}>
                <button onClick={Logout}>Logout </button>
                <img src={props.avatar} onClick={props.onProfile} />
            </div>

        </div>
    </>
}

export default Nav