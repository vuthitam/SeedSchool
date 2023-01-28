import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import button from "../../assets/CSS/general/AddButton.module.css";
import ProfileTeacher from "../general/ProfileTeacher";

const ViewTeacher = (props) => {
  return (
    <>
      <button className={button.btn} onClick={props.onAddComment}>
        <CommentIcon />
      </button>
      <ProfileTeacher id={props.id} />
    </>
  );
};

export default ViewTeacher;
