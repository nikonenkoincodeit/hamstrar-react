import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header";
import "./Gallery.css";

import imgH2 from "../../assets/images/1618560680_8.jpg";

export default function Gallery() {
  const array = [1, 2, 3, 1, 1, 1, 1, 1, 1];

  let [open, setOpen] = useState(-1);

  const deleteHamstrar = (id) => {
    console.log(id);
    setOpen((open = id));
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        <div className="box-gallery">
          {array.map((item, index) => {
            return (
              <div className="gallery-cart" key={uuidv4()}>
                <div
                  className="btn-delete"
                  onClick={() => deleteHamstrar(index)}
                >
                  &#10006;
                </div>
                <img src={imgH2} alt="" />
                {index == open && (
                  <div className="overla">
                    <p>
                      name: <span>piter pan</span>
                    </p>
                    <p>
                      age: <span>6</span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
