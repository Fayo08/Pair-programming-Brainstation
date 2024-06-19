import express from "express";
import fs from "fs";


const router = express.Router();

function readData() {
    const travelData = fs.readFileSync("./data/travel.json");
    const parsedData = JSON.parse(travelData);
    return parsedData;
  }

  router.get("/", (req, res) => {
    const travel = readData();
    res.json(travel);
  });

  router.get("/:id", (req, res) => {
    const travel = readData();
  
    // Find the note with the matching ID in the notes array
    const singleTravelinfo = travel.find((travel) => travel.id === req.params.id);
    if (singleTravelinfo) {
      res.json(singleTravelinfo);
    } else {
      // If no note found with the given ID, return 404 error
      res.status(404).json({
        message: "Please enter a valid ID",
        error: "404",
      });
    }
  });

  export default router