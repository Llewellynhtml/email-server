const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Create a transport instance using SMTP (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // For Gmail
  auth: {
    user: 'Lsg.mllewellyn@gmail.com', // Replace with your email
    pass: 'ajxt ikwg sibt jhyx'    // Replace with your email password or app password (if using Gmail)
  }
});

// Email sending endpoint
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Setup email data
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: to,                       // Receiver address (can be an array of emails)
    subject: subject,             // Subject line
    text: text                    // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully!', info });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
