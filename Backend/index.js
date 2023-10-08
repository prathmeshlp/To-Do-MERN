const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ToDoRoutes = require("./routes/ToDoRoutes")
const UserRoutes = require('./routes/UserRoutes')
require('dotenv').config();



// connect to express app
const app = express();

const corsOptions = {
  origin: 'https://todo-client-dusky.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // This allows cookies to be sent along with the request (if applicable)
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// middleware
app.use(cors(corsOptions));
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


