import React, { useState, useEffect } from "react";
import classes from "../../assets/CSS/admin/Admin.module.css";
import Nav from "../general/Nav";
import PersonalAnnoun from "./PersonalAnnoun";
// import avatar from '../../assets/Icons/momo.jpg'
import ParentsActivities from "./ParentsActivities";
import {
  CalendarToday,
  FoodBank,
  Payment,
  Accessibility,
  Campaign,
  CastForEducation,
  Check,
  PermIdentity,
} from "@mui/icons-material";
import Calendar from "../general/ParentSchedule";
import Checkin from "./Calendar";
import ProfileTeacher from "../general/ProfileTeacher";
import ProfileStudent from "../general/ProfileStudent";
import TimeTable from "../general/TimeTable";
import Menu from "./ParentMenu";
import ViewActivities from "./ViewActivities";
import ViewTeacher from "./ViewTeacher";
import Comment from "./Comment";
import AddStudentInfor from "./AddStudentInfor";
import ParentFee from "./ParentFee";
import axios from "axios";

const Parents = (props) => {
  const [classname, setclassname] = useState();
  const [require, setRequire] = useState(0);
  const [profile, setProfile] = useState(0);
  const [teacherId, setTeacherId] = useState();
  const [acti, setActi] = useState(0);
  const [addingComment, setAddingComment] = useState(0);
  const [avatar, setAvatar] = useState(
    "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  );
  const [name, setName] = useState("");
  const [SudentInfor, setStudenInfor] = useState(0);

  const onProfile = () => {
    setProfile(1);
  };

  const closeStudent = () => setProfile(0);

  const onOpenActi = (id) => setActi(id);

  const onCloseActi = () => setActi(0);

  const onAddComment = () => setAddingComment(1);

  const closeAddComment = () => {
    setRequire(10);
    setRequire(5);
    setAddingComment(0);
  };

  //Lay thong tin hoc sinh
  useEffect(() => {
    async function fetchStudent() {
      const studentProfileResponse = await fetch(
        "http://127.0.0.1:8000/students/" +
          localStorage.getItem("id") +
          "/profile"
      );
      const data = await studentProfileResponse.json();
  
      //avatar is null then we ignore, later we will use default avatar
      if (data.avatar != null)
        setAvatar("http://127.0.0.1:8000/static" + data.avatar);
  
      setName(data.name);
      setTeacherId(data.idteacher);
    }
    fetchStudent();
  }, []);

  //lay thong tin ve lop
  useEffect(() => {
    async function fetchClassOfStudent() {
      const res = await axios.get(
        "http://127.0.0.1:8000/students/" + teacherId + "/teachers"
      );
      setclassname(res.data.name);
    }
    fetchClassOfStudent();
  });

  //Lay thong tin giao vien
  useEffect(() => {
    async function fetchStudentTeacher() {
      // setIsLoading(true)
      const response = await fetch(
        "http://127.0.0.1:8000/students/" +
          localStorage.getItem("id") +
          "/teachers"
      );
      const data = await response.json();
      // setTeacher(data.name)
      console.log(data.user);
      setTeacherId(data.user);
      // setIsLoading(false)
    }
    fetchStudentTeacher();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.controller}>
          <h1>Parent</h1>
          <button
            style={{ backgroundColor: require == 0 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(0)}
          >
            <FoodBank
              style={{ color: require == 0 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 0 ? "#FFF" : "#C0C0C0" }}>
              Thực đơn
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 6 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(6)}
          >
            <CalendarToday
              style={{ color: require == 6 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 6 ? "#FFF" : "#C0C0C0" }}>
              Thời khóa biểu
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 1 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(1)}
          >
            <Check
              style={{ color: require == 1 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 1 ? "#FFF" : "#C0C0C0" }}>
              Điểm danh
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 2 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(2)}
          >
            <Accessibility
              style={{ color: require == 2 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 2 ? "#FFF" : "#C0C0C0" }}>
              Hoạt động chung
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 3 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(3)}
          >
            <Campaign
              style={{ color: require == 3 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 3 ? "#FFF" : "#C0C0C0" }}>
              Thông báo
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 4 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(4)}
          >
            <Payment
              style={{ color: require == 4 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 4 ? "#FFF" : "#C0C0C0" }}>
              Học phí
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 5 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(5)}
          >
            <CastForEducation
              style={{ color: require == 5 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 5 ? "#FFF" : "#C0C0C0" }}>
              Giáo viên chủ nhiệm
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 7 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(7)}
          >
            <PermIdentity
              style={{ color: require == 7 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 7 ? "#FFF" : "#C0C0C0" }}>
              Thêm thông tin học sinh
            </h4>
          </button>
        </div>

        {profile == 1 && (
          <ProfileStudent
            id={localStorage.getItem("id")}
            closeStudent={closeStudent}
          />
        )}
        {acti != 0 && <ViewActivities id={acti} onCloseActi={onCloseActi} />}
        {addingComment == 1 && (
          <Comment closeAddComment={closeAddComment} id={teacherId} />
        )}

        <div className={classes.additional}>
          <Nav avatar={avatar} onProfile={onProfile} />
          {require == 0 && <Menu />}
          {require == 6 && (
            <Calendar teacherId={teacherId} className={classname} />
          )}
          {require == 2 && <ParentsActivities onOpenActi={onOpenActi} />}
          {require == 3 && <PersonalAnnoun />}
          {require == 7 && <AddStudentInfor />}
          {require == 1 && <Checkin />}
          {require == 4 && <ParentFee />}
          {/* {require == 3 && <Classes />} */}
          {require == 5 && (
            <ViewTeacher id={teacherId} onAddComment={onAddComment} />
          )}
        </div>
      </div>
    </>
  );
};

export default Parents;
