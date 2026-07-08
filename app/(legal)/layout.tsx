export default function LegalLayout({ children }) {
  return (
    <div className="owlet-scope">
      {/* These only load for pages inside the (owlet-bank) folder */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/style.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {children}
    </div>
  );
}
