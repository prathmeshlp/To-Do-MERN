const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ToDoRoutes = require("./routes/ToDoRoutes")
const UserRoutes = require('./routes/UserRoutes')
require('dotenv').config();



// connect to express app
const app = express();
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://todo-client-dusky.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});




// middleware
app.use(express.json());
app.use("/", UserRoutes);
app.use("/api", ToDoRoutes);



// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  
  app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}...`));


