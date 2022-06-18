const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send('Hello World!!!')
})

app.listen(PORT, () => {
    console.log(`Server listening to the port ${PORT}`)
})