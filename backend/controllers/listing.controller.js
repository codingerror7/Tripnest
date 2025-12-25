// import React from "react";
// import Listing from "../model/listing.model.js";
// import uploadOnCloudinary from "../config/cloudinary.js";

// export const listing = async (req,res) => {
//     try {
//         let host = req.userId;
//         let {title,description,price,place} = req.body;
//         let image1 = await uploadOnCloudinary(res.files.image1[0].path);
//         let image2 = await uploadOnCloudinary(res.files.image2[0].path);
//         let image3 = await uploadOnCloudinary(res.files.image3[0].path);
//         let listing = await Listing.create({
//             title,
//             description,
//             price,
//             place,
//             image1,
//             image2,
//             image3,
//             host
//         })
//         res.status(201).json(listing)

//     } catch (error) {
//         res.status(500).json({message:`error at ${error}`});
//     }
// }