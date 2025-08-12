import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";

const Banner = () => {
  let userinfo = "yes i am here something!";
  let Admin = "Admin Dashboard";

  const [initialValue, updateValue] = useState(Admin);
  const [current, updatePlus] = useState(0);
  const [currentinputData, updateInputData] = useState(null);

  //   ============================Admindatastart========
  const userUpdate = () => {
    console.log(userinfo);

    updateValue(userinfo);
  };

  //   ================================increment and decrement ==========
  const incplus = () => {
    updatePlus(current + 1);
  };
  const dec = () => {
    updatePlus(current - 1);
  };
  // ==============================inputfomr data ==========

  const getData = (e) => {
    let newdata = e.current.value;
    updateInputData(newdata);
  };

  return (
    <>
      <h1>
        {initialValue}
        <span>
          <RiAdminFill className="iconsColor" />
        </span>
      </h1>
      <h2>{initialValue}</h2>
      <button type="button" onClick={userUpdate}>
        Click me
      </button>
      <br />
      {current}
      <br />
      <button type="button" onClick={incplus}>
        Inc++
      </button>{" "}
      |{" "}
      <button type="button" onClick={dec}>
        dec--
      </button>{" "}
      <br />
      <input type="text" value={currentinputData} onChange={getData} />
      <input type="text" value="" placeholder="enter user name" />
    </>
  );
};

export default Banner;
