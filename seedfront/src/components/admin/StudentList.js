import { Create } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/admin/Classes.module.css";
import button from "../../assets/CSS/general/AddButton.module.css";
// import Students from '../../assets/DummyData/Teachers/StudentList'

const StudentList = (props) => {
  const [Students, setStudents] = useState([]);
  const [image, setImage] = useState(
    "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  );

  //Lay data toan bo hoc sinh
  useEffect(() => {
    async function fetchAllStudent() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/students");
        // const data = await response.json();
        setStudents(res.data);
      } catch {
        console.log("Error");
      }
    }

    fetchAllStudent();

  }, []);

  return (
    <>
      <div className={classes.container}>
        <button className={button.btn} onClick={props.addStudent}>
          <Create />
        </button>
        <div className={classes.container_content}>
          {Students.map((element) => (
            // <div className={classes.item}>

            //   <img
            //     src={
            //       element.avatar == null
            //         ? image
            //         : "http://127.0.0.1:8000/static" + element.avatar
            //     }
            //     alt="ảnh bé"
            //   />
            //   <div className={classes.content_item}>
            //     <h3 className={classes.class_name}>
            //       <span>Béo: </span>
            //       {element.name}
            //     </h3>
            //     <p className={classes.class_teacher}>
            //       <span>Email: </span>
            //       {element.email}
            //     </p>
            //     <p className={classes.class_number}>
            //       <span>Giới tính: </span>
            //       {element.sex == 0 ? "Nữ" : "Nam"}
            //     </p>
            //     <button
            //       className={classes.content_item_btn}
            //       onClick={() => props.onOpenStudent(element.user)}
            //     >
            //       Thông tin
            //     </button>
            //   </div>
            // </div>
            <div className={classes.item}>
              <div className={classes.item_image}>
                <img
                  src={
                    element.avatar == null
                      ? image
                      : "http://127.0.0.1:8000/static" + element.avatar
                  }
                  alt="ảnh bé"
                />
              </div>
              <div className={classes.item_name}>Học sinh: {element.name}</div>
              <div className={classes.item_position}>ID: {element.user}</div>
              <button onClick={() => props.onOpenStudent(element.user)}>
                {" "}
                Thông tin chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentList;
