import React, { useState } from "react";
import styles from "../../assets/CSS/admin/AdminFee.module.css";
import axios from "axios";

const AdminFee = () => {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [tuition, setTuition] = useState();
  const [basicMeal, setBasicMeal] = useState();
  const [surcharge1, setSurcharge1] = useState();
  const [surcharge2, setSurcharge2] = useState();
  const [reduction, setReduction] = useState();

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleTuition = (e) => {
    setTuition(e.target.value);
  };
  const handleBasicMeal = (e) => {
    setBasicMeal(e.target.value);
  };
  const handleSurcharge1 = (e) => {
    setSurcharge1(e.target.value);
  };
  const handleSurcharge2 = (e) => {
    setSurcharge2(e.target.value);
  };
  const handleReduction = (e) => {
    setReduction(e.target.value);
  };

  const updateFee = () => {
    async function updateFee() {
      const data = {
        month: Number(month),
        year: Number(year),
        basicTuition: Number(tuition),
        basicMeal: Number(basicMeal),
        basicSurcharge1: Number(surcharge1),
        basicSurcharge2: Number(surcharge2),
        basicRedution: Number(reduction),
      };
      console.log(data);
      try {
        const res = await axios.post("http://127.0.0.1:8000/fee/", data);
        alert("Success!!");
      } catch {
        alert("Fail");
      }
    }
    updateFee();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Thêm học phí</div>
        <div className={styles.content}>
          <label for="fname" className={styles.w101}>
            Tiền học(1 tháng):
          </label>
          <input
            type="number"
            className={styles.w101}
            placeholder="Tiền học"
            onChange={handleTuition}
          />
          <label for="fmonth" className={styles.w101}>
            Tháng:
          </label>
          <input
            type="number"
            className={styles.w101}
            placeholder="Tháng"
            onChange={handleMonth}
          />
          <label for="fyear" className={styles.w101}>
            Năm:
          </label>
          <input
            type="number"
            className={styles.w101}
            placeholder="Năm"
            onChange={handleYear}
          />
          <label for="lname" className={styles.w100}>
            Tiền ăn (1 tháng):
          </label>
          <input
            type="number"
            className={styles.w100}
            placeholder="Tiền ăn"
            onChange={handleBasicMeal}
          />
          <label for="lname" className={styles.w100}>
            Tiền trông muộn từ 5h30 đến 6h30 (1 buổi):
          </label>
          <input
            type="number"
            className={styles.w100}
            placeholder="Tiền trông muộn"
            onChange={handleSurcharge1}
          />
          <label for="lname" className={styles.w100}>
            Tiền trông muộn từ 6h30 trở đi (1 buổi):
          </label>
          <input
            type="number"
            className={styles.w100}
            placeholder="Tiền trông muộn"
            onChange={handleSurcharge2}
          />
          <label for="lname" className={styles.w100}>
            Phí giảm khi xin nghỉ trước 8h:
          </label>
          <input
            type="number"
            className={styles.w100}
            placeholder="Tiền nghỉ học"
            onChange={handleReduction}
          />
          <input
            className={styles.btn}
            type="submit"
            value="Thêm"
            onClick={updateFee}
          />
        </div>
      </div>
    </>
  );
};

export default AdminFee;
