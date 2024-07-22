import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  email,
  subject,
  body,
}: {
  to: string;
  name: string;
  email: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail", // You can change this to another email service if needed
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  
  try {
    await transport.verify();
  } catch (error) {
    console.error("Error verifying transport:", error);
    return;
  }

  // Send the email
  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${body}</p>
      `,
    });
    console.log("Email sent successfully:", sendResult);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
