import React, { useState } from "react";

const Ders4 = () => {
  const [formData, setFromData] = useState({
    deneme1: "",
    deneme2: "",
    deneme3: "",
  });
  const deneme1ChangeHandler = (event) => {
    setFromData((prevState) => {
      return { ...prevState, deneme1: event.target.value };
    });
  };
  const deneme2ChangeHandler = (event) => {
    setFromData((prevState) => {
      return { ...prevState, deneme2: event.target.value };
    });
  };
  const deneme3ChangeHandler = (event) => {
    setFromData((prevState) => {
      return { ...prevState, deneme3: event.target.value };
    });
  };
  console.log(formData);
  return (
    <div>
      <div>Ders4:PrevState </div>
      <form>
        <label>deneme1:{formData.deneme1}</label>
        <input
          type="text"
          placeholder="deneme1"
          onChange={deneme1ChangeHandler}
        />
        <label>deneme2:{formData.deneme2}</label>
        <input
          type="text"
          placeholder="deneme2"
          onChange={deneme2ChangeHandler}
        />
        <label>deneme3:{formData.deneme3}</label>
        <input
          type="text"
          placeholder="deneme3"
          onChange={deneme3ChangeHandler}
        />
      </form>
    </div>
  );
};

export default Ders4;
