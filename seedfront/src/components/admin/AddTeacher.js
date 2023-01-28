import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddTeacher.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";
import axios from "axios";

const AddTeacher = (props) => {
  const [avatar1, setAvatar] = useState(noFileChosenYet);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  //Xu ly khi file input anh thay doi
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
    }
  };

  //Xu ly khi input thay doi
  const onUsernameHandle = (event) => {
    setUsername(event.target.value);
  };

  const onEmailHandle = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandle = (event) => {
    setPassword(event.target.value);
  };

  //Dang ki moi 1 giao vien
  const Register = () => {
    async function register() {
      const data = {
        email: email,
        password: password,
        name: username,
        username: email,
        role: 1,
      };
      try {
        const res = await axios.post("http://127.0.0.1:8000/register/", data);
        console.log("Successful");
        props.closeAddTeacher();
      } catch {
        alert("Wrong email or password");
      }
    }
    register();
  };

  return (
    <>
      <div className={classes.popup} onClick={props.closeAddTeacher} />
      <div className={classes.container}>
        <div className={classes.right}>
          <h2>Thêm giáo viên</h2>
          <input
            type="text"
            placeholder="Họ và tên giáo viên"
            onChange={onUsernameHandle}
          />
          <input type="text" placeholder="Gmail" onChange={onEmailHandle} />
          <input
            type="text"
            placeholder="Mật khẩu"
            onChange={onPasswordHandle}
          />
          <button onClick={Register}>Thêm</button>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
