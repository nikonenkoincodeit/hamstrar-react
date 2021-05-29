import Header from "../../components/Header";
import "./Battle.css";
import imgH from "../../assets/images/1618560631_9.jpg";
import imgH2 from "../../assets/images/1618560680_8.jpg";

export default function Battle() {
  const getIdHamstrar = (id) => console.log(id);
  return (
    <div className="page-wrapper">
      <Header />
      <div className="container">
        <div className="box-battle">
          <div className="hamster-cart" onClick={() => getIdHamstrar(1)}>
            <img src={imgH} alt="" />
            <div className="overlay">
              <p>
                name: <span>piter pan</span>
              </p>
              <p>
                age: <span>6</span>
              </p>
              <p>
                favorit food: <span>kitchen</span>
              </p>
              <p>
                favorit active: <span>lego</span>
              </p>
              <div>
                <h3 className="hamster-cart-title">Winner!</h3>
                <p>Winner 75 procent</p>
                <p>looser 25 procent</p>
              </div>
            </div>
          </div>

          <h1 className="hamstrar-title">
            click on the picture to choose the winner
          </h1>

          <div className="hamster-cart" onClick={() => getIdHamstrar(2)}>
            <img src={imgH2} alt="" />
            <div className="overlay">
              <p>
                name: <span>piter pan</span>
              </p>
              <p>
                age: <span>6</span>
              </p>
              <p>
                favorit food: <span>kitchen</span>
              </p>
              <p>
                favorit active: <span>lego</span>
              </p>
              <div>
                <h3 className="hamster-cart-title">Winner!</h3>
                <p>Winner 75 procent</p>
                <p>looser 25 procent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
