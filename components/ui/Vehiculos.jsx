import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Vehiculos = () => {
  const [data, setAdministrados] = React.useState([]);

  const obtenerAdministrados = async () => {
    const res = await axios.get(
      "https://backendapp-production.up.railway.app/api/owner/all",
    );

    setAdministrados(res.data);
  };

  React.useEffect(() => {
    obtenerAdministrados();
  }, []);

  return (
    <Box>
      <Flex bg="blue.400" mb={1} borderRadius={6} p={1} textColor="white">
        <Text fontWeight={600} w="18%">
          Placa
        </Text>
        <Text fontWeight={600} w="10%">
          Marca
        </Text>
        <Text fontWeight={600} w="15%">
          Modelo
        </Text>
        <Text fontWeight={600} w="20%">
          Propietario
        </Text>
        <Text fontWeight={600} w="18%">
          DNI
        </Text>
        <Text fontWeight={600} w="14%">
          Estado pago
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
            <Text w="18%">{administado.owner.vehicle.placa}</Text>
            <Text w="10%">{administado.owner.vehicle.marca}</Text>
            <Text w="15%">{administado.owner.vehicle.modelo}</Text>
            <Text w="20%">{administado.owner.name}</Text>
            <Text w="18%">{administado.owner.dni}</Text>

            <Text
              textColor={`${administado.state ? "green.500" : "red.500"}`}
              w="14%"
            >
              {administado.state ? "Pagado" : "No Pagado"}
            </Text>
          </Flex>
        ))}
    </Box>
  );
};

export default Vehiculos;
