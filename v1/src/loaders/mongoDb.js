const Mongoose = require("mongoose");

const mongoDb = Mongoose.connection;

mongoDb.once("open", () => {
  console.log("Connected to MongoDB");
});

const connectMongoDb = async () => {
  await Mongoose.connect(
    `mongodb+srv://root:94390243Abc.@cluster0.jcoms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = {
  connectMongoDb,
};
