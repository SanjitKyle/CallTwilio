import express from 'express'
import { GatherResponse, voice } from './controller/GatheRoute.js';

const App=express();

App.use(express.urlencoded({ extended: false }));
App.use(express.json());

App.post("/voice", voice);
App.post("/gather", GatherResponse);


App.listen(3000,()=>{
  console.log('server is running at port',3000)
})