const express = require('express');
const app = express();

// soma
app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = +req.params.n1;
    const n2 = +req.params.n2;

    if(isNaN(n1) || isNaN(n2)){
        res.status(400).send('Sorry we cannot complete the operation please send a number on the request');
    }

    res.status(200).json({ resultado: n1+n2 });
})

// multiplicação
app.get('/multiplicacao/:n1/:n2', (req, res) => {
    const n1 = +req.params.n1;
    const n2 = +req.params.n2;

    if(isNaN(n1) || isNaN(n2)){
        res.status(400).send('Sorry we cannot complete the operation please send a number on the request');
    }

    res.status(200).json({ resultado: n1*n2 })
})

// subtracao
app.get('/subtracao/:n1/:n2', (req, res) => {
    const n1 = +req.params.n1;
    const n2 = +req.params.n2;

    if(isNaN(n1) || isNaN(n2)){
        res.status(400).send('Sorry we cannot complete the operation please send a number on the request');
    }

    res.status(200).json({ resultado: n1-n2 });
})

// divisao
app.get('/divisao/:n1/:n2', (req, res) => {
    const n1 = +req.params.n1;
    const n2 = +req.params.n2;

    if(isNaN(n1) || isNaN(n2)){
        res.status(400).send('Sorry we cannot complete the operation please send a number on the request');
    }

    res.status(200).json({ resultado: n1/n2 });
})

module.exports = app