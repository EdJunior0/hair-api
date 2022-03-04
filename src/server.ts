import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { connection } from "./config/db";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.get("/v1/health", (req, res) => {
  res.json({ ok: true, message: "ok" });
});

const port = process.env.PORT || 3333;

connection().then(() => {
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  server.on("error", console.error);
});
