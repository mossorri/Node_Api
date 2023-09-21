// require('dotenv').config();
// const express = require("express");
// const mongoose = require("mongoose");
// const productRoutes = require('./routes/productRoutes')
// const app = express();

// // adding middleware
// app.use(express.json());
// // app.use('/api', productRoutes);
// app.use('/api/products', productRoutes);


// const PORT = process.env.PORT || 3000 
// // const PORT = 3000
// // protect my mongodb driver and saving it at env file
// const MONGO_URL = process.env.MONGO_URL

// // Declaring routes for the app or endpoints
// app.get("/", (req, res) => {
//   res.send("Hello is working...");
// });


// mongoose.set("strictQuery", false);

// // connecting mongoose database
// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}...`);
//     });
//     console.log("Connected to MongoDB database...");
//   })
//   .catch((error) => {
//     console.log(error);
//   });


require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const proudctRoute = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/products', proudctRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Emmanuel')
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})