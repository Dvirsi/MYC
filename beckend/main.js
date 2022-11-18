const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json())

const cocktailRouter = require('./routers/cocktailRouter')

app.use('/api/cocktail', cocktailRouter)

console.log("Server is running...");

app.listen(8000)