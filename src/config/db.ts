import { connect } from "mongoose";
const localhostUrl =
  "mongodb+srv://backhair:cc07922ad07d935ce6d50e9eac07e319@cluster0.thdky.mongodb.net/back-hair?retryWrites=true&w=majority";

export const connection = () =>
  connect(process.env.MONGO_URL || localhostUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
