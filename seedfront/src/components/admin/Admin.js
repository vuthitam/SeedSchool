import React, { useState } from "react";
import classes from "../../assets/CSS/admin/Admin.module.css";
import Nav from "../general/Nav";
import avatar from "../../assets/Icons/defaultavatar.png";
import Menu from "./Menu";
import AdminActivities from "./AdminActivities";
import AdminAnounn from "./AdminAnounn";
import Classes from "./Classes";
import TeacherList from "./TeacherList";
import {
  Accessibility,
  Campaign,
  ChildCare,
  FoodBank,
  Group,
  PeopleAlt,
  CalendarToday,
  MoneyRounded,
} from "@mui/icons-material";
import EditMenu from "./EditMenu";
import AddTeacher from "./AddTeacher";
import AddClass from "./AddClass";
import AddActivities from "./AddActivities";
import AddAnounn from "./AddAnounn";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import ProfileStudent from "../general/ProfileStudent";
import ViewActivities from "./ViewActivities";
import ProfileTeacher from "../general/ProfileTeacher";
import Schedule from "../admin/AdminSchedule";
import AddFood from "./AddFood";
import AdminFee from "./AdminFee";

const Admin = (props) => {
  const [isEditMenu, setIsEditMenu] = useState(0);
  const [require, setRequire] = useState(0);
  const [addingTeacher, setAddingTeacher] = useState(0);
  const [addingClass, setAddingClass] = useState(0);
  const [addingActivities, setAddingActivities] = useState(0);
  const [addingAnounn, setAddingAnounn] = useState(0);
  const [addingStudent, setAddingStudent] = useState(0);
  const [openStudent, setOpenStudent] = useState(0);
  const [acti, setActi] = useState(0);
  const [openTeacher, setOpenTeacher] = useState(0);
  const [openSchedule, setOpenSchedule] = useState(0);

  const onOpenSchedule = () => setOpenSchedule(1);

  const onCloseSchedule = () => setOpenSchedule(0);

  const addClass = (id) => setAddingClass(id);

  const closeAddClass = () => {
    console.log("clicked");
    setRequire(69);
    setRequire(3);
    setAddingClass(0);
  };

  const onTurnOnEditMenu = () => setIsEditMenu(1);

  const onTurnOffEditMenu = () => setIsEditMenu(0);

  const addAnounn = () => setAddingAnounn(1);

  const closeAddAnounn = () => {
    setRequire(69);
    setRequire(2);
    setAddingAnounn(0);
  };

  const addActivities = () => setAddingActivities(1);

  const closeAddActivities = () => {
    setRequire(10);
    setRequire(1);
    setAddingActivities(0);
  };
  const addTeacher = () => setAddingTeacher(1);

  const onOpenTeacher = (id) => setOpenTeacher(id);

  const onOpenStudent = (id) => setOpenStudent(id);

  const closeStudent = () => setOpenStudent(0);

  const onOpenActi = (id) => setActi(id);

  const onCloseActi = () => {
    setRequire(10);
    setRequire(1);
    setActi(0);
  };
  const closeAddTeacher = () => {
    setRequire(10);
    setRequire(4);
    setAddingTeacher(0);
  };

  const addStudent = () => setAddingStudent(1);

  const closeAddStudent = () => {
    setRequire(10);
    setRequire(5);
    setAddingStudent(0);
  };

  const reRender = () => {
    const tmp = require;
    setRequire(69);
    setRequire(tmp);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.controller}>
          <h1>Admin</h1>
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
            style={{ backgroundColor: require == 1 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(1)}
          >
            <Accessibility
              style={{ color: require == 1 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 1 ? "#FFF" : "#C0C0C0" }}>
              Hoạt động chung
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 2 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(2)}
          >
            <Campaign
              style={{ color: require == 2 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 2 ? "#FFF" : "#C0C0C0" }}>
              Thông báo
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 3 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(3)}
          >
            <Group
              style={{ color: require == 3 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 3 ? "#FFF" : "#C0C0C0" }}>
              Quản lý lớp học
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 4 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(4)}
          >
            <PeopleAlt
              style={{ color: require == 4 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 4 ? "#FFF" : "#C0C0C0" }}>
              Quản lý giáo viên
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 5 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(5)}
          >
            <ChildCare
              style={{ color: require == 5 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 5 ? "#FFF" : "#C0C0C0" }}>
              Quản lý học sinh
            </h4>
          </button>
          <button
            style={{ backgroundColor: require == 11 ? "#1877f2" : "#FFF" }}
            onClick={() => setRequire(11)}
          >
            <MoneyRounded
              style={{ color: require == 11 ? "#FFF" : "#1877f2" }}
              className={classes.icon}
            />
            <h4 style={{ color: require == 11 ? "#FFF" : "#C0C0C0" }}>
              Quản lý học phí
            </h4>
          </button>
          {/* <button
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
          </button> */}
        </div>

        {isEditMenu == 1 && console.log("asdfasdf")}
        {addingActivities == 1 && (
          <AddActivities closeAddActivities={closeAddActivities} />
        )}
        {addingAnounn == 1 && <AddAnounn closeAddAnounn={closeAddAnounn} />}
        {addingClass != 0 && (
          <AddClass closeAddClass={closeAddClass} id={addingClass} />
        )}
        {addingTeacher == 1 && <AddTeacher closeAddTeacher={closeAddTeacher} />}
        {addingStudent == 1 && <AddStudent closeAddStudent={closeAddStudent} />}
        {openStudent != 0 && (
          <ProfileStudent id={openStudent} closeStudent={closeStudent} />
        )}
        {openTeacher != 0 && <ProfileTeacher id={openTeacher} />}
        {acti != 0 && <ViewActivities id={acti} onCloseActi={onCloseActi} />}

        <div className={classes.additional}>
          <Nav avatar={avatar} />
          {require == 0 && (
            <Menu onTurnOnEditMenu={onTurnOnEditMenu} setRequire={setRequire} />
          )}
          {require == 1 && (
            <AdminActivities
              addActivities={addActivities}
              onOpenActi={onOpenActi}
            />
          )}
          {require == 2 && <AdminAnounn addAnounn={addAnounn} />}
          {require == 3 && (
            <Classes addClass={addClass} setRequire={setRequire} />
          )}
          {require == 4 && (
            <TeacherList
              addTeacher={addTeacher}
              onOpenTeacher={onOpenTeacher}
            />
          )}
          {require == 5 && (
            <StudentList
              addStudent={addStudent}
              onOpenStudent={onOpenStudent}
            />
          )}
          {require == 6 && (
            <Schedule
              onOpenSchedule={onOpenSchedule}
              onCloseSchedule={onCloseSchedule}
            />
          )}
          {require == 11 && <AdminFee />}
        </div>
      </div>
    </>
  );
};

export default Admin;
