import { useEffect, useState } from "react";
import Card from "../src/components/Card/Card.jsx";
import Sun from "../src/assets/icons/sun.svg";
import place1 from "../src/assets/places/greece.jpg";
import data from "../../travel.json";
import axios from "axios";
import "./App.scss";

import Japan from "./assets/places/japan.jpg";
import Jamaica from "./assets/places/jamicia.jpg";
import Greece from "./assets/places/greece.jpg";

function App() {
  const [places, setPlaces] = useState([]);
  const [currentPlace, setCurrentPlace] = useState(data.countries[0]);
  const [placeIndex, setPlaceIndex] = useState(0);
  console.log(currentPlace);
  const API_URL = import.meta.env.VITE_API_URL;
  const host = "http://localhost:8080";

  const fetchPlaces = async () => {
    try {
      const response = await axios.get(`${host}/travel`);
      setPlaces(response.data.countries);
      setCurrentPlace(response.data.countries[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  function updateIndex(index) {
    console.log(index);
    setPlaceIndex(index);
    updateCurrentPlace();
  }

  function updateCurrentPlace() {
    setCurrentPlace(places[placeIndex]);
  }
  return (
    <main className="body">
      <section className="main-section">
        <div className="place__container">
          <h1>Where do you want to travel</h1>
          <div className="image_input">
            <div className="image__preview">
              <input type="file" placeholder="Search for a place" />
              <img className="image__main" src={Jamaica} alt="place" />
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
                {currentPlace.best_restaurants
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3)
                  .map((item, index) => (
                    <Card
                      key={index}
                      image={item.image}
                      cuisine={item.cuisine}
                      name={item.name}
                      location={item.location}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <aside className="aside">
          <h3 className="aside-title">Other places</h3>
          <div className="others__container">
            <div className="others-card" onClick={() => updateIndex(0)}>
              <div className="others-card__image-container">
                <img className="others-card__image" src={Jamaica} alt="place" />
              </div>
              <div className="others-card__body">
                <p>Jamaica</p>
                <p>This is Jamaica</p>
              </div>
            </div>

            <div className="others-card" onClick={() => updateIndex(1)}>
              <div className="others-card__image-container">
                <img className="others-card__image" src={Japan} alt="place" />
              </div>
              <div className="others-card__body">
                <p>Japan</p>
                <p>This is Japan</p>
              </div>
            </div>
            <div className="others-card" onClick={() => updateIndex(2)}>
              <div className="others-card__image-container">
                <img className="others-card__image" src={Greece} alt="place" />
              </div>
              <div className="others-card__body">
                <p>Greece</p>
                <p>This is Greece</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
