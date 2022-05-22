import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Cobros from "../components/ui/Cobros";
import Layout from "../components/ui/Layout";

const Pagos = () => {
  const [estado, setEstado] = React.useState(null);
  return (
    <Layout>
      <Box borderRadius={12} bg="white" h="full" p={3}>
        <Flex justifyContent="space-between">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Box>
            <Box>
              <Text fontWeight={700} mb={-1}>
                Cobros
              </Text>
              <Text fontWeight={400}>Censados Alfabeticamente</Text>
            </Box>
          </Flex>
          <Box>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={2}
              onClick={() => setEstado(true)}
            >
              Pagado
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={2}
              onClick={() => setEstado(false)}
            >
              No Pagados
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={2}
              onClick={() => setEstado(null)}
            >
              Todos
            </Button>
          </Box>
        </Flex>
        <Box>
          <Cobros estado={estado} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Pagos;
