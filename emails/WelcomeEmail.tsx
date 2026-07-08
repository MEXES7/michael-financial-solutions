import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// ---------------------------------------------------------------------------
// Props: fill these in from your backend when rendering/sending the email
// ---------------------------------------------------------------------------
export interface WelcomeEmailProps {
  name: string;
  userName: string;
  accountNumber: string;
  accountType: string; // e.g. "Savings Account"
  dashboardUrl?: string; // defaults to production login URL
  logoUrl?: string; // defaults to brand logo
  supportEmail?: string; // defaults to support inbox
}

const defaultProps: Partial<WelcomeEmailProps> = {
  dashboardUrl: "/",
  logoUrl:
    "https://owletdigitalbank.com/storage/app/public/photos/Lp57YcwJhSfQUjFI7uUyRtsxeRzMdPVUPJiibPDE.png",
  supportEmail: "owletd@michaelfinancesolution.com",
};

export const WelcomeEmail = ({
  name,
  userName,
  accountNumber,
  accountType,
  dashboardUrl = defaultProps.dashboardUrl!,
  logoUrl = defaultProps.logoUrl!,
  supportEmail = defaultProps.supportEmail!,
}: WelcomeEmailProps) => {
  const previewText = "Your account is ready";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={content}>
          {/* Header */}
          <Section style={header}>
            <Link href="https://owletdigitalbank.com" style={brandLink}>
              <Img src={logoUrl} alt="Owlet Digital" style={brandLogo} />
            </Link>
          </Section>

          {/* Body */}
          <Container style={innerBody}>
            <Section style={contentCell}>
              {/* Hero */}
              <Section style={hero}>
                <div style={heroCell}>
                  <Text style={heroEyebrow}>Welcome</Text>
                  <Heading style={heroTitle}>Your account is ready</Heading>
                  <Text style={heroSubtitle}>
                    Access your dashboard and start managing your money.
                  </Text>
                </div>
              </Section>

              <Text style={paragraph}>Hello {name},</Text>
              <Text style={paragraph}>
                Thanks for joining Owlet Digital. Here is a quick snapshot of
                your profile:
              </Text>

              {/* Account snapshot panel */}
              <Section style={panel}>
                <div style={panelContent}>
                  <Text style={panelText}>
                    <strong>Account snapshot</strong>
                    <br />
                    Name: {name}
                    <br />
                    Username: {userName}
                    <br />
                    Account Number: {accountNumber}
                    <br />
                    Account Type: {accountType}
                  </Text>
                </div>
              </Section>

              {/* CTA */}
              <Section style={action}>
                <Button style={button} href={dashboardUrl}>
                  Open your dashboard
                </Button>
              </Section>

              {/* Safety panel */}
              <Section style={panel}>
                <div style={panelContent}>
                  <Text style={panelText}>
                    <strong>Keep your account safe</strong>
                  </Text>
                  <ul style={list}>
                    <li>Use a strong, unique password.</li>
                    <li>Do not share your PIN or verification codes.</li>
                    <li>Contact support if something looks unfamiliar.</li>
                  </ul>
                </div>
              </Section>

              <Text style={paragraph}>
                Need help? Email us at{" "}
                <Link href={`mailto:${supportEmail}`} style={anchor}>
                  {supportEmail}
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Thanks,
                <br />
                Owlet Digital
              </Text>
            </Section>
          </Container>

          {/* Footer */}
          <Section style={footer}>
            <div style={contentCell}>
              <Text style={footerText}>Owlet Digital</Text>
              <Text style={footerText}>
                Questions? Reach us at{" "}
                <Link href={`mailto:${supportEmail}`} style={anchor}>
                  {supportEmail}
                </Link>
              </Text>
              <Text style={footerText}>
                This message was sent by Owlet Digital. Please do not reply
                directly.
              </Text>
              <Text style={footerText}>
                Copyright {new Date().getFullYear()} Owlet Digital. All rights
                reserved.
              </Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// --------------------------------------------------------------------------

export default WelcomeEmail;

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const main: React.CSSProperties = {
  backgroundColor: "#f4f6fb",
  color: "#0f172a",
  fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
  margin: 0,
  padding: 0,
  width: "100%",
};

const content: React.CSSProperties = {
  margin: "0 auto",
  padding: 0,
  width: "100%",
  maxWidth: "640px",
};

const header: React.CSSProperties = {
  padding: "24px 0",
  textAlign: "center",
  backgroundColor: "#0f172a",
};

const brandLink: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
};

const brandLogo: React.CSSProperties = {
  height: "48px",
  width: "auto",
  maxWidth: "200px",
  margin: "0 auto",
  display: "block",
};

const innerBody: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
  margin: 0,
  padding: 0,
  width: "100%",
  maxWidth: "640px",
};

const contentCell: React.CSSProperties = {
  padding: "32px",
};

const hero: React.CSSProperties = {
  backgroundColor: "#eef2ff",
  border: "1px solid #e0e7ff",
  borderRadius: "12px",
  marginBottom: "24px",
};

const heroCell: React.CSSProperties = {
  padding: "24px",
};

const heroEyebrow: React.CSSProperties = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#475569",
  margin: "0 0 8px 0",
};

const heroTitle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#0f172a",
  margin: "0 0 8px 0",
};

const heroSubtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#475569",
  margin: 0,
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6em",
  margin: "0 0 16px 0",
  textAlign: "left",
};

const panel: React.CSSProperties = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  margin: "20px 0",
};

const panelContent: React.CSSProperties = {
  padding: "16px 18px",
};

const panelText: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6em",
  color: "#0f172a",
  margin: 0,
};

const list: React.CSSProperties = {
  margin: "8px 0 0 0",
  paddingLeft: "20px",
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#0f172a",
};

const action: React.CSSProperties = {
  margin: "26px auto",
  padding: 0,
  textAlign: "center",
  width: "100%",
};

const button: React.CSSProperties = {
  borderRadius: "8px",
  color: "#fff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 22px",
  textDecoration: "none",
  textAlign: "center",
  backgroundColor: "#2563eb",
};

const anchor: React.CSSProperties = {
  color: "#2563eb",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  margin: "0 auto",
  padding: "24px 0",
  textAlign: "center",
  width: "100%",
  maxWidth: "640px",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  color: "#64748b",
  margin: "4px 0",
  lineHeight: "1.6em",
};
