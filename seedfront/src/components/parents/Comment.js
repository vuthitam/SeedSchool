import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/admin/AddComment.module.css";

const Comment = (props) => {
  const [comment, setComment] = useState([]);
  const [students, setStudents] = useState([]);
  let checkList = [];

  const onCommentHandle = (event) => {
    setComment(event.target.value);
  };

  //Comment ve giao vien
  const Submit = async () => {
    const data = {
      comment: comment,
      student: localStorage.getItem("id"),
    };
    console.log(data);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/teachers/" + props.id + "/thank",
        data
      );
      alert("Success");
      props.closeAddComment();
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddComment} />
      <div className={classes.container}>
        <div className={classes.right}>
          <h2>Nhận xét</h2>
          <input
            type="text"
            placeholder="Nhận xét"
            onChange={onCommentHandle}
          />
          <button onClick={Submit}>Thêm</button>
        </div>
      </div>
    </>
  );
};

export default Comment;
