import {
  AddCircleOutline,
  AddOutlined,
  Create,
  PinDropSharp,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/admin/Classes.module.css";
import button from "../../assets/CSS/general/AddButton.module.css";
// import Class from '../../assets/DummyData/Admin/Classes'
import AddButton from "../general/AddButton";
import AddClass from "./AddClass";
import axios from "axios";

const Classes = (props) => {
  const [Class, setClass] = useState([]);
  const [nameClass, setNameClass] = useState();

  const handleNameClass = (event) => {
    setNameClass(event.target.value);
  };
  const RegisterClass = () => {
    async function RegisterClass() {
      const data = {
        name: nameClass,
      };
      try {
        const res = await axios.post("http://127.0.0.1:8000/classes/", data);
      } catch {
        alert("wrong input");
      }
      props.setRequire(69);
      props.setRequire(3);
    }
    RegisterClass();
  };

  //Load data tat ca cac lop
  useEffect(() => {
    async function loadClassData() {
      const response = await fetch("http://127.0.0.1:8000/classes");
      const data = await response.json();
      setClass(data);
    }
    loadClassData();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container_content}>
          {Class.map((element) => (
            // <div className={classes.item}>
            //   <div className={classes.item_image}>
            //   <img src={image} alt="ảnh lớp" />
            //   </div>
            //   <div className={classes.content_item}>
            //     <h3 className={classes.class_name}>{element.name}</h3>
            //     <p className={classes.class_teacher}>
            //       <span>Giáo viên: </span>
            //       {element.teacher_name}
            //     </p>
            //     <p className={classes.class_number}>
            //       <span>Sĩ số: </span>
            //       {element.amount}
            //     </p>
            //     <button className={classes.content_item_btn}>Thông tin</button>
            //   </div>
            // </div>
            <div className={classes.item}>
              {/* <button className={button.btn} onClick={props.addClass}>
                <Create />
              </button> */}
              <div className={classes.item_image}>
                <img
                  src="https://institutlm.com/wp-content/uploads/2016/06/training-icon.png"
                  alt="ảnh lớp"
                />
              </div>
              <div className={classes.item_name}>Lớp: {element.name}</div>
              <div className={classes.item_position}>
                ID giáo viên: {element.teacher}
              </div>
              <div className={classes.item_position}>ID Lớp: {element.id}</div>
              <button onClick={() => props.addClass(element.id)}>
                {" "}
                Thêm giáo viên{" "}
              </button>
            </div>
          ))}
          <div className={classes.item}>
            <div className={classes.item_image}>
              <img
                src="https://institutlm.com/wp-content/uploads/2016/06/training-icon.png"
                alt="ảnh lớp"
              />
            </div>
            <div className={classes.item_name}>
              <input
                type="text"
                placeholder="Nhập tên lớp"
                className={classes.inputName}
                onChange={handleNameClass}
              />
            </div>
            <button onClick={RegisterClass}>Thêm lớp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
