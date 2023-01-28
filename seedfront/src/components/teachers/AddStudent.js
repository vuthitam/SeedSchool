import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddTeacher.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";
import axios from "axios";

const AddStudent = (props) => {
  const [email, setEmail] = useState();

  const onEmailHandle = (event) => {
    setEmail(event.target.value);
  };

  //Them 1 hoc sinh vao lop
  const Add = async () => {
    const data = {
      email: email,
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/teachers/" +
          localStorage.getItem("id") +
          "/students",
        data
      );
      props.closeAddStudent();
      console.log(res.data);
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddStudent} />
      <div className={classes.container}>
        <div className={classes.right}>
          <h2>Thêm học sinh</h2>
          <input type="text" placeholder="Gmail" onChange={onEmailHandle} />
          <button onClick={Add}>Thêm</button>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
