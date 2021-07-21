import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { HStack, Text, Spacer, Flex, Box } from "@chakra-ui/react";

export function Header({ title }) {
  return (
    <HStack w="100%">
      <Text px={20}>example</Text>
      <Text>{title}</Text>
      <Spacer />
      <Text px={20}>hogehoge@gmail.com</Text>
    </HStack>
  );
}
