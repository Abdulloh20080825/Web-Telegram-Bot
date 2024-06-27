import Button from "../button/button";
import "./cart.css";
const Card = () => {
  return (
    <div className="cart__container">
      <p>Umumiy narx: $12.00</p>

      <Button title={"Buyurtma"} type={"checkout"} />
    </div>
  );
};

export default Card;
