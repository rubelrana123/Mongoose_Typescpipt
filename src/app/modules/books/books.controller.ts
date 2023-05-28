  import { NextFunction, Request, Response } from "express";
import { changePriceStringToIntegerToDB, getAllBooksFromDb, getGenrePublisherBooksFromDb, getRatedBookFromDB, getSpecificBooksFromDb } from "./book.service";
 
 ;
// get all books func
 export const allBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getAllBooksFromDb();
    // console.log("allbook",book)
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };
    //task 2 query to find all books in the "Books" collection with a specific genre, such as "Fantasy"
    export const getGenreBooks = async (req: Request, res: Response) => {
      const {genre} = req.params ;
      const books = await getSpecificBooksFromDb(genre);
      res.status(200).json({
          status: "success",
          data: books
      })
  };
//Task --> 3 : get  specific genre “Sci-Fi” and published by “Roli Books”.
export const getPublisherAndGenreBooks = async (req: Request, res: Response) => {
  const books = await getGenrePublisherBooksFromDb();
  res.status(200).json({
      status: "success",
      data : books 
  })
};



  //task 4 get top rated function
 export const getTopRatedWithFeature = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await getRatedBookFromDB();
    // console.log("getRatedBookFromDB",book)
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };

  //task 5 update all books price function
  export const changePriceStringToInteger = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const book = await changePriceStringToIntegerToDB();
  
    res.status(203).json({
      status: "success",
      data: book,
    });
  };
  