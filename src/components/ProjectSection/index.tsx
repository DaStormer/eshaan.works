import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { ProjectCard } from "../ProjectCard";
import { projects } from "@/data";

export const ProjectSection = () => {
  return (
    <Box w="full" overflow="hidden" position="relative">
      <Container py="32px">
        <VStack spacing="32px">
          <Box>
            <Text textStyle="main.md" align="center">
              My Projects
            </Text>
            <Text textStyle="paragraph.lg" align="center" color="gray.400">
              Here are some of the projects I've developed!
            </Text>
          </Box>
          <SimpleGrid columns={[1, 2, 2, 3]} gap={10} w="full">
            {projects.map((p) => (
              <ProjectCard project={p} key={p?.name} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
