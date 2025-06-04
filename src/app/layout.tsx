import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}