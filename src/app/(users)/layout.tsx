import Header from "@/components/Header";
import Providers from "../providers";
import GlobalStyles from "@/styles/global";
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
      <body>
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
