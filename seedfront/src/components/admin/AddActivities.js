import axios from "axios";
import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddActivities.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";

const AddActivities = (props) => {
  const [avatar, setAvatar] = useState(noFileChosenYet);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [file, setFile] = useState();

  // Xu ly khi them 1 anh
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

  // Xu ly thao tac khi nhap
  const onTitHandle = (event) => {
    setTitle(event.target.value);
  };

  const onDesHandle = (event) => {
    setDescription(event.target.value);
  };

  const onDateHandle = (event) => {
    setDate(event.target.value);
  };

  // Call API POST Hoat Dong
  const Submit = () => {
    async function postHoatDong() {
      let data = new FormData();
      data.append("image", file);
      data.append("title", title);
      data.append("description", description);
      data.append("eventdate", date);
  
      try {
        const res = await axios.post("http://127.0.0.1:8000/activities/", data);
        props.closeAddActivities();
      } catch {
        console.log("Error");
      }
    }
    postHoatDong();
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddActivities} />
      <div className={classes.container}>
        <div className={classes.head}>
          <h1>Thêm hoạt động</h1>
          <input className={classes.date} type="date" onChange={onDateHandle} />
        </div>
        <textarea
          className={classes.title}
          placeholder="Tiêu đề"
          onChange={onTitHandle}
        />

        <div className={classes.detail}>
          <textarea placeholder="Nội dung hoạt động" onChange={onDesHandle} />
          <div style={{ width: "48%" }}>
            <div className={classes.img_place}>
              <img src={avatar} />
            </div>
            <input type="file" onChange={onChange} />
          </div>
        </div>
        <button onClick={Submit}>Submit</button>
      </div>
    </>
  );
};

export default AddActivities;
