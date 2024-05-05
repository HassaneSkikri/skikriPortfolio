const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});


contactEmail.verify((error) => {
  if (error) {
    console.error("Nodemailer cannot send emails:", error);
  } else {
    console.log("Nodemailer is ready to send emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: fullName,
    to: process.env.EMAIL_RECEIVER, // It's good practice to also use an environment variable for the receiver
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${fullName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "error", message: "Failed to send email", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent", info: info.response });
    }
  });
});

app.use(cors({
  origin: 'http://localhost:3000', // Adjust according to your frontend URL
  optionsSuccessStatus: 200
}));

app.listen(5000, () => console.log("Server Running on port 5000"));
