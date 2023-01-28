// import "./styles.css";
import { ClassNames } from "@emotion/react";
import { useState, useEffect } from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import classes from "../../assets/CSS/parents/Calendar.module.css";
import axios from "axios";
// import Students from '../../assets/DummyData/Teachers/StudentList'

export default function Calendar(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [Students, setStudents] = useState([]);

  const onSelect = (event) => {
    console.log(event);
  };

  //Lay danh sach hoc sinh de hien thi
  useEffect(() => {
    async function a() {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/teachers/" +
            localStorage.getItem("id") +
            "/students"
        );
        setStudents(res.data);
        setIsLoading(false);
      } catch {
        console.log("Cant get students!");
      }
    }
    a();
  }, []);

  return (
    <div className={classes.container}>
      <InfiniteCalendar
        width="70%"
        height={640}
        rowHeight={100}
        onSelect={onSelect}
        showHeader={false}
        showOverlay={false}
        showWeekdays={false}
      />

      <div className={classes.list}>
        {Students.map((element) => (
          <div
            className={classes.indie}
            onClick={() => props.onCheck(element.user)}
          >
            <img
              src={
                element.avatar == null
                  ? "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                  : "http://127.0.0.1:8000/static" + element.avatar
              }
            />
            <h2 className={classes.studentName}>{element.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
