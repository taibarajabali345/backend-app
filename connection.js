const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Mongo URI: ", process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection.connection.readyState === 1) {
      console.log("MongoDB connected");
    } else {
      console.log("MongoDB connection failed");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB };
