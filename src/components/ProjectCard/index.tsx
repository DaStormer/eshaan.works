import {
  Box,
  IconButton,
  Text,
  Flex,
  Card,
  CardHeader,
  Avatar,
  CardBody,
  CardFooter,
  Tag,
  VStack,
  HStack,
  Container,
  Link,
} from "@chakra-ui/react";
import { MotionBox } from "../../utils/motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <MotionBox whileHover={{ y: -5, scale: 1.05 }} whileTap={{ y: -10, scale: 1.1 }}>
      <Box
        w="full"
        overflow="auto"
        p={5}
        backdropFilter="auto"
        backdropBrightness="20%"
        boxShadow="base"
        borderColor="gray.600"
        borderRadius={4}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        overflowWrap="break-word"
        wordBreak="break-word"
        _hover={{
          borderColor: "accent.100",
        }}
      >
        <VStack
          wrap="wrap"
          align={["center", "initial"]}
          justify={["center", "initial"]}
        >
          <HStack wrap="wrap">
            {project?.image && (
              <Avatar name={project?.name} src={project?.image} />
            )}
            <Box>
              <Text textStyle={["label.md", null, null, "label.lg"]}>
                {project?.name}
              </Text>
              <Text textStyle="paragraph.sm" color="accent.100">
                {project?.blurb}
              </Text>
            </Box>
          </HStack>
          <Text textStyle="paragraph.md">{project?.desc}</Text>
          <VStack>
            <Flex gap={2} wrap={"wrap"}>
              {project?.tags?.map((t) => (
                <Tag size="sm" key={t}>
                  {t}
                </Tag>
              ))}
            </Flex>
            <HStack>
              <Link isExternal href={project?.url}>
                <IconButton
                  backgroundColor="#0000"
                  aria-label={project?.name}
                  icon={<FaExternalLinkAlt size={20} />}
                />
              </Link>
              {project?.github && (
                <Link isExternal href={project?.github}>
                  <IconButton
                    backgroundColor="#0000"
                    aria-label={"GitHub " + project?.name}
                    icon={<FaGithub size={20} />}
                  />
                </Link>
              )}
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};
