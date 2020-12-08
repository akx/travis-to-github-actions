import { SimpleGrid, Textarea } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { convertToGHA } from "./converter";

function useTravisConversion(yaml: string) {
  return React.useMemo(() => {
    try {
      return convertToGHA(yaml);
    } catch (exc) {
      return { error: `${exc}`, exc };
    }
  }, [yaml]);
}

function App() {
  const [travisYaml, setTravisYaml] = React.useState("");
  const conversionResult = useTravisConversion(travisYaml);
  return (
    <SimpleGrid columns={2} padding={10} spacing={10} style={{ flex: 1 }}>
      <Textarea
        placeholder="Paste a travis.yml here"
        value={travisYaml}
        onChange={(e) => setTravisYaml(e.target.value)}
      />
      <Textarea
        placeholder="GitHub Actions YAML will appear here"
        readonly
        value={JSON.stringify(conversionResult)}
      />
    </SimpleGrid>
  );
}

export default App;
