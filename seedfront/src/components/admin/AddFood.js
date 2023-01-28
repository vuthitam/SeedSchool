import { ClassOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import classes from "../../assets/CSS/admin/AddFood.module.css";
import noFileChosenYet from "../../assets/Icons/nofilechosenyet.png";
import axios from "axios";

const AddFood = (props) => {
  const [avatar, setAvatar] = useState(noFileChosenYet);
  // const [pickDay, setPickDay] = useState(0);
  const [foodName, setFoodName] = useState();
  const [section, setSection] = useState();
  const [fileImg, setFileImg] = useState();

  const handleChangeSection = (e) => {
    const { name, value } = e.target;
    setSection(value);
    console.log(value);
  };

  // const handlePickDay = (e) => {
  //   setPickDay(e.target.value);
  // };

  const handleFoodName = (e) => {
    setFoodName(e.target.value);
  };

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
    setFileImg(event.target.files[0]);
  };

  const pushFood = () => {
    async function pushFood() {
      let data = new FormData();
      data.append("name", foodName);
      data.append("image", fileImg);
      data.append("menu", props.idDay);
      data.append("sesion", section);
      console.log("test");
      console.log(props.idDay);
      console.log(data);
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/menus/" + props.idDay + "/sesion/" + section,
          data
        );
        props.increase();
        props.turnOffAddingFood();
      } catch {
        alert("there are smth wrong!!!");
      }
    }
    pushFood();
  };

  return (
    <>
      <div className={classes.popup}>
        <div className={classes.popup_content}>
          <h2 id="popup_title">Chỉnh sửa thực đơn</h2>
          <div className={classes.flex_container}>
            <form action="#">
              <div className={classes.radioPick}>
                <div id="radioWrapper">
                  <input
                    type="checkbox"
                    id="breakfast1"
                    name="breakfast1"
                    value="0"
                    onChange={handleChangeSection}
                  />
                  <label className={classes.lblRadio} for="breakfast1">
                    {" "}
                    Breakfast{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="lunch1"
                    name="lunch1"
                    value="1"
                    onChange={handleChangeSection}
                  />
                  <label className={classes.lblRadio} for="lunch1">
                    {" "}
                    Lunch{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="dinner1"
                    name="dinner1"
                    value="2"
                    onChange={handleChangeSection}
                  />
                  <label className={classes.lblRadio} for="dinner1">
                    {" "}
                    Dinner{" "}
                  </label>
                </div>
              </div>
              <div className={classes.inputInfor}>
                {/* <label htmlFor="" className={classes.selectDay}>
                  Chọn ngày:
                </label>
                <select name="daypick" className={classes.selectDay}>
                  <option value="0" onClick={() => setPickDay(0)}>
                    Thứ 2
                  </option>
                  <option value="1" onClick={() => setPickDay(1)}>
                    Thứ 3
                  </option>
                  <option value="2" onClick={() => setPickDay(2)}>
                    Thứ 4
                  </option>
                  <option value="3" onClick={() => setPickDay(3)}>
                    Thứ 5
                  </option>
                  <option value="4" onClick={() => setPickDay(4)}>
                    Thứ 6
                  </option>
                  <option value="5" onClick={() => setPickDay(5)}>
                    Thứ 7
                  </option>
                </select> */}
              </div>
              <div className={classes.inputInfor}>
                <input
                  type="text"
                  className={classes.inputControl}
                  placeholder="Tên món ăn"
                  onChange={handleFoodName}
                />
              </div>
            </form>
            <div className={classes.inputFile}>
              <div className={classes.img_place}>
                <img src={avatar} className={classes.avatarFood} />
              </div>
              <input
                className={ClassOutlined.fileInput}
                type="file"
                onChange={onChange}
              />
            </div>
          </div>
          <div className={classes.btn_container}>
            <button className={classes.addBtn} onClick={pushFood}>
              Thêm
            </button>
            <button
              className={classes.cancel__Btn}
              onClick={props.turnOffAddingFood}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;
