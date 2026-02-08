"use server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY || "",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Contact Form", email: "contact@cristians.dev" },
        to: [{ email: "madhawk1296@gmail.com", name: "Cristian Silva" }],
        replyTo: { email, name },
        subject: `New message from ${name}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Brevo error:", error);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
