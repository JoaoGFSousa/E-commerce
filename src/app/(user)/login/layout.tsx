import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Login",
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
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={800}
          hideProgressBar
          />
        {children}
      </body>
    </html>
  );
}
