interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <div style={{ fontFamily: "Arial", lineHeight: 1.6 }}>
      <h2>New Contact Form Submission</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Subject:</strong> {subject}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>{message}</p>
    </div>
  );
}
