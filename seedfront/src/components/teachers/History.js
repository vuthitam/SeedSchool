import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/teachers/AddTimeTable.module.css";

const History = (props) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    async function a() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/teachers/" +
            localStorage.getItem("id") +
            "/schedules"
        );
        setTables(res.data);
      } catch {
        console.log("smth had been wrong in ur code");
      }
    }
    a();
  }, []);

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddTimeTable} />
      <div className={classes.black2}>
        <div className={classes.history}>
          <div className={classes.title_history}>Lịch sử cập nhật</div>
          <div className={classes.list_history}>
            {tables.map((ele) => {
              return (
                <a
                  className={classes.item_history}
                  href={`http://localhost:3000/schedule/:${ele.version}`}
                  target={"_blank"}
                >
                  {ele.version}
                </a>
              );
            })}
          </div>
          <div onClick={props.onHideHistory} className={classes.btn_out}>
            Thoát
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
