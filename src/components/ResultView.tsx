import { ConvertResult } from "../converter/types";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { ResultMessagesList } from "./ResultMessagesList";
import React from "react";

export function ResultView({ result }: { result: ConvertResult }) {
  if (result && result.error) {
    return (
      <div>
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>
            Conversion failed: ${result.error}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <>
      <Flex direction="column" flex={1} margin={2}>
        <Heading as="h4" size="md">
          GitHub Actions YAML
        </Heading>
        <Textarea
          placeholder="GitHub Actions YAML will appear here"
          readOnly
          value={result.yaml}
          style={{ height: "auto" }}
          flex={1}
        />
        <ResultMessagesList messages={result.messages} />
      </Flex>
      {result.remainingTravis ? (
        <Flex direction="column" flex={1} margin={2}>
          <Heading as="h4" size="md">
            Unconverted Travis configuration
          </Heading>
          <Alert status="info">
            <AlertIcon />
            <AlertDescription>
              The app doesn't yet know how to handle whatever remains in this
              box.
            </AlertDescription>
          </Alert>
          <Textarea
            placeholder="GitHub Actions YAML will appear here"
            readOnly
            value={result.remainingTravis}
            style={{ height: "auto" }}
            flex={1}
          />
        </Flex>
      ) : null}
    </>
  );
}
