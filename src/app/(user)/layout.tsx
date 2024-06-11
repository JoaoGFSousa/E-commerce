import GlobalStyles from "@/styles/global";
import Providers from "../providers";
import StyledComponentsRegistry from "../registry";

export const metadata = {
  title: "Users",
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
          minHeight: "100vh",
          display: "flex",
          background:
            "linear-gradient(90deg, rgba(142,136,115,1) 0%, rgba(241,136,75,1) 49%)",
        }}
      >
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
