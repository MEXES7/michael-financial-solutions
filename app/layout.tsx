import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Financial Solutions",
  description: "Online Digital Banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <script src="//code.jivosite.com/widget/cQWZhuQxS8" async></script>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

//  <head>
//       {/* external CSS stylesheets needed by your template */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://owletdigitalbank.com/templ/css/bootstrap.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://owletdigitalbank.com/templ/css/style.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//       />
//     </head>
