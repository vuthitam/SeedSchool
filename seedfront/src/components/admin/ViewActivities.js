import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/ViewActivities.module.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ViewActivities = (props) => {
  const [activities, setActivities] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchActivityAmount() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/activities/" + props.id + "/amount"
        );
        setList(res.data.length);
      } catch {
        console.log("wrong wrong wrong");
      }
    }
    fetchActivityAmount();
  });

  //Lay thong tin chi tiet cua 1 hoat dong
  useEffect(() => {
    async function fetchActivityDetail(){
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

  //Xoa 1 hoat dong
  const Delete = () => {
    async function deleteActivity() {
      try {
        const res = await axios.delete(
          "http://127.0.0.1:8000/activities/" + props.id + "/"
        );
        props.onCloseActi();
      } catch {
        console.log("Error");
      }
    }
    deleteActivity();
  };

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
        <span className={classes.number}>Số người đăng ký: {list}</span>
        <button onClick={Delete}>Xóa hoạt động</button>
      </div>
    </>
  );
};

export default ViewActivities;
