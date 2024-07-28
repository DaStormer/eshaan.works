import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  SlideFade,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GridSvg } from "../components/Grid";
import { MotionImage } from "@/utils/motion";
import { WavingHand } from "@/components/WavingHand";
import { Fab } from "@/components/Fab";
import { LangSection } from "@/components/LangSection";
import { TechSection } from "@/components/TechSection";
import { ProjectSection } from "@/components/ProjectSection";
import { Footer } from "@/components/Footer";
import { SocialStack } from "@/components/SocialStack";
import { TypeAnimation } from "react-type-animation";
import { titles } from "@/data";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Syed Eshaan Ali's Portfolio</title>
        <meta property="og:title" content="Syed Eshaan Ali's Portfolio" />
        <meta property="og:site_name" content="eshaan.works" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile_pic.png" />
        <meta
          property="og:description"
          content="I'm a software developer passionate about leveraging technology to drive social impact. Check out my portfolio!"
        />
        <meta
          property="description"
          content="I'm a software developer passionate about leveraging technology to drive social impact. Check out my portfolio!"
        />
      </Head>
      <VStack
        position="relative"
        w="full"
        minH="100vh"
        bg="bg.100"
        overflow="hidden"
      >
        <GridSvg
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          w="100vw"
          minW="1920px"
          h="100vh"
          minH="1080px"
          stroke="white"
          objectFit="contain"
        />
        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          h="270px"
          bgGradient="linear(to-t, bg.100, bg.0)"
          zIndex="1"
        />
        <Container>
          <VStack w="full" align="start" spacing={["8px", null, null, "64px"]}>
            <Flex
              py={["48px", null, null, "96px"]}
              w="full"
              direction={["column-reverse", null, null, "row"]}
              justify={["center", null, null, "space-between"]}
              alignItems="center"
              zIndex="3"
            >
              <SlideFade
                offsetY={20}
                transition={{
                  enter: {
                    delay: 0.5,
                  },
                }}
                in
              >
                <VStack
                  align={["center", null, null, "start"]}
                  spacing="48px"
                  maxW="800px"
                >
                  <Text
                    textStyle={["main.sm", null, null, "main.lg"]}
                    mt={[5, "initial"]}
                  >
                    Hi, I'm Eshaan! <WavingHand />
                  </Text>
                  <Flex
                    align="center"
                    textStyle={["heading.sm", null, null, "heading.md"]}
                    textAlign={["center", null, null, "initial"]}
                  >
                    <Text mr={2}>I am a</Text>
                    <TypeAnimation
                      sequence={titles.flatMap((t) => [800, t + "."])}
                      speed={40}
                      repeat={Infinity}
                    />
                  </Flex>
                  <Divider borderWidth="2px" />
                  <SocialStack />
                </VStack>
              </SlideFade>
              <SlideFade
                offsetY={20}
                transition={{
                  enter: {
                    delay: 0.5,
                  },
                }}
                in
              >
                <MotionImage
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.5 }}
                  src="/profile_pic.png"
                  borderRadius="full"
                  boxSize={["150px", "250px"]}
                  alt="Syed Eshaan Ali"
                />
              </SlideFade>
            </Flex>
          </VStack>
        </Container>
        <Center alignItems="end" p="56px" w="full" flex="1" zIndex="2">
          <Fab
            w="56px"
            h="56px"
            aria-label="See more"
            shadow="glow32"
            _hover={{
              shadow: "glow16",
            }}
            zIndex="2"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            bg="bg.100"
            icon={<ChevronDownIcon boxSize="12" color="accent.100" />}
          />
        </Center>
      </VStack>
      <LangSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default HomePage;
