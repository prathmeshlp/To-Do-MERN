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
const corsOptions = {
  origin: 'https://to-do-app-with-auth.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to include cookies in your requests
};
app.use(cors(corsOptions))

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



