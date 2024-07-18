const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { createUser } = require("./query")

app.use(cors());
app.use(express.json());
const Port = process.env.PORT 

app.post("/register", async function (req, res) {
  try {
    const user = await createUser(req.body);
    if (user) {
      res.status(200).json("User creation success!");
    } else {
      res.status(400).json("Error in creating user");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error");
  }
});

app.listen(Port, () => {
  console.log("Server running on port", Port);
});
