const express = require("express");
const dotenv = require("dotenv");
const staffRouter = require("../routes/staff.routes");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/staffs", staffRouter);

app.get("/", (req, res) => {
  res.json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
