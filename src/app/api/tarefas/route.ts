import { NextResponse } from "next/server";
import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://netto:${process.env.MONGO_PASS}@cluster0.tyfvilu.mongodb.net/`
  )
  .then(() => {
    console.log("Conectado com mongodb VIA next");
  })
  .catch((error) => console.log(error, "DB Error"));

// schemas
const schemaData = new mongoose.Schema(
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

export function GET() {
  return NextResponse.json({ message: "funcionando" });
}
