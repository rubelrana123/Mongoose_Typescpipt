 
import Book from "./book.model";
import { IBooks } from "./books.interface";

 
//get all Book from DB
export const getAllBooksFromDb = async() : Promise<IBooks[]> =>{
  const books = await Book.find();
  return books ;
   }
 //task 2 
export const getSpecificBooksFromDb = async(payload : string) : Promise<IBooks[]> =>{
   
  const genre = new RegExp(payload , 'i');
  const books = await Book.find({ genre});
  return books;
   }
    
   // Task---> 3 :  get specific  genre “Sci-Fi” and published by “Roli Books”.
export const getGenrePublisherBooksFromDb = async (): Promise<IBooks[] | []> => {
  const books = await Book.find({genre : "Sci-Fi",  "publisher.name" : "Roli Books"});
  return books ;
};

//task 4
export  const getRatedBookFromDB = async () : Promise<IBooks[]> =>  {
   const featureBooks =  Book.featuredBooks();
   return featureBooks;

   }



 //task 5 
   export const changePriceStringToIntegerToDB = async (): Promise<IBooks[]> => {
    const books = await Book.aggregate([
      { $match: { publicationYear: { $gt: 2020 } } },
      {
        $addFields: {
          price: {
            $toDouble: "$price",
          },
        },
      },
    ]);
    return books;
  };
  
