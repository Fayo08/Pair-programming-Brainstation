import "./Card.scss";
import Star from "../../assets/icons/star.svg";
import cafe2 from "../../assets/cafe/cafe1.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={cafe2} alt="image" />
      </div>

      <div className="stars__container">
        <img className="star__icon" src={Star} alt="stars" />
        <img className="star__icon" src={Star} alt="stars" />
        <img className="star__icon" src={Star} alt="stars" />
      </div>

      <div className="card__body">
        <p>cuisine</p>
        <p className="card__text">name</p>
        <p className="card__text">location</p>
      </div>
    </div>
  );
};

export default Card;
