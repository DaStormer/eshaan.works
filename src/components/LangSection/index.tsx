import {
  Box,
  Container,
  Progress,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const LangSection = () => {
  return (
    <Box w="full" overflow="hidden" position="relative">
      <Container py="32px">
        <VStack spacing="32px">
          <Box>
            <Text textStyle="main.md" align="center">
              Languages
            </Text>
            <Text textStyle="paragraph.lg" align="center" color="gray.400">
              I have experience using these programming languages!
            </Text>
          </Box>
          <SimpleGrid
            w="full"
            paddingLeft="100px"
            paddingRight="100px"
            columns={[1, null, null, 2]}
            alignItems="center"
            gap={["32px", null, null, "64px"]}
          >
            <Text textStyle={["label.md", null, null, "label.lg"]}>
              JavaScript
            </Text>
            <Progress value={90} colorScheme="accent" borderRadius="full" />
            <Text textStyle={["label.md", null, null, "label.lg"]}>
              TypeScript
            </Text>
            <Progress value={80} colorScheme="accent" borderRadius="full" />
            <Text textStyle={["label.md", null, null, "label.lg"]}>Java</Text>
            <Progress value={70} colorScheme="accent" borderRadius="full" />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
