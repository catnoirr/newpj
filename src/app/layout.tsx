import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer"; // Adjust path if necessary
import Sidebar from "./components/Sidebar"; // Import Sidebar component
import "./globals.css";
import ResponsiveMenu from "./components/ResponsiveMenu";

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
  // icons: '/logo.png', // Favicon for the app
  
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
        {/* Sidebar */}
        {/* <Sidebar /> Add Sidebar here */}
        <ResponsiveMenu />

        {/* Main content area */}
        <main className="flex-grow lg:ml-20"> {/* Adjust margin-left based on sidebar size */}
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
