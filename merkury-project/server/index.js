const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = {
    username: 'Admin',
    pass: 'q1w2e3r4'
};

let SalesLastYear = [["Websites",300],["Logo", 285],["Social Media",355],["Adwords", 119], ["E-Commerce", 285]];
let SalesLastMonth = [["Websites", 25],["Logo", 10],["Social Media", 28],["Adwords", 53],["E-Commerce", 40]];
let SalesLastWeek = [["Websites",7],["Logo", 5],["Social Media",9],["Adwords", 13],["E-Commerce", 11]];

let ReportSalesLastYear = [ 220.0, 260.0, 220.0, 400.0, 380.2, 720.0, 400, 430, 460, 270,230];
let ReportSalesLastMonth = [ 20.0, 28.0, 35.0, 49.0, 28, 55.0, 21.2, 40, 45, 49];
let ReportSalesLastWeek = [15.0, 7, 8.5, 16, 9.25, 4.5, 8.5, 5, 7, 11.6];


App.post('/api/user/register', (req, res) => {
    userExist.push({username: req.body.username, pass: req.body.password});
    console.log('Registration was successfully');
    console.log(userExist);
    return res.json()
});

App.post('/api/auth', (req, res) => {
    const user = req.body.login;
    const password = req.body.pass;

    let userCheck = userExist.filter((item) => {
        return (item.username === user && item.pass === password)
    });

    if (userCheck[0] !== undefined) {
        console.log('true');
        return res.json({
            check: true,
            username: userCheck[0].username
        })
    }
    else {
        console.log(' userCheck false');
        return res.json({check: false})
    }
});

App.get('/api/sales/last-year', (req, res) => {
    return res.json(
        SalesLastYear
    )
});

App.get('/api/sales/last-month', (req, res) => {
    return res.json(
        SalesLastMonth
    )
});

App.get('/api/sales/last-week', (req, res) => {
    return res.json(
        SalesLastWeek
    )
});

App.get('/api/report/last-year', (req, res) => {
    return res.json(
        ReportSalesLastYear
    )
});

App.get('/api/report/last-month', (req, res) => {
    return res.json(
        ReportSalesLastMonth
    )
});

App.get('/api/report/last-week', (req, res) => {
    return res.json(
        ReportSalesLastWeek
    )
});

App.listen(4000, () => {
    console.log("Server is ok");
});