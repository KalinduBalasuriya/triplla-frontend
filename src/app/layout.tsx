import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiplla - Travel Agency Management Platform",
  description:
    "Manage your travel agency from inquiry to invoice in one powerful platform. Built for tour operators, safari companies, and inbound travel agencies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
