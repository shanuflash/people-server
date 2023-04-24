import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  const sendData = data.map((item) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    image: item.image,
  }));
  res.send(sendData);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(data[id]);
});
