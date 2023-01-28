import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import classes from "../../assets/CSS/parents/Calendar.module.css";

var d = new Date(),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();

// if (month.length < 2) month = "0" + month;
// if (day.length < 2) day = "0" + day;

const formatDate = year + "-" + month + "-" + day;

export default function Calendar() {
  const [date, setDate] = useState("");
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUQ_giX22Ft4sWC2RoHNxDkhsuocFKeiRtg&usqp=CAU"
  );
  const [comment, setComment] = useState("");

  const handleAbsent = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/students/" +
          localStorage.getItem("id") +
          "/absent"
      );
      alert("success");
    } catch {
      console.log("cant absent");
    }
  };

  //Lay thong tin diem danh ngay luc dau
  useEffect(() => {
    async function a() {
      const data = {
        date: formatDate,
      };
      console.log(date);
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/students/" +
            localStorage.getItem("id") +
            "/attend?date=" +
            formatDate
        );
        console.log(res.data.image);
        if (res.data.image == null)
          setImage(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUQ_giX22Ft4sWC2RoHNxDkhsuocFKeiRtg&usqp=CAU"
          );
        else setImage("http://127.0.0.1:8000/static" + res.data.image);
        setComment(res.data.comment);
        console.log(res.data);
      } catch {
        console.log("Error");
      }
    }
    a();
  }, []);

  //Lay thong tin diem danh khi click vao calendar
  useEffect(() => {
    async function a() {
      const data = {
        date: date,
      };
      console.log(date);
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/students/" +
            localStorage.getItem("id") +
            "/attend?date=" +
            date
        );
        if (res.data.image == null)
          setImage(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUQ_giX22Ft4sWC2RoHNxDkhsuocFKeiRtg&usqp=CAU"
          );
        else setImage(`http://127.0.0.1:8000/static${res.data.image}`);
        setComment(res.data.comment);
        console.log(res.data);
      } catch {
        console.log("Error");
      }
    }
    a();
  }, [date]);

  const onSelect = (event) => {
    setDate(
      event.getFullYear() + "-" + (event.getMonth() + 1) + "-" + event.getDate()
    );
  };

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
      <div className={classes.info}>
        <div className={classes.img_place}>
          <img src={image} alt="here" />
        </div>
        <div className={classes.comment}>
          <h2>Nhận xét của giáo viên</h2>
          <p>{comment}</p>
        </div>
        <button onClick={handleAbsent}>Xin nghỉ</button>
      </div>
    </div>
  );
}
