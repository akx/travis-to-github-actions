import { ConvertMessage } from "../converter/types";
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import React from "react";

export function ResultMessagesList({
  messages,
}: {
  messages: ConvertMessage[];
}) {
  if (!messages.length) return null;
  return (
    <div>
      {messages.map(({ type, text }) => (
        <Alert status={type}>
          <AlertIcon />
          <AlertDescription>{text}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}
