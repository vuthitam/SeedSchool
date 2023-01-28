import React, { useState } from "react";
import styles from "../../assets/CSS/admin/AddClass.module.css";
import axios from "axios";

const AddClass = (props) => {
  const [gvName, setGVName] = useState();
  //gvName chinh la id giao vien
  console.log(props.id);
  const handleTeacherName = (event) => {
    setGVName(event.target.value);
  };

  const addTeacherToClass = () => {
    async function addTeacherToClass() {
      const data = {
        id: props.id,
        teacher: gvName,
      };
      try {
        const res = await axios.put(
          "http://127.0.0.1:8000/classes/" + props.id + "/",
          data
        );
        console.log(data);
      } catch {
        alert("Error 500");
      }
    }
    addTeacherToClass();
  };

  return (
    <>
      <div className={styles.turnOff} onClick={props.closeAddClass}></div>
      <div className={styles.container_contact1}>
        <div>
          <span className={styles.contact1_form_title}> Thêm giáo viên </span>
        </div>
        
        <div className={styles.wrap_input1} className={styles.validate_input}> 
          <input
            className={styles.input1}
            type="text"
            placeholder="ID giáo viên"
            onChange={handleTeacherName}
          />
        </div>

        <div className={styles.container_contact1_form_btn}>
          <button
            className={styles.contact1_form_btn}
            onClick={addTeacherToClass}
          >
            Thêm
          </button>
        </div>
      </div>
    </>
  );
};

export default AddClass;
