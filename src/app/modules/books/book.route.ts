  import express  from "express";
import { allBook, getGenreBooks, getTopRatedWithFeature, changePriceStringToInteger, getPublisherAndGenreBooks } from "./books.controller";
 
 
const route = express.Router();
//http://localhost:5000/api/v1/books/
route.get("/", allBook);
// task 3 specific genre “Sci-Fi” and published by “Roli Books”. http://localhost:5000/api/v1/books/genre-publisher
route.get('/genre-publisher', getPublisherAndGenreBooks);
//tssk 4 http://localhost:5000/api/v1/books/rating-features
route.get("/rating-features", getTopRatedWithFeature);
//tsk 5  //http://localhost:5000/api/v1/books/price
route.get("/price", changePriceStringToInteger);
// task ---> 2  example  http://localhost:5000/api/v1/books/Sci-Fi
route.get("/:genre", getGenreBooks);


export default route;  