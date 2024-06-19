import { useEffect, useState } from "react";
import Card from "../src/components/Card/Card.jsx";
import Sun from "../src/assets/icons/sun.svg";
import place1 from "../src/assets/places/greece.jpg";
import data from "../../travel.json";
import "./App.scss";

function App() {
  const [places, setPlaces] = useState(data.countries);
  const [currentPlace, setCurrentPlace] = useState(places[0]);

  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <main className="body">
      <section className="main-section">
        <div className="place__container">
          <h1>Where do you want to travel</h1>
          <div className="image_input">
            <div className="image__preview">
              <input type="file" placeholder="Search for a place" />
              <img className="image__main" src={place1} alt="place" />
              <p>{currentPlace.country}</p>
            </div>
          </div>
          <div className="recommended-container">
            <div className="place__weather">
              <h3>Weather</h3>
              <div className="place__weather-now">
                <div className="place__weather-info">
                  <p>Current:</p>
                  <img src={Sun} alt="sun" />
                  <p>{currentPlace.weather.summer}</p>
                </div>
              </div>
              <div className="place__weather-best">
                <p>Best time to travel </p>
                <p>{currentPlace.best_time_to_travel}</p>
              </div>
            </div>
            <div className="place__clothing">
              <h3>What to wear</h3>
              <div className="clothing-recommend">
                <div className="summer">
                  <p className="place__clothing-subheading">Summer</p>
                  <ul className="place__clothing-list">
                    {currentPlace.appropriate_clothing.summer
                      .split(",")
                      .map((item, index) => (
                        <li className="place__clothing-item">{item}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <p className="place__clothing-subheading">Winter</p>
                  <ul className="place__clothing-list">
                    {currentPlace.appropriate_clothing.winter
                      .split(",")
                      .map((item, index) => (
                        <li className="place__clothing-item">{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="cafe">
              <h3>Things to do</h3>
              <div className="cafe__container">
                {currentPlace.best_restaurants.map((item, index) => (
                  <Card
                    key={index}
                    image={item.image}
                    cuisine={item.cuisine}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside className="aside">
          <h3 className="aside-title">Other places</h3>
          <div className="others__container">
            <div className="others-card">
              <div className="others-card__image-container">
                <img className="others-card__image" src={place1} alt="place" />
              </div>
              <div className="others-card__body">
                <p>Place</p>
                <p>text about item</p>
              </div>
            </div>
            <div className="others-card">
              <div className="others-card__image-container">
                <img className="others-card__image" src={place1} alt="place" />
              </div>
              <div className="others-card__body">
                <p>Place</p>
                <p>text about item</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
