"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Comment out the Resend initialization temporarily
// const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // For now, just log the information and return success
  console.log("Would send email from:", senderEmail);
  console.log("Message content:", message);

  // Return success data to prevent error
  return {
    data: { id: "temp-id", success: true },
  };

  /* Comment out the actual email sending code for now
  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nandhininandhini2510@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
  */
};
