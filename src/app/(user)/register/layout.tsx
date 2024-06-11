export const metadata = {
  title: "Register",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          background:
            "linear-gradient(90deg, rgba(142,136,115,1) 0%, rgba(241,136,75,1) 49%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
