const express = require('express');
const app = express();

const PORT = process.env.PORT;

// multiplicação
app.get('/multiplicacao/:n1/:n2', (req, res) => {
    const n1 = +req.params.n1
    const n2 = +req.params.n2

    if(isNaN(n1) || isNaN(n2)){
        res.status(400).send('Sorry we cannot complete the operation please send a number on the request subtracao');
    }

    res.status(200).json({ resultado: n1*n2 })
})


    const n1 = +req.params.n1
    const n2 = +req.params.n2

    if(isNaN(n1) || isNaN(n2)){

})

app.listen(PORT, () => {
    console.log(`Server listening to the port ${PORT}`);
})