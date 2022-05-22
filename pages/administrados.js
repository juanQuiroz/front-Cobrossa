import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/ui/Layout";
import axios from "axios";
import Administrados from "../components/ui/Administrados";

const administrados = () => {
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Box>
          <Box>
            <Text fontWeight={700} mb={-1}>
              Lista de Administrados
            </Text>
            <Text fontWeight={400}>Censados Alfabeticamente</Text>
          </Box>
        </Flex>
        <Box>
          <Administrados />
        </Box>
      </Box>
    </Layout>
  );
};

export default administrados;
