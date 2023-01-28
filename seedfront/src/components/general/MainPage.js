import React, { useEffect, useState } from "react"
import Login from "./Login"
import advertisement from '../../assets/Advertisement'
import classes from '../../assets/CSS/general/MainPage.module.css'
import { LocalPhone, LocationOn, Public, Search } from "@mui/icons-material"
import styled from 'styled-components'
import { NavLink } from "react-router-dom"


const Wrapper = styled.div`
    height: 100 %;
    display: flex;
    transition: all 0.75s ease;
    transform: translateX(${props => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
    opacity: 0.95;
`;


const MainPage = () => {
    const [index, setIndex] = useState(0)

    //Hieu ung truot anh lien tuc
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % 5);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [index])

    return <>
        <div className={classes.container}>
            <div className={classes.nav}>
                <div className={classes.international}>
                    <Public className={classes.public} />
                    <div>
                        <h5>INTERNATIONAL</h5>
                        <h5> GRAMMAR SCHOOL</h5>
                    </div>
                </div>
                <h1>SEED SCHOOL</h1>
                <div className={classes.menu}>
                    <Search />
                    <LocalPhone />
                    <LocationOn />
                    <NavLink to="/login">
                        <button>Log in</button>
                    </NavLink>

                </div>
            </div>

            <div className={classes.advertisement}>
                <Wrapper sliderIndex={index}>
                    {advertisement.map(element =>
                        <Slide>
                            <img src={element.image} />
                            <div className={classes.info}>
                                <div className={classes.line} />
                                <div className={classes.letter}>
                                    <h1 className={classes.title}>
                                        {element.title}
                                    </h1>
                                    <h3 className={classes.des}>
                                        {element.des}
                                    </h3>
                                </div>
                            </div>
                        </Slide>
                    )}
                </Wrapper>
            </div>
        </div>
    </>
}

export default MainPage

