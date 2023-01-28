import { Save } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import classes from "../../assets/CSS/teachers/AddCheck.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";

var d = new Date(),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();

if (month.length < 2) month = "0" + month;
if (day.length < 2) day = "0" + day;

const formatDate = year + "-" + month + "-" + day;

const AddCheck = (props) => {
  const [file, setFile] = useState();
  const [avatar, setAvatar] = useState(noFileChosenYet);
  const [comment, setComment] = useState("");

  //Xu ly khi file input anh thay doi
  const onChange = (event) => {
    console.log(event.target.files[0]);
    const f = event.target.files[0];
    if (f) {
      const reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = function () {
        const result = reader.result;
        setAvatar(result);
      };
    }
    setFile(event.target.files[0]);
  };

  const onCommentHandle = (event) => {
    setComment(event.target.value);
  };

  //Gui thong tin diem danh
  const Send = async () => {
    console.log(formatDate);
    let data = new FormData();
    data.append("image", file);
    const reData = {
      comment: comment,
      date: formatDate,
    };

    try {
      const reRes = await axios.put(
        "http://127.0.0.1:8000/students/" +
          props.id +
          "/attendance?date=" +
          formatDate,
        reData
      );
      console.log("Success");
      props.closeAddCheck();
    } catch {
      console.log("Error");
    }
  };

  const sendImage = async () => {
    console.log(formatDate);
    let data = new FormData();
    data.append("image", file);
    const reData = {
      comment: comment,
      date: formatDate,
    };

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/students/" +
          props.id +
          "/attendance?date=" +
          formatDate,
        data
      );
      console.log("Success");
      props.closeAddCheck();
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddCheck} />
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.img_place}>
            <img src={avatar} />
          </div>
          <input type="file" onChange={onChange} />
        </div>
        <div className={classes.right}>
          <textarea
            placeholder="Thêm nhận xét"
            onChange={onCommentHandle}
          ></textarea>
          <button onClick={Send}>
            <Save />
            Nhận xét
          </button>
          <button onClick={sendImage}>
            <Save />
            Điểm danh
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCheck;
