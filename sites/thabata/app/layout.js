import "./globals.css";

export const metadata = {
  title: "THABATA",
  description: "THABATA em arte ASCII.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
