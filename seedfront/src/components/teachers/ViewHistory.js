import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "../../assets/CSS/general/Schedule.module.css";
import axios from "axios";

const ViewHistory = () => {
  const params = useParams();
  const version = params.version.replace(":", "");
  const [table, setTable] = useState([]);
  const [teacher, setTeacher] = useState();
  const [newTable, setNewTable] = useState({
    t_11: null,
    t_12: null,
    t_13: null,
    t_14: null,
    t_15: null,
    t_21: null,
    t_22: null,
    t_23: null,
    t_24: null,
    t_25: null,
    t_31: null,
    t_32: null,
    t_33: null,
    t_34: null,
    t_35: null,
    t_41: null,
    t_42: null,
    t_43: null,
    t_44: null,
    t_45: null,
    version: null,
  });

  //   useEffect(async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://127.0.0.1:8000/students/" +
  //           localStorage.getItem("id") +
  //           "/profile"
  //       );
  //       setTeacher(res.data.idteacher);
  //     } catch {
  //       console.log("bfdshfahdhfu");
  //     }
  //   }, []);

  useEffect(() => {
    async function a() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/teachers/" +
            localStorage.getItem("id") +
            "/schedules"
        );
        setNewTable(res.data.find((p) => p.version == version));
      } catch (err) {
        console.log(err);
      }
    }
    a();
  }, [table]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.class_schedule}>Class Schedule</div>
          <div className={styles.class_name}>Version: {version}</div>
        </div>
        <div className={styles.list}>
          <table>
            <tr>
              <th></th>
              <th>Thứ 2</th>
              <th>Thứ 3</th>
              <th>Thứ 4</th>
              <th>Thứ 5</th>
              <th>Thứ 6</th>
            </tr>
            <tr>
              <td>7h-9h</td>
              <td>{newTable.t_11}</td>
              <td>{newTable.t_12}</td>
              <td>{newTable.t_13}</td>
              <td>{newTable.t_14}</td>
              <td>{newTable.t_15}</td>
            </tr>
            <tr>
              <td>9h-11h</td>
              <td>{newTable.t_21}</td>
              <td>{newTable.t_22}</td>
              <td>{newTable.t_23}</td>
              <td>{newTable.t_24}</td>
              <td>{newTable.t_25}</td>
            </tr>
            <tr>
              <td>11h-14h</td>
              <td>{newTable.t_31}</td>
              <td>{newTable.t_32}</td>
              <td>{newTable.t_33}</td>
              <td>{newTable.t_34}</td>
              <td>{newTable.t_35}</td>
            </tr>
            <tr>
              <td>14h-16h30</td>
              <td>{newTable.t_41}</td>
              <td>{newTable.t_42}</td>
              <td>{newTable.t_43}</td>
              <td>{newTable.t_44}</td>
              <td>{newTable.t_45}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewHistory;
