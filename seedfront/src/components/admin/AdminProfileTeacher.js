import React from "react";
import { useParams } from "react-router";
import ProfileTeacher from "../general/ProfileTeacher";


const AdminProfileTeacher = props => {
    const params = useParams();
    const teacherId = params.teacherId.replace(':', '');

    console.log(teacherId);

    return <>
        <ProfileTeacher id={teacherId} />
    </>
}

export default AdminProfileTeacher;