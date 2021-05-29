export default function HamsterCart(props) {
  return (
    <div className="hamster-cart" onClick={() => props.getIdHamster(1)}>
      <img src={props.img} alt="" />
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
  );
}
