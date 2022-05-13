import { Flex, Text, Heading, Stack, Divider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      align="center"
    >
      <Flex
        w="1140px"
        h="100px"
        align="center"
        justify="center"
      >
        <Image src="/assets/Logo.png" alt="worldTrip" width={184} height={46} />
      </Flex>

      <Flex
        w="1440px"
        h="368px"
        flexDir="column"
      //bgImg= "/assets/Banner.png"
      >
        <Stack
          spacing={3}
          ml={20}
          mt={20}
        >
          <Heading
            as='h2'
            size='xl'
            color="Light.50"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text color="Light.50" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.
          </Text>
        </Stack>
      </Flex>

      <Flex 
         w="1140px"
         flexDir='column'
      >
        <Flex >
          
        </Flex>
        <Flex>

        </Flex>
        <h1>hello</h1>
      </Flex>
    </Flex>
  )
}
