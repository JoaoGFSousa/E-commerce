import Header from "@/components/Header";
import Providers from "../providers";
import GlobalStyles from "@/styles/global";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <GlobalStyles />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
