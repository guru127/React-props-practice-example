import React from "react";
import Avatar from "./Avatar";
import Detailes from "./Detailes";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar url={props.img} />
      </div>
      <div className="bottom">
        <Detailes info={props.tel} />
        <Detailes info={props.email} />
      </div>
    </div>
  );
}

export default Card;
//<img className="circle-img" src={props.img} alt="avatar_img" />
