import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";

import { v4 as uuidv4 } from "uuid";
import "./Gallery.css";
import imgH2 from "../../assets/images/1618560680_8.jpg";

export default function Gallery() {
  const array = [1, 2, 3, 1, 1, 1, 1, 1, 1];

  let [open, setOpen] = useState(-1);

  let [openForm, setOpenForm] = useState(true);

  const deleteHamster = (id) => {
    console.log(id);
  };

  const showDataDeletionPopup = (id) => {
    setOpen((open = id));
  };

  const hideDataDeletionPopup = () => {
    setOpen((open = -1));
  };

  const togglePopupForm = (bool) => {
    setOpenForm((openForm = bool));
  };

  return (
    <div className="page-wrapper">
      <Header />
      <Form open={openForm} togglePopupForm={togglePopupForm} />
      <div className="container">
        <div className="box-show-form">
          <h1 className="gallery-title">add hamster data to database</h1>
          <button
            type="button"
            className="btn-show-form"
            onClick={() => togglePopupForm(true)}
          >
            show form
          </button>
        </div>

        <div className="box-gallery">
          {array.map((item, index) => {
            return (
              <div className="gallery-cart" key={uuidv4()}>
                <div
                  className="btn-delete"
                  onClick={() => showDataDeletionPopup(index)}
                >
                  &#10006;
                </div>
                <img src={imgH2} alt="" />
                {index === open && (
                  <div className="overlay">
                    <p>delete?</p>
                    <div className="box-btns">
                      <button
                        type="button"
                        className="btn-yes"
                        onClick={() => deleteHamster(index)}
                      >
                        yes
                      </button>
                      <button
                        type="button"
                        className="btn-no"
                        onClick={hideDataDeletionPopup}
                      >
                        no
                      </button>
                    </div>
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
