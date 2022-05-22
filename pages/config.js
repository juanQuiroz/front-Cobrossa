import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import FormCrearVehiculo from "../components/FormCrearVehiculo";
import Layout from "../components/ui/Layout";

const config = () => {
  return (
    <Layout>
      <Box borderRadius={12} bg="white" h="full" p={3}>
        <Flex W="full" alignItems="center" mb={4}>
          <Box w={12} h={12} mr={2}>
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </Box>
          <Box>
            <Text fontWeight={700} mb={-1}>
              Crear administrado
            </Text>
            <Text fontWeight={400}>Añade un nuevo propietario al sistema</Text>
          </Box>
        </Flex>
        <Flex>
          <FormCrearVehiculo />
        </Flex>
      </Box>
    </Layout>
  );
};

export default config;
