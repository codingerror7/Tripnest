//   import mongoose from "mongoose";
//   const listingSchema = new mongoose.Schema({
//       title : {
//           type : String,
//           required : true
//       },
//       description : {
//           type : String,
//           required : true
//       },
//       host : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User",
//         req : true
//       },
//       image1 : {
//           type : String,
//           required : true
//       },
//       image2 : {
//           type : String,
//           required : true
//       },
//       image3 : {
//           type : String,
//           required : true
//       },
//       price : {
//           type : Number,
//           required :true
//       },
//       place : {
//           type : String,
//           required : true
//       }
//   },{timestamps : true})

//   const Listing = mongoose.model("Listing",listingShema)
//   export default Listing;