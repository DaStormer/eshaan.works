import {
  Box,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TechCard } from "../TechCard";
import { techStack } from "@/data";

export const TechSection = () => {
  return (
    <Box w="full" overflow="hidden" position="relative">
      <Container py="32px">
        <VStack spacing="32px">
          <Box>
            <Text textStyle="main.md" align="center">
              My Tech
            </Text>
            <Text textStyle="paragraph.lg" align="center" color="gray.400">
              These are the technologies I work with!
            </Text>
          </Box>
          <SimpleGrid columns={[2, 5]} gap={6} w="full">
            {techStack.map((t) => (
              <TechCard tech={t} key={t?.name} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
