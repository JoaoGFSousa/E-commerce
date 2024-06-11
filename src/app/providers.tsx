"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AuthContextProvider from "@/context/AuthContext";

export const cache = createCache({ key: "css", prepend: true });

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <CacheProvider value={cache}>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;