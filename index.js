require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes");
const port = process.env.PORT || 3000;

//create routes
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something Went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
