import React from "react";
import { HStack, Select } from "@chakra-ui/react";

function Option1() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}
export function OptionArea() {
  return (
    <HStack>
      <Option1 />
      <Option1 />
      <Option1 />
    </HStack>
  );
}
