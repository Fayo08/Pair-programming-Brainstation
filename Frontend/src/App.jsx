import { useState } from "react";
import Card from "../src/components/Card/Card.jsx";
import Sun from "../src/assets/icons/sun.svg";
import place1 from "../src/assets/places/greece.jpg";

import "./App.scss";

function App() {
  return (
    <main className="body">
      <section className="main-section">
        <div className="place__container">
          <h1>Where do you want to travel</h1>
          <div className="image_input">
            <div className="image__preview">
              <input type="file" placeholder="Search for a place" />
              {/* <img src={}/> */}
              <p>wher image is</p>
            </div>
            <p>Location</p>
          </div>
          <div className="recommended-container">
            <div className="place__weather">
              <h3>Weather</h3>
              <div className="place__weather-now">
                <div className="place__weather-info">
                  <p>Current:</p>
                  <img src={Sun} alt="sun" />
                  <p>Sunny</p>
                </div>
              </div>
              <div className="place__weather-best">
                <p>Best time to travel </p>
                <p>April</p>
              </div>
            </div>
            <div className="place__clothing">
              <h3>What to wear</h3>
              <ul className="place__clothing-list">
                <li className="place__clothing-item">dress</li>
                <li className="place__clothing-item">sunglasses</li>
              </ul>
            </div>
            <div className="cafe">
              <h3>Things to do</h3>
              <div className="cafe__container">
                <Card />
                <Card />
                <Card />
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
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;
