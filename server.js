const express = require("express");
const mongoose = require("mongoose");

const todos = require("./routes/API/todos");

const app = express();

//Body parser middleware
app.use(express.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

//Use routes
app.use("/API/todos", todos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
