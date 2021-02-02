//TODO Create A Component to add images Just by link. or to select from multiple images of same type
 
import React from "react";
import navbarImg from "../../assets/img/navbar-Todoist.png";
import "./views.css"



const Views = (props) => {
  return (
    <>
      <div className="views">
        <img src={navbarImg} alt="" className="views__img" />
      </div>
    </>
  );
};

export default Views;
