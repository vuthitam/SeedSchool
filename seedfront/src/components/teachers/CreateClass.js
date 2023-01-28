import axios from "axios";
import React, { useState } from "react";
import classes from '../../assets/CSS/teachers/CreateClass.module.css'

const CreateClass = props => {

    const [name, setName] = useState()

    const onNameHandle = event => {
        setName(event.target.value)
    }

    //Tao moi 1 lop
    const Create = async () => {
        const data = {
            "name": name
        }
        try {
            const res = await axios.post("http://127.0.0.1:8000/teachers/" + localStorage.getItem('id') + "/class", data);
            console.log(data.res)
        } catch {
            alert("Bạn đã có lớp")
        }
    }

    return <>
        <div className={classes.container}>
            <input placeholder="Tên lớp" onChange={onNameHandle} />
            <button onClick={Create}>Tạo</button>
        </div>
    </>
}

export default CreateClass