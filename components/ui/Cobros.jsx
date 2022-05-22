import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Cobros = ({ estado }) => {
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
        <Text fontWeight={600} w="10%">
          Mes
        </Text>
        <Text fontWeight={600} w="10%">
          Fecha de pago
        </Text>
        <Text fontWeight={600} w="10%">
          Monto
        </Text>{" "}
        <Text fontWeight={600} w="10%">
          Placa
        </Text>
        <Text fontWeight={600} w="15%">
          Marca
        </Text>
        <Text fontWeight={600} w="25%">
          Propietario
        </Text>
        <Text fontWeight={600} w="15%">
          DNI
        </Text>
        <Text fontWeight={600} w="10%">
          Estado pago
        </Text>
      </Flex>
      {data.length > 0 && estado != null
        ? data.map(
            administado =>
              administado.state == estado && (
                <Flex
                  key={administado._id}
                  bg="gray.50"
                  mb={1}
                  borderRadius={6}
                  p={1}
                >
                  <Text w="10%">{administado.taxe.month}</Text>
                  <Text w="10%">{administado.pay_date}</Text>
                  <Text w="10%">S/ {administado.amount}</Text>
                  <Text w="10%">{administado.owner.vehicle.placa}</Text>
                  <Text w="15%">{administado.owner.vehicle.marca}</Text>

                  <Text w="25%">{administado.owner.name}</Text>
                  <Text w="15%">{administado.owner.dni}</Text>

                  <Text
                    textColor={`${administado.state ? "green.500" : "red.500"}`}
                    w="10%"
                  >
                    {administado.state ? "Pagado" : "No Pagado"}
                  </Text>
                </Flex>
              ),
          )
        : data.map(administado => (
            <Flex
              key={administado._id}
              bg="gray.50"
              mb={1}
              borderRadius={6}
              p={1}
            >
              <Text w="10%">{administado.taxe.month}</Text>
              <Text w="10%">{administado.pay_date}</Text>
              <Text w="10%">S/ {administado.amount}</Text>
              <Text w="10%">{administado.owner.vehicle.placa}</Text>
              <Text w="15%">{administado.owner.vehicle.marca}</Text>

              <Text w="25%">{administado.owner.name}</Text>
              <Text w="15%">{administado.owner.dni}</Text>

              <Text
                textColor={`${administado.state ? "green.500" : "red.500"}`}
                w="10%"
              >
                {administado.state ? "Pagado" : "No Pagado"}
              </Text>
            </Flex>
          ))}
    </Box>
  );
};

export default Cobros;
