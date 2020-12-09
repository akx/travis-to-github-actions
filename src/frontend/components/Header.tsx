import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="1.5rem"
    bg="blue.500"
    color="white"
  >
    {" "}
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg">
        Travis to GitHub Actions converter
      </Heading>
    </Flex>
    <Box mt={{ base: 4, md: 0 }}>
      <Button
        bg="transparent"
        border="1px"
        as="a"
        target="_blank"
        href="https://github.com/akx/travis-to-github-actions"
      >
        Contribute on GitHub
      </Button>
    </Box>
  </Flex>
);
export default Header;
