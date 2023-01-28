import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/ViewActivities.module.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const text = "# alo \n * 123 \n * 456";
var trans = "";

const ViewActivities = (props) => {
  const [activities, setActivities] = useState({});

  //Lay thong tin 1 hoat dong
  useEffect(() => {
    async function fetchActivityDetail() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/activities/" + props.id
        );
        setActivities(res.data);
        console.log(res.data);
      } catch {
        console.log("Error");
      }
    }
    fetchActivityDetail();
  }, []);

  // Dang ki 1 hoat dong
  const Regis = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/students/" +
          localStorage.getItem("id") +
          "/activities/" +
          props.id
      );
      props.onCloseActi();
    } catch {
      console.log("Error");
    }
  };
  console.log(activities.description);
  console.log(text);

  trans = activities.description;

  return (
    <>
      <div className={classes.popup} onClick={props.onCloseActi} />
      <div className={classes.container}>
        <div className={classes.wrap_title}>
          <h1 className={classes.title}>{activities.title}</h1>
        </div>
        <div className={classes.line} />
        <ReactMarkdown
          children={activities.description}
          remarkPlugins={[remarkGfm]}
        />
        <button onClick={Regis}>Đăng kí</button>
      </div>
    </>
  );
};

export default ViewActivities;
