const mongoose = require("mongoose");



module.exports.connect = () => {
  mongoose
    .connect(process.env.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};