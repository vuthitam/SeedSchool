import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/admin/Admin.module.css";
import Nav from "../general/Nav";
import TeachersActivities from "./TeachersActivities";
import TimeTable from "./TeacherSchedule";
import ProfileTeacher from "../general/ProfileTeacher";
import avatar from "../../assets/Icons/teacher.jpg";
import {
  CalendarToday,
  FoodBank,
  Payment,
  Accessibility,
  Group,
  Check,
  Create,
  PermIdentity,
  Notifications,
} from "@mui/icons-material";
import StudentList from "./StudentList";
import AddCheck from "./AddCheck";
import AddStudent from "./AddStudent";
import CreateClass from "./CreateClass";
import AddTimeTable from "./AddTimeTable";
import ProfileStudent from "../general/ProfileStudent";
import ViewActivities from "./ViewActivities";
import axios from "axios";
import AddTeacherInfor from "./AddTeacherInfor";
import History from "./History";
import TeacherAnnoun from "./Personal2Announ";
import Calendar from "./Calendar";

const Teachers = (props) => {
  const [history, setHistory] = useState(0);
  const [check, setCheck] = useState(0);
  const [require, setRequire] = useState(5);
  const [addingStudent, setAddingStudent] = useState(0);
  const [addingTimeTable, setAddingTimeTable] = useState(0);
  const [openStudent, setOpenStudent] = useState(0);
  const [acti, setActi] = useState(0);
  const [avatar, setAvatar] = useState(
    "https://www.steam-ed.ie/wp-content/uploads/2021/08/Female-Avatar.jpeg"
  );
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState({});
  //Load data ve giao vien
  useEffect(() => {
    async function a() {
      try {
        const res1 = await axios.get(
          "http://127.0.0.1:8000/teachers/" + localStorage.getItem("id")
        );
        setTeacher(res1.data);
        console.log(avatar);
      } catch {
        console.log("Error");
      }
    }
    a();
  }, []);

  const onProfile = () => setRequire(5);

  const onCheck = (id) => {
    console.log(id);
    setCheck(id);
  };

  const onAddTimeTable = () => {
    console.log("alo");
    setAddingTimeTable(1);
  };

  const closeAddCheck = () => setCheck(0);

  const onAddStudent = () => setAddingStudent(1);

  const closeAddStudent = () => {
    setRequire(10);
    setRequire(4);
    setAddingStudent(0);
  };

  const closeAddTimeTable = () => {
    setRequire(10);
    setRequire(0);
    setAddingTimeTable(0);
  };

  const onOpenStudent = (id) => setOpenStudent(id);

  const closeStudent = () => setOpenStudent(0);

  const onOpenActi = (id) => setActi(id);

  const onCloseActi = () => setActi(0);

  const onShowHistory = () => setHistory(1);

  const onHideHistory = () => setHistory(0);

  // //Lay thong tin giao vien
  // useEffect(async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://127.0.0.1:8000/teachers/" +
  //         localStorage.getItem("id") +
  //         "/update"
  //     );
  //     console.log(res.data);
  //     setName(res.data.name);
  //     if (res.data.avatar != null)
  //       setAvatar("http://127.0.0.1:8000/static" + res.data.avatar);
  //   } catch {
  //     console.log("Error");
  //   }
  // }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.controller}>
          <h1>Teacher</h1>
          <button
            style={{ backgroundColor: require == 0 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(0)}
          >
            <CalendarToday
              style={{ color: require == 0 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 0 ? "#FFF" : "#C0C0C0" }}>
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
            style={{ backgroundColor: require == 4 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(4)}
          >
            <Group
              style={{ color: require == 4 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 4 ? "#FFF" : "#C0C0C0" }}>
              Quản lý lớp học
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
              Thêm thông tin cá nhân
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 8 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(8)}
          >
            <Notifications
              style={{ color: require == 8 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 8 ? "#FFF" : "#C0C0C0" }}>
              Thông báo
            </h4>
          </button>
        </div>

        {history == 1 && <History onHideHistory={onHideHistory} />}
        {addingTimeTable == 1 && (
          <AddTimeTable closeAddTimeTable={closeAddTimeTable} />
        )}
        {check != 0 && <AddCheck id={check} closeAddCheck={closeAddCheck} />}
        {addingStudent == 1 && <AddStudent closeAddStudent={closeAddStudent} />}
        {addingTimeTable == 1 && (
          <AddTimeTable closeAddTimeTable={closeAddTimeTable} />
        )}
        {openStudent != 0 && (
          <ProfileStudent id={openStudent} closeStudent={closeStudent} />
        )}
        {acti != 0 && <ViewActivities id={acti} onCloseActi={onCloseActi} />}

        <div className={classes.additional}>
          <Nav avatar={avatar} onProfile={onProfile} />
          {require == 0 && (
            <TimeTable
              onAddTimeTable={onAddTimeTable}
              onShowHistory={onShowHistory}
            />
          )}
          {require == 1 && <Calendar onCheck={onCheck} />}
          {require == 2 && <TeachersActivities onOpenActi={onOpenActi} />}
          {require == 4 && (
            <StudentList
              onAddStudent={onAddStudent}
              onOpenStudent={onOpenStudent}
            />
          )}
          {require == 5 && <ProfileTeacher id={localStorage.getItem("id")} />}
          {require == 7 && <AddTeacherInfor />}
          {require == 8 && <TeacherAnnoun />}
        </div>
      </div>
    </>
  );
};

export default Teachers;
