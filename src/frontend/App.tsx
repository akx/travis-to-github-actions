import { Flex, Heading, Textarea } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { convertToGHA } from "../converter/converter";
import { ResultView } from "./components/ResultView";
import Header from "./components/Header";
import babelPyExample from "./examples/babelpy.travis.yml";

function useTravisConversion(yaml: string) {
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
    <Flex direction="column" flex={1}>
      <Header />
      <Flex padding={5} flex={1}>
        <Flex flex={2} direction="column" margin={2}>
          <Flex justify="space-between">
            <Heading as="h4" size="md">
              Input Travis.yml
            </Heading>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={() => setTravisYaml(babelPyExample)}>
              Load example
            </a>
          </Flex>
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
    </Flex>
  );
}

export default App;
