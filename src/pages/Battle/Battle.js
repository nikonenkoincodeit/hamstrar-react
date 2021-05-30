import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HamsterCart from "../../components/HamsterCart";
import Loading from "../../components/Loading";
import { getRandomData, updateDate } from "../../api";

import "./Battle.css";

export default function Battle() {
  let [randomData, setRandomData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [winner, setWinner] = useState(-1);

  const toggleLoading = (bool) => {
    setLoading((loading = bool));
  };

  const createArrayRandomData = () => {
    setRandomData((randomData = []));
    toggleLoading(true);
    let array = [];
    const a = getRandomData().then((data) => {
      array[0] = data;
      return data;
    });
    const b = getRandomData().then((data) => {
      array[1] = data;
      return data;
    });

    Promise.all([a, b]).then((data) => {
      if (array[0].id === array[1].id) {
        createArrayRandomData();
      } else {
        toggleLoading(false);
        setRandomData((randomData = [...randomData, ...array]));
      }
    });
  };

  const nextBattle = () => {
    setWinner((winner = -1));
    createArrayRandomData();
  };

  useEffect(() => {
    createArrayRandomData();
  }, []);

  const getIdHamster = (index) => {
    if (!!winner) {
      setWinner((winner = index));
      let arrayData = [];

      randomData.forEach((item, i) => {
        let a = { ...item };
        if (index !== i) a.defeats = Number(a.defeats) + 1;
        else a.wins = Number(a.wins) + 1;
        a.games = Number(a.games) + 1;
        arrayData.push(a);
        updateDate(a, a.id).then((data) => data);
      });

      setRandomData((randomData = [...arrayData]));
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      {loading && <Loading />}
      <div className="container">
        <div className="box-battle">
          {randomData.length > 1 && (
            <HamsterCart
              index={0}
              winner={winner}
              randomData={randomData}
              getIdHamster={getIdHamster}
            />
          )}

          <h1 className="hamstrar-title">
            click on the picture to choose the winner
            <button type="button" className="btn-next" onClick={nextBattle}>
              next battle
            </button>
          </h1>

          {randomData.length > 1 && (
            <HamsterCart
              index={1}
              winner={winner}
              randomData={randomData}
              getIdHamster={getIdHamster}
            />
          )}
        </div>
      </div>
    </div>
  );
}
