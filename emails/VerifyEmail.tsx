export interface VerifyEmailTemplateProps {
  brandName?: string;
  logoUrl?: string;
  brandUrl?: string;
  recipientGreeting?: string;
  bodyText?: string;
  verifyUrl?: string;
  buttonLabel?: string;
  disclaimerText?: string;
  signOffName?: string;
  supportEmail?: string;
  year?: number;
}

export default function VerifyEmailTemplate({
  brandName = "Michael Finance Solutions",
  logoUrl = "https://owletdigitalbank.com/storage/app/public/photos/Lp57YcwJhSfQUjFI7uUyRtsxeRzMdPVUPJiibPDE.png",
  brandUrl = "https://owletdigitalbank.com",
  recipientGreeting = "Hello!",
  bodyText = "Please click the button below to verify your email address.",
  verifyUrl = "#",
  buttonLabel = "Verify Email Address",
  disclaimerText = "If you did not create an account, no further action is required.",
  signOffName = "Michael Finance",
  supportEmail = "support@michaelfinance.com",
  year = new Date().getFullYear(),
}: VerifyEmailTemplateProps) {
  const baseFont: React.CSSProperties = {
    boxSizing: "border-box",
    fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    position: "relative",
  };

  const styles: Record<string, React.CSSProperties> = {
    body: {
      ...baseFont,
      WebkitTextSizeAdjust: "none",
      backgroundColor: "#f4f6fb",
      color: "#0f172a",
      height: "100%",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      width: "100%",
    },
    wrapper: {
      ...baseFont,
      backgroundColor: "#f4f6fb",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    content: {
      ...baseFont,
      margin: 0,
      padding: 0,
      width: "100%",
    },
    header: {
      ...baseFont,
      padding: "24px 0",
      textAlign: "center",
      backgroundColor: "#0f172a",
    },
    brandLink: {
      ...baseFont,
      color: "#ffffff",
      fontSize: 20,
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
    },
    brandLogo: {
      ...baseFont,
      border: "none",
      height: 48,
      width: "auto",
      maxWidth: 200,
      borderRadius: 0,
      margin: 0,
      verticalAlign: "middle",
      display: "block",
    },
    bodyCell: {
      ...baseFont,
      backgroundColor: "#f4f6fb",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    innerBody: {
      ...baseFont,
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
      margin: "0 auto",
      padding: 0,
      width: "100%",
      maxWidth: 640,
    },
    contentCell: {
      ...baseFont,
      maxWidth: "100vw",
      padding: 32,
    },
    h1: {
      ...baseFont,
      color: "#0f172a",
      marginTop: 0,
      textAlign: "left",
      fontSize: 24,
      fontWeight: 700,
    },
    p: {
      ...baseFont,
      fontSize: 15,
      lineHeight: "1.6em",
      marginTop: 0,
      textAlign: "left",
    },
    action: {
      ...baseFont,
      margin: "26px auto",
      padding: 0,
      textAlign: "center",
      width: "100%",
    },
    td: baseFont,
    button: {
      ...baseFont,
      borderRadius: 8,
      color: "#fff",
      display: "inline-block",
      fontSize: 14,
      fontWeight: 600,
      overflow: "hidden",
      padding: "12px 22px",
      textDecoration: "none",
      textAlign: "center",
      backgroundColor: "#2563eb",
      border: "none",
    },
    subcopy: {
      ...baseFont,
      borderTop: "1px solid #e2e8f0",
      marginTop: 24,
      paddingTop: 16,
    },
    subcopyText: {
      ...baseFont,
      lineHeight: "1.6em",
      marginTop: 0,
      textAlign: "left",
      fontSize: 12,
      color: "#64748b",
    },
    breakAll: {
      ...baseFont,
      wordBreak: "break-all",
    },
    link: {
      ...baseFont,
      color: "#2563eb",
      textDecoration: "none",
    },
    footer: {
      ...baseFont,
      margin: "0 auto",
      padding: "24px 0",
      textAlign: "center",
      width: "100%",
    },
    footerText: {
      ...baseFont,
      lineHeight: "1.6em",
      marginTop: 0,
      textAlign: "left",
      fontSize: 12,
      color: "#64748b",
      margin: "4px 0",
    },
  };

  return (
    <body style={styles.body}>
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={styles.wrapper}
      >
        <tbody>
          <tr>
            <td align="center" style={styles.td}>
              <table
                role="presentation"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={styles.content}
              >
                <tbody>
                  {/* Header */}
                  <tr>
                    <td style={styles.header}>
                      <a href={brandUrl} style={styles.brandLink}>
                        <img
                          src={logoUrl}
                          alt={brandName}
                          style={styles.brandLogo}
                        />
                      </a>
                    </td>
                  </tr>

                  {/* Body */}
                  <tr>
                    <td width="100%" style={styles.bodyCell}>
                      <table
                        role="presentation"
                        align="center"
                        width="640"
                        cellPadding="0"
                        cellSpacing="0"
                        style={styles.innerBody}
                      >
                        <tbody>
                          <tr>
                            <td style={styles.contentCell}>
                              <h1 style={styles.h1}>{recipientGreeting}</h1>
                              <p style={styles.p}>{bodyText}</p>

                              <table
                                role="presentation"
                                align="center"
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={styles.action}
                              >
                                <tbody>
                                  <tr>
                                    <td align="center" style={styles.td}>
                                      <table
                                        role="presentation"
                                        width="100%"
                                        border={0}
                                        cellPadding="0"
                                        cellSpacing="0"
                                        style={styles.td}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              style={styles.td}
                                            >
                                              <table
                                                role="presentation"
                                                border={0}
                                                cellPadding="0"
                                                cellSpacing="0"
                                                style={styles.td}
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td style={styles.td}>
                                                      <a
                                                        href={verifyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={styles.button}
                                                      >
                                                        {buttonLabel}
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <p style={styles.p}>{disclaimerText}</p>
                              <p style={styles.p}>
                                Regards,
                                <br />
                                {signOffName}
                              </p>

                              <table
                                role="presentation"
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={styles.subcopy}
                              >
                                <tbody>
                                  <tr>
                                    <td style={styles.td}>
                                      <p style={styles.subcopyText}>
                                        If you&apos;re having trouble clicking
                                        the &quot;{buttonLabel}&quot; button,
                                        copy and paste the URL below into your
                                        web browser:{" "}
                                        <span style={styles.breakAll}>
                                          <a
                                            href={verifyUrl}
                                            style={styles.link}
                                          >
                                            {verifyUrl}
                                          </a>
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td style={styles.td}>
                      <table
                        role="presentation"
                        align="center"
                        width="640"
                        cellPadding="0"
                        cellSpacing="0"
                        style={styles.footer}
                      >
                        <tbody>
                          <tr>
                            <td align="center" style={styles.contentCell}>
                              <p style={styles.footerText}>{brandName}</p>
                              <p style={styles.footerText}>
                                Questions? Reach us at{" "}
                                <a
                                  href={`mailto:${supportEmail}`}
                                  style={styles.link}
                                >
                                  {supportEmail}
                                </a>
                              </p>
                              <p style={styles.footerText}>
                                This message was sent by {brandName}. Please do
                                not reply directly.
                              </p>
                              <p style={styles.footerText}>
                                Copyright {year} {brandName}. All rights
                                reserved.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  );
}
