import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/ViewActivities.module.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ViewActivities = (props) => {
  const [activities, setActivities] = useState({});

  //Lay thong tin 1 hoat dong
  useEffect(() => {
    async function a() {
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
    a();
  }, []);

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
      </div>
    </>
  );
};

export default ViewActivities;
