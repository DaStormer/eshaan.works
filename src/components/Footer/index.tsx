import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { SocialStack } from "../SocialStack";

export const Footer = () => {
  return (
    <Box w="full" bg="ui.5" pt="80px" pb="80px">
      <Container>
        <VStack
          wrap="wrap"
          w="full"
          align="center"
          justify="center"
          spacing={["8px", null, null, "64px"]}
        >
          <Box>
            <Text textStyle="main.md" align="center">
              Get in touch.
            </Text>
            <Text textStyle="paragraph.lg" align="center" color="gray.400">
              Let's build together!
            </Text>
          </Box>
          <SocialStack />
        </VStack>
      </Container>
    </Box>
  );
};
