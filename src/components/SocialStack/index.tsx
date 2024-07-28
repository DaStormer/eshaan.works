import { EmailIcon } from "@chakra-ui/icons";
import { Button, HStack, Link } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialStack = () => {
  return (
    <HStack
      wrap="wrap"
      spacing="24px"
      align={["center", "initial"]}
      justify={["center", "initial"]}
    >
      <Link isExternal href="mailto:eshaanali.2005@gmail.com">
        <Button colorScheme="accent" variant="outline" leftIcon={<EmailIcon />}>
          Email
        </Button>
      </Link>
      <Link isExternal href="https://github.com/DaStormer">
        <Button colorScheme="white" variant="outline" leftIcon={<FaGithub />}>
          GitHub
        </Button>
      </Link>
      <Link isExternal href="https://linkedin.com/in/syed-eshaan-ali">
        <Button colorScheme="blue" variant="outline" leftIcon={<FaLinkedin />}>
          LinkedIn
        </Button>
      </Link>
      <Link isExternal href="https://instagram.com/syed.eshaan.ali">
        <Button colorScheme="pink" variant="outline" leftIcon={<FaInstagram />}>
          Instagram
        </Button>
      </Link>
      <Link isExternal href="https://discord.com/users/373893905243963394">
        <Button colorScheme="purple" variant="outline" leftIcon={<FaDiscord />}>
          Discord
        </Button>
      </Link>
    </HStack>
  );
};
