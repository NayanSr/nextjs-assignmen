// require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nextJs-assignment:FJu76DwD20umZkRr@cluster0.gcc40.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://{process.env.DB_USER}:{process.env.DB_PASS}@cluster0.gcc40.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productCollection = client
      .db("nextJsAssignment")
      .collection("products");
    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // await client.close();
  }
}

export default run;

/* 

*/
