import { useState } from "react";

import "./App.scss";

function App() {
  return (
    <main>
      <div>
        <h1>Where do you want to travel</h1>
        <div className="image_input">
          <div>
            <input type="text" placeholder="Search for a place" />
            {/* <img src={}/> */}
          </div>
          <p>Location</p>
        </div>
        <div className="recommended-container">
          <div className="place__weather">
            <div>
              <h3>Weather</h3>
              <p>weather icons</p>
            </div>
            <p>Best time to travel</p>
          </div>
          <div className="place__clothing">
            <h3>What to wear</h3>
            <p>what to wear</p>
          </div>
          <div>
            <h3>Things to do</h3>
            <div className="place__restaurants">
              <div className="cards">
                <img src="" alt="image" />
                <div>stars</div>
                <text></text>
              </div>
              <div className="cards">
                <img src="" alt="image" />
                <div>stars</div>
                <text>Restuant review</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside>
        <h3>Other places</h3>
      </aside>
    </main>
  );
}

export default App;
