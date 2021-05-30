import { useState, useEffect } from "react";

import Header from "../../components/Header";
import GalleryCart from "../../components/GalleryCart";
import Form from "../../components/Form";
import { getData } from "../../api";
import { HAMSTERS_URL, API_URL } from "../../constants";

import "./Gallery.css";

export default function Gallery() {
  let [open, setOpen] = useState(-1);
  let [hamsters, setHamsters] = useState([]);
  let [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    getData(API_URL + HAMSTERS_URL).then((data) => {
      console.log(data);
      setHamsters((hamsters = data));
    });
  }, []);

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
          <GalleryCart
            open={open}
            hamsters={hamsters}
            deleteHamster={deleteHamster}
            showDataDeletionPopup={showDataDeletionPopup}
            hideDataDeletionPopup={hideDataDeletionPopup}
          />
        </div>
      </div>
    </div>
  );
}
