import { Flex, Heading, Textarea } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { convertToGHA } from "./converter/converter";
import { ConvertResult } from "./converter/types";
import { ResultView } from "./components/ResultView";

function useTravisConversion(yaml: string): ConvertResult {
  return React.useMemo(() => {
    try {
      return convertToGHA(yaml);
    } catch (exc) {
      return {
        yaml: "",
        messages: [],
        error: exc.toString(),
        errorDetail: exc,
      };
    }
  }, [yaml]);
}

function App() {
  const [travisYaml, setTravisYaml] = React.useState("");
  const conversionResult = useTravisConversion(travisYaml);
  return (
    <Flex padding={5} flex={1}>
      <Flex flex={2} direction="column" margin={2}>
        <Heading as="h4" size="md">
          Input Travis.yml
        </Heading>
        <Textarea
          placeholder="Paste a travis.yml here"
          value={travisYaml}
          onChange={(e) => setTravisYaml(e.target.value)}
          style={{ height: "auto" }}
          flex={1}
        />
      </Flex>
      <Flex flex={3} direction="row">
        <ResultView result={conversionResult} />
      </Flex>
    </Flex>
  );
}

export default App;
