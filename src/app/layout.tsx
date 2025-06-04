import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="color-scheme" content="light only"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
