import React, { useState, useEffect } from "react";
import Schedule from "../general/Schedule";
import styles from "../../assets/CSS/general/Schedule.module.css";
import axios from "axios";

const TeacherSchedule = (props) => {
  const [ver, setVer] = useState();

  return (
    <>
      <Schedule />
      <div className={styles.bot}>
        <button className={styles.btnHistory} onClick={props.onShowHistory}>
          {" "}
          Xem lịch sử
        </button>
        <button className={styles.btnUpdate} onClick={props.onAddTimeTable}>
          Cập nhật TKB
        </button>
      </div>
    </>
  );
};

export default TeacherSchedule;
