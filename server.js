require('dotenv').config();

const express = require('express');
const app = express()

//const PORT = 

function getSum (num1, num2) {
    return parseInt(num1) + parseInt(num2)
}

function getDiff (num1, num2) {
    return parseInt(num1) - parseInt(num2)
}

function getQuot (num1, num2) {
    return parseInt(num1)/parseInt(num2)
}

function getProd (num1, num2) {
    return parseInt(num1) * parseInt(num2)
}

app.get('/calc/:num1/:num2', (req, res) => {
    const sum = getSum(req.params.num1, req.params.num2)
    res.send("The answer is " + sum)
})

// Example URL: http://localhost:3000/someroute?operation=add
// app.get('/someroute', (req, res) => {
//     console.log('req.query: ', req.query)
//     res.send('someroute accessed')
// })

app.get('/calcquery/:num1/:num2', (req, res) => {
    // code
    if (req.query.operation === "add") {
        const sum = getSum(req.params.num1, req.params.num2)
        res.send("The answer is " + sum)
    }
    else if(req.query.operation === "multiply") {
        const product = getProd(req.params.num1, req.params.num2)
        res.send("The asnwer is " + product)
    }
    else if(req.query.operation === "divide") {
        const quotient = getQuot(req.params.num1, req.params.num2)
        res.send("The answer is " + quotient)
    }

    else if(req.query.operation === "subtract") {
        const difference = getDiff(req.params.num1, req.params.num2)
        res.send("the answer is " + difference)
    }
    else (
        res.send("I don't recognize the operation.")
    )
})

app.listen(PORT, () => {
    console.log('Express is listening on port ' + PORT);
})