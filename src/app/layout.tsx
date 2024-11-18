import { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer"; // Adjust path if necessary
import Sidebar from "./components/Sidebar"; // Import Sidebar component
import "./globals.css";
import Head from "next/head"; // Import Head component for setting favicon

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OHH POINT",
  description: "",
  // Remove the favicon from here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Head>
          {/* Set favicon here */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Sidebar */}
        <Sidebar /> {/* Add Sidebar here */}

        {/* Main content area */}
        <main className="flex-grow lg:ml-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
