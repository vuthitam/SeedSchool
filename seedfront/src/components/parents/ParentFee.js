import { YoutubeSearchedForTwoTone } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/parents/ParentFee.module.css";

const ParentFee = () => {
  const [fee, setFee] = useState({
    tuition: 0,
    meal: 0,
    surcharge: 0,
    redution: 0,
    debt: 0,
  });
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [person, setPerson] = useState({
    name: null,
    nameparent: null,
  });

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleFee = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/students/" +
          localStorage.getItem("id") +
          "/fee?month=" +
          month +
          "&year=" +
          year
      );
      setFee(res.data);
    } catch {
      console.log("Something wrong!!");
    }
  };

  useEffect(() => {
    async function a() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/students/" +
            localStorage.getItem("id") +
            "/profile"
        );
        setPerson(res.data);
      } catch {
        console.log("something went wrong");
      }
    }
    a();
  });

  return (
    <>
      <div className={classes.container}>
        <div>
          <span>Chọn thời điểm học phí </span>
          <br />
          <span>Tháng:</span> <input type="text" onChange={handleMonth} />
          <span>Năm:</span> <input type="text" onChange={handleYear} />
          <button onClick={handleFee}>Xem</button>
        </div>
        <div className={classes.infor}>
          <div className={classes.infor_title}>Dữ liệu học sinh</div>
          <div className={classes.infor_detail}>
            <div className={classes.col3} className={classes.name_student}>
              <span className={classes.fw600}>Tên học sinh: {person.name}</span>{" "}
              <br />
            </div>
            <div className={classes.col3} className={classes.name_parent}>
              <span className={classes.fw600}>
                Tên phụ huynh: {person.nameparent}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.title}>Chi tiết học phí</div>
        <div className={classes.detail_tuition}>
          <table className={classes.table_tuition}>
            <tr className={classes.tableConfig}>
              <th className={classes.tableConfig}>Tên dịch vụ</th>
              <th className={classes.tableConfig}>Phí dịch vụ(vnd)</th>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền học</td>
              <td className={classes.tableConfig}>{fee.tuition}</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền ăn</td>
              <td className={classes.tableConfig}>{fee.meal}</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Phí phát sinh</td>
              <td className={classes.tableConfig}>{fee.surcharge}</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>Tiền giảm</td>
              <td className={classes.tableConfig}>{fee.redution}</td>
            </tr>
            <tr className={classes.tableConfig}>
              <td className={classes.tableConfig}>
                <span className={classes.fw600}>Tổng</span>
              </td>
              <td className={classes.tableConfig}>{fee.debt}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ParentFee;
