import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HamsterCart from "../../components/HamsterCart";
import { getData } from "../../api";
import { HAMSTERS_URL } from "../../constants";

import "./Battle.css";

import imgH from "../../assets/images/1618560631_9.jpg";
import imgH2 from "../../assets/images/1618560680_8.jpg";

export default function Battle() {
  useEffect(() => {
    //getData(HAMSTERS_URL).then((data) => console.log(data));
    console.log(1111);
  }, []);

  const getIdHamster = (id) => console.log(id);

  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        <div className="box-battle">
          <HamsterCart img={imgH} getIdHamster={getIdHamster} />

          <h1 className="hamstrar-title">
            click on the picture to choose the winner
          </h1>

          <HamsterCart img={imgH2} getIdHamster={getIdHamster} />
        </div>
      </div>
    </div>
  );
}
