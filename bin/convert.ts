/* eslint-env node */
import { convertToGHA } from "../src/converter/converter";

async function read(stream: any): Promise<string> {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  const travisYaml = await read(process.stdin);
  const result = convertToGHA(travisYaml);
  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }
  result.messages.forEach((m) => {
    console.warn(`${m.type}: ${m.text}`);
  });
  if (result.remainingTravis) {
    console.error("Note: Not all Travis code could be converted.");
  }
  console.log(result.yaml);
}

if (require.main === module) {
  void main();
}
