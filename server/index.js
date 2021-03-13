const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded)
app.use(cors());

app.get ('/', (req, res) => {
    res.send("Welcome friends")
});

app.post('/sendEmail', (req, res) => {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
            user: "umaishassan1@gmail.com",
            password: "Muhammad."
        }
    });

    let emailOptions = {
        from: data.email,
        to: "umaishassan1@gmail.com",
        subject: `Message from ${data.firstName}`,
        html: `
            <h3>Sender Information</h3>
            <ul>
                <li>First Name : ${data.firstName}</li>
                <li>Last Name : ${data.lastName}</li>
                <li>Email : ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        ` 
    }

    smtptransporter.sendMail(emailOptions, (err, res) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send("Success");
        }
    });

    smtpTransport.close();

});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});