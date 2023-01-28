import React, { useState, useEffect } from "react";
// import activities from '../../assets/DummyData/Admin/Activities'
import classes from "../../assets/CSS/general/Activities.module.css";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  transition: all 0.75s ease;
  transform: translateX(${(props) => props.sliderIndex * -80}vw);
  z-index: 0;
`;

const Activities = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activities, setActivities] = useState([]);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setSliderIndex((sliderIndex + 1) % activities.length);
  //     }, 3000);
  //     return () => {
  //         clearTimeout(timer);
  //     }
  // }, [sliderIndex])

  //Load data toan bo hoat dong
  useEffect(() => {
    async function fetchAllActivity() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/activities/");
        setActivities(res.data);
        console.log(res.data);
      } catch {
        console.log("Error getting activities");
      }
    }
    fetchAllActivity();
  }, []);

  const clickHandler = (type) => {
    if (type === "left") {
      setSliderIndex(
        sliderIndex === 0 ? activities.length - 1 : sliderIndex - 1
      );
    } else {
      setSliderIndex(
        sliderIndex === activities.length - 1 ? 0 : sliderIndex + 1
      );
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes["arrow-left"]}>
          <ArrowLeft onClick={() => clickHandler("left")} />
        </div>
        <Wrapper sliderIndex={sliderIndex}>
          {activities.map((element) => (
            <div
              className={classes.activity}
              onClick={() => props.onOpenActi(element.id)}
            >
              <img src={"http://127.0.0.1:8000/static" + element.image} />
              <button>{element.eventdate}</button>
            </div>
          ))}
        </Wrapper>
        <div className={classes["arrow-right"]}>
          <ArrowRight onClick={() => clickHandler("right")} />
        </div>
      </div>
    </>
  );
};

export default Activities;
