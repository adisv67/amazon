const { request, response } = require("express");
const functions = require("firebase-functions");
const { stripVTControlCharacters } = require("util");

const app = express();
app.user(cors({origin : true}));
app.use(express.json());

app.get('/', (request,response) => response.status(200).send("Hello Humans!"))

app.post('/payments/create', async( request, response) =>{
    const total =request.query.total;

    console.log('payment request received ', total)

    const paymentIntent = await strip.paymentIntent.create({
        amount:total,
        currency:"user",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})