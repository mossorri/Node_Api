const express = require("express");
const app = express();

const port = 3000;

// Declaring routes for the app or endpoints
app.get('/', (req, res)=>{
    res.send('Hello is working...')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
});
