const { MongoClient } = require("mongodb");

const connectionUrl = `mongodb+srv://juvelearlsasing:F7SIKNPcfJaVSq93@cluster0.pfhju9u.mongodb.net/test`;

const client = new MongoClient(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((err) => {
  if(err)
  {
    console.error(err);
    process.exit(-1);
  }
  console.log("Successfully Connected To MongoDB");
});

module.exports = client;
