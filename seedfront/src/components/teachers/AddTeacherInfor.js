import axios from "axios";
import React, { useState } from "react";
import styles from "../../assets/CSS/parents/AddStudentInfor.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";
axios.defaults.withCredentials = true;

const AddTeacherInfor = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [sex, setSex] = useState(0);
  const [file, setFile] = useState();
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [achievement, setAchivement] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAchivement = (event) => {
    setAchivement(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleSex = (event) => {
    setSex(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const [avatar, setAvatar] = useState(noFileChosenYet);
  const onChange = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const result = reader.result;
        setAvatar(result);
      };
      setFile(event.target.files[0]);
    }
  };

  const Update = async () => {
    let data = new FormData();
    data.append("user", localStorage.getItem("id"));
    console.log(localStorage.getItem("id"));
    data.append("avatar", file);
    data.append("name", name);
    data.append("sex", sex);
    data.append("achievement", achievement);
    data.append("phone", phoneNumber);
    data.append("address", address);
    data.append("age", age);
    data.append("position", email);
    console.log(data);
    console.log();
    try {
      const res = await axios.put(
        "http://127.0.0.1:8000/teachers/" +
          localStorage.getItem("id") +
          "/profile",
        data
      );
      alert("Success!");
    } catch {
      alert("wrong input");
    }
  };

  return (
    <>
      <div className={styles.popup_content}>
        <h2 id="popup_title">Thêm thông tin cá nhân</h2>
        <div className={styles.flex_container}>
          <form action="#" className={styles.formStyle}>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Họ và tên"
                onChange={handleName}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Thành tích"
                onChange={handleAchivement}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Số điện thoại"
                onChange={handlePhoneNumber}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Giới tính (1: nam 0: nữ)"
                onChange={handleSex}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Địa chỉ"
                onChange={handleAddress}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Học vấn"
                onChange={handleEmail}
              />
            </div>
            <div className={styles.inputInforStudent}>
              <input
                type="text"
                className={styles.inputControl}
                placeholder="Tuổi"
                onChange={handleAge}
              />
            </div>
          </form>
          <div className={styles.left}>
            <div className={styles.img_place}>
              <img src={avatar} />
            </div>
            <input type="file" onChange={onChange} />
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.addBtn} onClick={Update}>
            Thêm
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTeacherInfor;
