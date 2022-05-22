import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      h={14}
      w="full"
      bg="white"
      borderRadius={12}
      p={1}
      boxShadow="sm"
      mb={6}
    >
      <Flex alignItems="center">
        <Button
          w="fit"
          p={0}
          bg="transparent"
          mr={4}
          _hover={{ bg: "blue.50" }}
          ml={1}
        >
          <Box borderRadius="full" w="10" h="10" bg="gray.100" p={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3786D1"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Box>
        </Button>

        <Box>
          <Text fontWeight={600} color="blue.600" mb={-1}>
            USUARIO
          </Text>
          <Text>Rol USuario</Text>
        </Box>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        {" "}
        <Button
          align="center"
          color="gray.800"
          bg="transparent"
          h="full"
          _hover={{ color: "blue.500" }}
        >
          <Link href="/Pagos">
            <a>Cobros</a>
          </Link>
        </Button>
        <Button
          align="center"
          color="gray.800"
          bg="transparent"
          h="full"
          _hover={{ color: "blue.500" }}
        >
          <Link href="/administrados">
            <a>Administrados</a>
          </Link>
        </Button>
        <Button
          align="center"
          color="gray.800"
          bg="transparent"
          h="full"
          _hover={{ color: "blue.500" }}
        >
          <Link href="/vehiculos">
            <a>Vehiculos</a>
          </Link>
        </Button>
      </Flex>
      <Flex alignItems="center" mr={2}>
        <Button
          w="fit"
          p={0}
          bg="transparent"
          _hover={{ bg: "blue.50" }}
          mr={3}
        >
          <Link href="/config">
            <a>
              <Box w={10}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#2375AB"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Box>
            </a>
          </Link>
        </Button>
        <Button w="fit" p={0} bg="transparent" _hover={{ bg: "blue.50" }}>
          <Link href="/">
            <a>
              <Box w={10}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#2375AB"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </Box>
            </a>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
