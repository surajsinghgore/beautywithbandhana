import LeftSideBar from '../components/layout/leftsidebar'
import "./globals.css";

export const metadata = {
  
  title: "Beauty With Bandhana",
  description:
    "Beauty With Bandhana",
  generator: "Next.js",
  applicationName: "Beauty With Bandhana",
  referrer: "origin-when-cross-origin",
  robots: "index",
  keywords: [
    "beauty with bandhana",
    "Beauty With Bandhana",
  ],
  authors: [
    { name: "suraj singh", url: "https://www.linkedin.com/in/surajsinghgore" },
  ],
  creator: "beautywithbandhana.com",
  publisher: "beautywithbandhana.com",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
        rel="canonical"
        href="https://www.beautywithbandhana.com"
        key="canonical"
      />

<link rel="shortcut icon" href="/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    </head>
    <body>
  <LeftSideBar/>
   
      {children}

 
    </body>
  </html>
  );
}
