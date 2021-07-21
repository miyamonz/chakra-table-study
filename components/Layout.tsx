import { HStack, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
export default function Layout({ children }) {
  return (
    <Box>
      <VStack>
        <Header title={"hoge"} />
        <main>{children}</main>
      </VStack>
    </Box>
  );
}
