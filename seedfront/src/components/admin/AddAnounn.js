import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddAnounn.module.css";
import axios from "axios";

const AddAnounn = (props) => {
  const [actor, setActor] = useState(2);
  const [title, setTitle] = useState();
  const [personID, setPersonID] = useState(0);
  const [classID, setClassID] = useState(0);
  const [content, setContent] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor(value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handlePerson = (event) => {
    setPersonID(event.target.value);
  };

  const handleClass = (event) => {
    setClassID(event.target.value);
  };

  const sendAnnoun = () => {
    async function sendAnnouncement() {
      if (actor == 0) {
        const data0 = {
          title: title,
          description: content,
          types: 0,
          receiver: Number(personID),
        };
        try {
          console.log(data0);
          const res = await axios.post("http://127.0.0.1:8000/news/", data0);
        } catch {
          alert("Error 0");
        }
      }
      if (actor == 1) {
        const data1 = {
          title: title,
          description: content,
          types: 1,
          receiver: classID,
        };
        try {
          const res = await axios.post("http://127.0.0.1:8000/news/", data1);
        } catch {
          alert("Error 1");
        }
      }
  
      if (actor == 2) {
        const data2 = {
          title: title,
          description: content,
          types: 2,
        };
        try {
          const res = await axios.post("http://127.0.0.1:8000/news/", data2);
        } catch {
          alert("Error 2");
        }
        console.log("succedded");
      }
  
      props.closeAddAnounn();
    }
    sendAnnouncement()
  };

  return (
    <>
      <div className={classes.turnOff} onClick={props.closeAddAnounn}></div>
      <div className={classes.popup_content}>
        <h2 className={classes.popup_title}>Thêm thông báo</h2>
        <form>
          <p className={classes.actor}>Đối tượng :</p>
          <input
            type="radio"
            id="ph"
            className={classes.actor}
            name="actorPick"
            value="0"
            onChange={handleChange}
          />
          <label for="ph">Cá nhân</label>
          <input
            type="radio"
            id="gv"
            className={classes.actor}
            name="actorPick"
            value="1"
            onChange={handleChange}
          />
          <label for="gv">Một lớp</label>
          <input
            type="radio"
            id="all"
            className={classes.actor}
            name="actorPick"
            value="2"
            onChange={handleChange}
          />
          <label for="all">Toàn trường</label>
          <div className={classes.description}>
            <input
              type="text"
              className={classes.tieuDeTB}
              name="headName"
              placeholder=" Tiêu đề"
              onChange={handleTitle}
            />
            {actor == 0 && (
              <input
                type="text"
                placeholder="ID cá nhân"
                className={classes.emailTB}
                onChange={handlePerson}
              />
            )}
            {actor == 1 && (
              <input
                type="text"
                placeholder="ID lớp"
                className={classes.emailTB}
                onChange={handleClass}
              />
            )}
            <br />
            <textarea
              className={classes.noiDungTB}
              placeholder="Nội dung"
              onChange={handleContent}
            ></textarea>
          </div>
        </form>
        <button className={classes.them_btn99} onClick={sendAnnoun}>
          Thêm
        </button>
      </div>
    </>
  );
};

export default AddAnounn;
