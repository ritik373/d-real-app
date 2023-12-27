const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const {ethers}=require('ethers');
const app=express();
// const mysql = require('mysql2');
// const fetch=require('node-fetch');
// const socketIO=require('socket.io');
const { Alchemy, Network, Utils, Contract } = require("alchemy-sdk");
// const  { ETH_USDC_PAIR_ABI_STRING, UNISWAP_V2_PAIR_CONTRACT_ADDRESS }=require('./abi.js');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'WalletNotification'
// })

// let userAddress;
// let userMessage;

app.post('/webhook', (req, res) => {
    // Process the incoming webhook payload here
    //console.log('Webhook payload:', req.body.event.activity);
    // console.log(req.body);

    let userAddress = req.body.event.activity[0].toAddress;
    let userMessage = `Transaction on chain ${req.body.event.activity[0].value} ${req.body.event.activity[0].asset} from ${req.body.event.activity[0].fromAddress}`;

    console.log(userAddress);
    console.log(userMessage);
  

    // Store the data in the database
    // const query = 'INSERT INTO notification (userAddress, notification_msg, isRead) VALUES (?,?,?)';
    // const values = [userAddress, userMessage, false];

    // connection.query(query, values, (err, results) => {
    //     if (err) {
    //         console.error('Error inserting data into MySQL:', err);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //         return;
    //     }
    //     console.log("stored in DB")
    // });

    // Send a response if needed
    res.json({ status: 'Received the webhook payload' });
});


app.get('/webhook2', (req, res) => {
    console.log("webhook get ")

    res.json({send:userAddress});

});








app.listen(3000,()=>{
    console.log("listening on port 3000");
})
