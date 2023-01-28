import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../../assets/CSS/general/ProfileTeacher.module.css";
// import avatar from '../../assets/Icons/teacher.jpg'

const ProfileTeacher = (props) => {
  const [teacher, setTeacher] = useState({});
  const [classs, setClasss] = useState();
  const [comment, setComment] = useState([]);
  const [avatar1, setAvatar] = useState(
    "https://www.steam-ed.ie/wp-content/uploads/2021/08/Female-Avatar.jpeg"
  );
  //Load data ve giao vien
  useEffect(() => {
    async function fetchTeacherProfile(){
      try {
        const res1 = await axios.get(
          "http://127.0.0.1:8000/teachers/" + props.id + "/profile"
        );
        setTeacher(res1.data);
      } catch {
        console.log("Error");
      }
    }
    fetchTeacherProfile();
  }, []);

  //Load data ve loi nhan xet
  useEffect(() => {
    async function fetchTeacherThank() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/teachers/" + props.id + "/thank"
        );
        setComment(res.data);
      } catch {
        console.log("Error");
      }
    }
    fetchTeacherThank();
  }, []);

  return (
    <>
      {/* <div className={classes.profile}>
        <div className={classes.profile_body}>
          <div className={classes.details_profile}>
            <div className={classes.background_name}>
              <div className={classes.name}>
                <h1 className={classes.name_teacher}>{teacher.name}</h1> */}
      {/* <p>Hiệu phó</p> */}
      {/* </div>
            </div>
            <div className={classes.information}>
              <h2 className="profile_title details_title">THÔNG TIN CƠ BẢN</h2>
              <p className={classes.details_content}>
                <i className={classes["ti-bolt"]}></i>
                <p>Giới tính: {teacher.sex == 1 ? "Nam" : "Nữ"}</p>{" "}
              </p>
              <p className={classes.details_content}>
                <i className={classes["ti-bolt"]}></i>{" "}
                <p>Thành tích: {teacher.achievement}</p>
                <p>Tuổi : {teacher.age}</p>
              </p>
              <div className={classes.class_master}>
                <p className={classes.class_master_title}>Lớp phụ trách</p>
                <p>
                  <i className={classes["ti-control-play"]}></i> {classs}
                </p>
              </div>
            </div>
            <div className={classes.comment}>
              <p className={classes.comment_title}>Nhận xét</p>
              <ul className={classes.comment_content}>
                {comment.map((element) => (
                  <li className={classes.comment_item}>
                    <div className={classes.item_content}>
                      <h3 className={classes.commentator}>Đào Xuân An</h3>
                      <p className={classes.content}>{element.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={classes.introduce_profile}>
            <div className={classes.body_img}>
              <img
                src={
                  teacher.avatar == null
                    ? avatar1
                    : "http://127.0.0.1:8000/static" + teacher.avatar
                }
                alt="sdasdgd"
                className={classes.profileImage}
              />
            </div>
            <div className={classes.contact}>
              <h2 className={classes.profile_title}>THÔNG TIN LIÊN HỆ</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-mobile"]}></i>{" "}
                <p>Số điện thoại: {teacher.phone}</p>
              </p>
              <p className={classes.profile_content}>
                <i className={classes["ti-email"]}></i> {teacher.email}
              </p>
            </div>
            <div className={classes.education}>
              <h2 className={classes.profile_title}>HỌC VẤN</h2>
              <p className={classes.profile_content}>
                <i className={classes["ti-star"]}></i> Tốt nghiệp loại giỏi đại
                học sư phạm Hà Nội
              </p>
            </div>
            <div className={classes.position}></div>
          </div>
        </div>
      </div> */}

      <div className={classes.contai}>
        <div className={classes.infor_}>
          <div className={classes.image_avatar}>
            <img
              src={
                teacher.avatar == null
                  ? avatar1
                  : "http://127.0.0.1:8000/static" + teacher.avatar
              }
              alt=""
            />
          </div>
          <div className={classes.infor_detail}>
            <div className={classes.introduce}>
              <span className={classes._span}>Giới thiệu</span> <br /> Là 1 giáo
              viên suất sắc trong 50 năm qua, nhiều thành tích đáng nể, rất yêu
              thương và chiều chuộng trẻ em, chỉ là mới ra tù được 2 năm{" "}
            </div>
            <div className={classes.position}>
              <span className={classes._span}>Học vấn:</span> {teacher.position}
            </div>
            <div className={classes.sex}>
              <span className={classes._span}>Giới tính:</span>{" "}
              {teacher.sex == 1 ? "Nam" : "Nữ"}
            </div>
            <div className={classes.age}>
              <span className={classes._span}>Tuổi: </span>
              {teacher.age}
            </div>
            <div className={classes.phone}>
              <span className={classes._span}>Số điện thoại: </span>
              {teacher.phone}
            </div>
            <div className={classes.address}>
              <span className={classes._span}>Địa chỉ:</span> {teacher.address}
            </div>
          </div>
        </div>
        <div className={classes.backdrop}>
          <div className={classes.logo}>SeedSchool</div>
          <div className={classes.infor}>
            <div className={classes.name}>{teacher.name}</div>
            <div className={classes.slogan}>
              <i>Slogan: Việc khó cứ để SeedSchool lo</i>
            </div>
          </div>
        </div>
        <div className={classes.about}>
          <div className={classes.achievement}>
            <div className={classes.name_achievement}>Thành tích</div>
            <div className={classes.content_achievement}>
              {teacher.achievement}
            </div>
          </div>
          <div className={classes.comments}>
            {comment.map((para) => {
              return (
                <div className={classes.comment}>
                  <div className={classes.avatar_user}>
                    <img
                      src={
                        para.avatar == null
                          ? "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                          : "http://127.0.0.1:8000/static/" + para.avatar
                      }
                      alt=""
                    />
                  </div>
                  <div className={classes.content_comment}>
                    <div className={classes.name_user}>
                      Phụ huynh bé {para.student_name}
                    </div>
                    <div className={classes.comment_user}>{para.comment}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacher;
