import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/ui/Layout";
import Vehiculos from "../components/ui/Vehiculos";

const vehiculos = () => {
  return (
    <Layout>
      <Box borderRadius={12} bg="white" h="full" p={3}>
        <Flex W="full" alignItems="center" mb={4}>
          <Box w={12} mr={2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3786D1"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </Box>
          <Box>
            <Text fontWeight={700} mb={-1}>
              Vehiculos
            </Text>
            <Text fontWeight={400}>Censados Alfabeticamente</Text>
          </Box>
        </Flex>
        <Box>
          <Vehiculos />
        </Box>
      </Box>
    </Layout>
  );
};

export default vehiculos;
