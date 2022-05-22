import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Administrados = () => {
  const [data, setAdministrados] = React.useState([]);

  const obtenerAdministrados = async () => {
    const res = await axios.get(
      "https://backendapp-production.up.railway.app/api/owner",
    );

    setAdministrados(res.data);
  };

  React.useEffect(() => {
    obtenerAdministrados();
  }, []);

  return (
    <Box>
      <Flex bg="blue.400" mb={1} borderRadius={6} p={1} textColor="white">
        <Text fontWeight={600} w="20%">
          Administrado
        </Text>
        <Text fontWeight={600} w="10%">
          DNI
        </Text>
        <Text fontWeight={600} w="25%">
          Dirección
        </Text>
        <Text fontWeight={600} w="10%">
          Celular
        </Text>
        <Text fontWeight={600} w="20%">
          Correo
        </Text>
        <Text fontWeight={600} w="10%">
          Metodo pago
        </Text>
      </Flex>
      {data.length > 0 &&
        data.map(administado => (
          <Flex
            key={administado._id}
            bg="gray.50"
            mb={1}
            borderRadius={6}
            p={1}
          >
            <Text w="20%">{administado.name}</Text>
            <Text w="10%">{administado.dni}</Text>
            <Text w="25%">{administado.address}</Text>
            <Text w="10%">{administado.phone}</Text>
            <Text w="20%">{administado.email}</Text>
            <Text w="10%">
              {administado.domiciliado ? "Domiciliado" : "No Domiciliado"}
            </Text>
          </Flex>
        ))}
    </Box>
  );
};

export default Administrados;
