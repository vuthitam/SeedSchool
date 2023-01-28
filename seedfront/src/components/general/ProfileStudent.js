import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/general/ProfileStudent.module.css";

const ProfileStudent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Student, setStudent] = useState([]);
  const [teacherId, setTeacherId] = useState(-1);
  const [teacher, setTeacher] = useState("Chưa có giáo viên");
  const [classs, setClasss] = useState("Chưa có lớp");
  const [image, setImage] = useState(
    "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png "
  );

  //Lay thong tin hoc sinh
  useEffect(() => {
    async function fetchStudentProfile() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://127.0.0.1:8000/students/" + props.id + "/profile"
        );

        const data = await response.json();
        
        console.log(data)

        if (data.avatar != null)
          setImage("http://127.0.0.1:8000/static" + data.avatar);

        setStudent(data);
        setIsLoading(false);
      } catch {
        alert("err1");
      }
    }
    fetchStudentProfile();
  }, []);

  //Lay thong tin giao vien cua hoc sinh do
  //Student can temporarily not have any teacher
  useEffect(() => {
    async function fetchTeacher() {
      setIsLoading(true);
      const response = await fetch(
        "http://127.0.0.1:8000/students/" + props.id + "/teachers"
      );
      const data = await response.json();
      if (data.user !== null) {
        setTeacher(data.name);
        setTeacherId(data.user);
      }
      setIsLoading(false);
    }
    fetchTeacher();
  }, [Student]);

  //Lay thong tin ve lop cua hoc sinh thong qua giao vien
  useEffect(() => {
    async function fetchClass() {
      setIsLoading(true);
      if (Student.classes === undefined) {
        return;
      }
      
      const response = await fetch(
        "http://127.0.0.1:8000/classes/" + Student.classes
      );
      const data = await response.json();
      setClasss(data.name);
      setIsLoading(false);
    }
    fetchClass();

  }, [teacherId]);

  return (
    <>
      <div className={classes.popup} onClick={props.closeStudent} />
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.heart_icon}>
            <i className={classes["ti-heart"]}></i>
          </div>
          <div className={classes.profile_img}>
            <img src={image} alt="ảnh bé" />
          </div>
          <div className={classes.profile_name}>{Student.name}</div>
        </div>
        <div className={classes.right}>
          <div className={classes.close_icon}>
            <i className={classes["ti-close"]}></i>
          </div>
          <div className={classes.profile_title}>Thông tin chi tiết</div>
          <div className={classes.infor}>
            <div className={classes.profile_class}>Lớp: {classs}</div>
            <div className={classes.profile_age}>Tuổi: {Student.age}</div>
            <div className={classes.homeroom_teacher}>
              Giáo viên chủ nhiệm: {teacher}
            </div>
            <div className={classes.address}>Địa chỉ: {Student.address}</div>
            <div className={classes.name_parent}>
              Họ tên phụ huynh: {Student.nameparent}
            </div>
            <div className={classes.phone}>
              <i className={classes["ti-mobile"]}></i>Số điện thoại:{" "}
              {Student.phoneparent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileStudent;
