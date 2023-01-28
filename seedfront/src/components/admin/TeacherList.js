import { AddOutlined, Create } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/admin/Classes.module.css";
import button from "../../assets/CSS/general/AddButton.module.css";
// import Teachers from '../../assets/DummyData/Admin/Teachers'
import AddButton from "../general/AddButton";
import AddTeacher from "./AddTeacher";

const TeacherList = (props) => {
  const [Teachers, setTeachers] = useState([]);
  const [image, setImage] = useState(
    "https://www.steam-ed.ie/wp-content/uploads/2021/08/Female-Avatar.jpeg"
  );

  //Lay data toan bo giao vien
  useEffect(() => {
    async function fetchAllTeacher() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/teachers");
        // const data = await response.json();
        console.log(res)
        setTeachers(res.data);
      } catch {
        console.log("Error");
      }
    }
    fetchAllTeacher();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <button className={button.btn} onClick={props.addTeacher}>
          <Create />
        </button>
        <div className={classes.container_content}>
          {Teachers.map((element) => (
            // <div className={classes.item}>
            //     <img src={element.avatar == null ? image : "http://127.0.0.1:8000/static/" + element.avatar} alt="ảnh giáo viên" />
            //     <div className={classes.content_item}>
            //         <h3 className={classes.class_name}><span>Giáo viên: </span>{element.name}</h3>
            //         <p className={classes.class_teacher}><span>Email: </span>{element.email}</p>
            //         <p className={classes.class_number}><span>Giới tính: </span>{element.sex == 0 ? "Nữ" : "Nam"}</p>
            //         <a href={`http://localhost:3000/profileTeacher/:${element.user}`} target="_blank" >Thông tin</a>
            //     </div>
            // </div>

            <div className={classes.item}>
              <div className={classes.item_image}>
                <img
                  src={
                    element.avatar == null
                      ? image
                      : "http://127.0.0.1:8000/static" + element.avatar
                  }
                  alt="ảnh giáo viên"
                />
              </div>
              <div className={classes.item_name}>Giáo viên: {element.name}</div>
              <div className={classes.item_position}>Id : {element.user}</div>
              <a
                href={`http://localhost:3000/profileTeacher/:${element.user}`}
                target="_blank"
              >
                {" "}
                Thông tin chi tiết
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeacherList;
