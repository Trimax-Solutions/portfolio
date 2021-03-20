const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

//Set up express
const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendEmail', cors(), (req, res) => {
    const data = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trimaxsolutionteam@gmail.com',
            pass: '4321....'
        }
    });

    var mailOptions = {
        from: '"Trimax Solutions" <trimaxsolutionteam@gmail.com>',
        to: "trimaxsolutionteam@gmail.com",
        subject: `Message from ${data.firstname}`,
        html: `
            <h3>Sender Information</h3>
            <ul>
                <li>First Name : ${data.firstname}</li>
                <li>Last Name : ${data.lastname}</li>
                <li>Email : ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        ` 
    }

    transporter.sendMail(mailOptions, function(error, res){
        if(error) {
            res.json("Email sent successfully");
        }
        else {
            res.status(500).json({ error: err.message });
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


