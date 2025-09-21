const express = require('express');
const nodemailer = require('nodemailer'); //for sending mails
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', //Your email
      pass: '' // Generate from Gmail App Password
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: '', // your receiving email
    subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`, // plain fallback
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; border: 1px solid #ddd; background: #f9f9f9;">
        <h2 style="color: #4CAF50; text-align: center;">📩 New Contact Form Message</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <div style="margin-top: 20px; padding: 15px; background: #fff; border-left: 5px solid #4CAF50; border-radius: 5px;">
          <p style="margin: 0; white-space: pre-line;">${message}</p>
        </div>
        
        <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
