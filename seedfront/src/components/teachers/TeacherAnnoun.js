import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import axios from "axios";

const TeacherAnnoun = () => {
  const [thongbaorieng, setthongbaorieng] = useState([]);
  const [thongbaochung, setthongbaochung] = useState([]);
  const [news2, setNews] = useState([]);

  useEffect(() => {
    async function a() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/teachers/" +
            localStorage.getItem("id") +
            "/person_news"
        );
        // const data = await response.json();
        setthongbaorieng(res.data);
      } catch {
        console.log("Error");
      }
    }
    a();
  }, []);

  useEffect(() => {
    async function a() {
      try {
        const res2 = await axios.get("http://127.0.0.1:8000/news/");
        // const data = await response.json();
        setthongbaochung(res2.data);
      } catch {
        console.log("Error");
      }
    }
    a();
  }, []);

  function checkTBR() {
    return thongbaochung.id == thongbaorieng.id;
  }

  const filterByReference = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => {
      return arr2.find((element) => {
        return element.news === el.id;
      });
    });
    return res;
  };

  console.log(filterByReference(thongbaochung, thongbaorieng));

  return (
    <>
      <ul className={classes.notification_body}>
        {filterByReference(thongbaochung, thongbaorieng).map((element) => {
          return (
            <li className={classes.notification_content}>
              <div className={classes.item}>
                <a href="#" className={classes.item_content}>
                  <span>[Title]</span> {element.title}
                  <br />
                  {element.description}
                </a>
                <p className={classes.item_date}>{element.create_at}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TeacherAnnoun;
