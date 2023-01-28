import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/Anounn.module.css";
import Announcements from "../../assets/DummyData/General/Anounncements";
import axios from "axios";

const Anounn = (props) => {
  const [thongbaochung, setthongbaochung] = useState([]);
  const [news2, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/news/");
        // const data = await response.json();
        setthongbaochung(res.data);
      } catch {
        console.log("Error");
      }
    }
    fetchNews();
  }, []);

  return (
    <>
      <ul className={classes.notification_body}>
        {thongbaochung
          .slice(0)
          .reverse()
          .map((element) => {
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

export default Anounn;
