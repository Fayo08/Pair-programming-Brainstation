import express from "express";
import cors from "cors";
import travelRoutes from "./routes/travelRoutes.js";
// import "dotenv/config";

const app = express();

const PORT = 8080;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies in incoming requests(req.body)
app.use(express.json());

// Middleware to serve static files from the "files" directory
app.use(express.static("./files"));

// Define a route for the homepage
// This will respond with "This is a homepage" when a GET request is made to "/"
app.get("/", (req, res) => {
  res.send("This is a homePage");
});

// Use the noteRoutes for any requests to "/notes"
app.use("/travel", travelRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log("App is listening at port " + PORT);
});
