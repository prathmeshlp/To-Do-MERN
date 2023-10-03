const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config')
const ToDoRoutes = require("./routes/ToDoRoutes")
const UserRoutes = require('./routes/UserRoutes')



// connect to express app
const app = express();

// middleware
app.use(express.json());
app.use(cors())

app.use("/", UserRoutes);
app.use("/api", ToDoRoutes);


// connect to mongoDB
mongoose
  .connect(config.MONGODB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  app.listen(config.PORT, () => console.log(`Listening at ${config.PORT}...`));



