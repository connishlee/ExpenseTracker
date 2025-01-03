import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider, SignIn } from "@clerk/nextjs";

// changes to font are here
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

// any other metadata for the page
export const metadata = {
  title: "Expense Tracker",
  description: "Expense Tracking with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <SignIn></SignIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
