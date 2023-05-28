import { Model, Schema, model } from "mongoose";
import { IBooks   } from "./books.interface";
//create books Model
interface BooksModel extends Model<IBooks> {
  featuredBooks(): [];
}

//create schema
 const BooksSchema = new Schema<IBooks, BooksModel>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
      name: { type: String, required: true },
      location: { type: String, required: true },
    },
    reviews: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
      },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required:true}
     
    
  });
//create static method
  BooksSchema.static("featuredBooks", function featuredBooks() {
    return this.aggregate ([
      {
        $addFields: {
          featured: {
            $switch: {
              branches: [
                { case: { $gt: ["$rating", 4.5] }, then: "BestSeller" },
                { case: { $gte: ["$rating", 4] }, then: "Popular" },
              ],
              default: "",
            },
          },
        },
      },
    ])
  
  })

 
//create model
  const Book = model<IBooks, BooksModel>('Books', BooksSchema);
 
   export default Book;