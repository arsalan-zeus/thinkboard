import { transporter, sender } from "./email.config.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to,
      subject,
      html,
    });
    console.log(`Email sent to ${to}:`, response.response);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

export const sendVerificationEmail = async (email, verificationToken) => {
  const html = VERIFICATION_EMAIL_TEMPLATE
    .replace("{verificationCode}", verificationToken)
    .replace("{year}", new Date().getFullYear());

  await sendEmail({
    to: email,
    subject: "Verify Your Email",
    html,
  });
};

export const sendWelcomeEmail = async (email, name) => {
  const html = WELCOME_EMAIL_TEMPLATE
    .replace("{name}", name)
    .replace("{year}", new Date().getFullYear());

  await sendEmail({
    to: email,
    subject: "Welcome to Our Service",
    html,
  });
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const html = PASSWORD_RESET_REQUEST_TEMPLATE
    .replace("{resetURL}", resetURL)
    .replace("{year}", new Date().getFullYear());

  await sendEmail({
    to: email,
    subject: "Reset Your Password",
    html,
  });
};

export const sendResetSuccessEmail = async (email) => {
  const html = PASSWORD_RESET_SUCCESS_TEMPLATE.replace(
    "{year}",
    new Date().getFullYear()
  );

  await sendEmail({
    to: email,
    subject: "Password Reset Successful",
    html,
  });
};
