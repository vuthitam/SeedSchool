import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "../../assets/CSS/admin/Day.module.css";
import styled from "styled-components";
import { Create, FoodBank } from "@mui/icons-material";
import button from "../../assets/CSS/general/AddButton.module.css";
import BrkList from "../../assets/DummyData/Breakfast";
import LunchList from "../../assets/DummyData/Lunch";
import DinnerList from "../../assets/DummyData/Dinner";
import header1 from "../../assets/DummyData/Admin/ImageMenu/header1.jpg";
import header2 from "../../assets/DummyData/Admin/ImageMenu/header2.jpg";
import header3 from "../../assets/DummyData/Admin/ImageMenu/header3.jpg";

const ParentDay = (props) => {
  const [meal, setMeal] = useState(0);
  const [listOfFood, setListOfFood] = useState([]);
  const [tmp, setTmp] = useState(header1);

  useEffect(() => {
    async function a() {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/menus/" + props.id + "/sesion/" + meal
        );
        // const data = await response.json();
        setListOfFood(res.data);
      } catch {
        console.log("Error loading food");
      }
    }
    a();
  }, [meal, listOfFood]);

  return (
    <>
      <div className={classes.btnHolder}>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setMeal(0);
            setTmp(header1);
          }}
        >
          Breakfast
        </button>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setMeal(1);
            setTmp(header2);
          }}
        >
          Lunch
        </button>
        <button
          className={classes.btnMeal}
          onClick={() => {
            setMeal(2);
            setTmp(header3);
          }}
        >
          Dinner
        </button>
      </div>

      {/* breakfast */}
      <ul className={classes.foodList}>
        {listOfFood.map((food) => {
          const { image, name, id } = food;
          return (
            <li key={id}>
              <div>
                <img className={classes.headerImg} src={tmp} alt="" />
              </div>
              <img
                className={classes.foodImg}
                src={
                  image == null
                    ? "https://health.gov/sites/default/files/2019-06/SVG%20Layer4.svg"
                    : "http://127.0.0.1:8000/static" + image
                }
                alt="err"
              />
              <div className={classes.foodContainer}>
                <div className={classes.titleContainer}>
                  <h3 className={classes.title}>{name}</h3>
                </div>
                <div>
                  <h5 className={classes.description}>
                    Món ăn dinh dưỡng dành cho bé
                  </h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// const Breakfast = (listOfFood1) => {
//   return (
//     <>
//       <ul className={classes.foodList}>
//         {listOfFood1.map((food) => {
//           const { image, name, id } = food;
//           return (
//             <li key={id}>
//               <div>
//                 <img className={classes.headerImg} src={header1} alt="" />
//               </div>
//               <img className={classes.foodImg} src={image} alt="err" />
//               <div className={classes.foodContainer}>
//                 <div className={classes.titleContainer}>
//                   <h3 className={classes.title}>{name}</h3>
//                 </div>
//                 <div>
//                   <h5 className={classes.description}>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Facilis, ipsam!
//                   </h5>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// const Lunch = (listOfFood2) => {
//   return (
//     <>
//       <ul className={classes.foodList}>
//         {listOfFood2.map((food) => {
//           const { image, name, id } = food;
//           return (
//             <li key={id}>
//               <div>
//                 <img className={classes.headerImg} src={header2} alt="" />
//               </div>
//               <img className={classes.foodImg} src={image} alt="err" />
//               <div className={classes.foodContainer}>
//                 <div className={classes.titleContainer}>
//                   <h3 className={classes.title}>{name}</h3>
//                 </div>
//                 <div>
//                   <h5 className={classes.description}>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Facilis, ipsam!
//                   </h5>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// const Dinner = (listOfFood3) => {
//   return (
//     <>
//       <ul className={classes.foodList}>
//         {listOfFood3.map((food) => {
//           const { image, name, id } = food;
//           return (
//             <li key={id}>
//               <div>
//                 <img className={classes.headerImg} src={header3} alt="" />
//               </div>
//               <img className={classes.foodImg} src={image} alt="err" />
//               <div className={classes.foodContainer}>
//                 <div className={classes.titleContainer}>
//                   <h3 className={classes.title}>{name}</h3>
//                 </div>
//                 <div>
//                   <h5 className={classes.description}>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Facilis, ipsam!
//                   </h5>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

export default ParentDay;
