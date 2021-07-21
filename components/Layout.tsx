import { HStack, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
const Layout: React.VFC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <VStack>
        <Header title={"hoge"} />
        <main>{children}</main>
      </VStack>
    </Box>
  );
};

export default Layout;
