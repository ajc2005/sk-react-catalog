import Button from "../Button/Button.jsx";
import Style from "./Card.module.css";

const Card = ({ name, price }) => {

  return (
    <>
      <img src="#" alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button />
    </>
  )
}

export default Card