import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import Announcements from "../../assets/DummyData/General/Anounncements";
import axios from "axios";
import PublicAnnoun from "../general/PublicAnnoun";
import TeacherAnnoun from "./TeacherAnnoun";

const PersonalAnnoun = () => {
  const [choice, setChoice] = useState(1);
  return (
    <>
      <div className={classes.btnHolder}>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setChoice(1);
          }}
        >
          Thông báo chung
        </button>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setChoice(2);
          }}
        >
          Dành riêng cho bạn
        </button>
      </div>
      <div className={classes.notification}>
        {choice == 1 && <PublicAnnoun />}
        {choice == 2 && <TeacherAnnoun />}
      </div>
    </>
  );
};

export default PersonalAnnoun;
