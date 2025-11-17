import express from "express";
import { voice, GatherResponse } from "./controller/GatheRoute.js";
import { createCall } from "./controller/CallController.js";

const App = express();

// Middleware for Twilio POST Body
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

// Voice Routes
App.post("/voice", voice);
App.post("/gather", GatherResponse);

// CALL TRIGGER ROUTE
createCall()

App.listen(3000, () => {
  console.log("server is running at port 3000");
});
