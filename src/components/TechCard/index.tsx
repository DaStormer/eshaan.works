import { Box, IconButton, Text, Flex } from "@chakra-ui/react";
import { MotionBox } from "../../utils/motion";

export const TechCard = ({ tech }) => {
  return (
    <MotionBox whileHover={{ y: -5 }} whileTap={{ y: -10 }}>
      <Box
        w="100%"
        p={5}
        backdropFilter="auto"
        backdropBrightness="80%"
        borderColor="gray.600"
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
          borderColor: "accent.100",
        }}
      >
        <Flex wrap="wrap" align="center" justifyContent="space-between">
          <IconButton
            aria-label={tech?.name}
            mr={3}
            color={tech?.color}
            icon={tech?.icon}
          />
          <Flex>
            <Text size="sm" _hover={{ color: "accent.100" }}>
              {tech?.name}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </MotionBox>
  );
};
