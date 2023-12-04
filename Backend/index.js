const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ToDoRoutes = require("./routes/ToDoRoutes");
const UserRoutes = require("./routes/UserRoutes");
require("dotenv").config();

// connect to express app
const app = express();

// middleware
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.use("/", UserRoutes);
app.use("/api", ToDoRoutes);

// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`Listening at ${process.env.PORT}...`)
);
