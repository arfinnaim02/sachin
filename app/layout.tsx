import "./globals.css";

export const metadata = {
  title: "Demo Member Card",
  description: "Demo card UI",
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