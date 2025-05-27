export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}): Promise<void> {
  const nodemailer = (await import("~/lib/nodemailer")).default;

  try {
    await nodemailer.sendMail({
      from: process.env.NODEMAILER_USER,
      to: to,
      subject,
      html: `<p>${text}</p>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
