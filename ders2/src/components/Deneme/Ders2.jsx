import React, { useState } from "react";

const Ders2 = () => {
  const [Degistir, setDegistir] = useState("");

  const yakala = (event) => {
    setDegistir(event.target.value);
  
  };
  console.log(Degistir);
  return (
    <div>
      <div>Ders2 :İnputaki değeri yakalama</div>
      <form>
        <input
          type="text"
          placeholder="Yazılan Değeri Yakala ve Consoleda yaz"
          onChange={yakala}
        ></input>
        <div>inputtaki değer:{Degistir}</div>
      </form>
    </div>
  );
};

export default Ders2;
