const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose
  .connect("mongodb+srv://netto:BdDau2BFjGKMhv37@cluster0.tyfvilu.mongodb.net/")
  .then(() => {
    console.log("Conectado com mongodb");
    app.listen(PORT, () => console.log("Server funcionando"));
  })
  .catch((error) => console.log(error, "DB Error"));

// schemas
const schemaData = mongoose.Schema(
  {
    user: String,
    titulo: String,
    descricao: String,
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user", schemaData);

//read - // http://localhost:3001/
app.get("/", async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
});

// get recebdno id para Update
app.get("/:id", async (req, res) => {
  const data = await userModel.findOne({ _id: req.params.id });
  res.json({ success: true, data: data });
});

//create --- salvar mongo
// http://localhost:3001/create
app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data.save();
  res.send({ success: true, message: "Task salva!", data: data });
});

//update
// http://localhost:3001/update
app.put("/update", async (req, res) => {
  console.log(req.body);
  const { id, ...rest } = req.body;
  const data = await userModel.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: "Task atualizada!", data: data });
});

//delete
// http://localhost:3001/delete
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: "Task Excluida!", data: data });
});
