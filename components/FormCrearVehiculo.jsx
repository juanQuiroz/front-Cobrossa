import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import FormCrearPropietario from "./FormCrearPropietario";

const FormCrearVehiculo = () => {
  const [idVehiculo, setIdVehiculo] = React.useState(null);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      placa: "",
      marca: "",
      modelo: "",
    },

    onSubmit: async (valores, { resetForm }) => {
      // Avisar al componente hijo que se esta creando un nuevo producto

      try {
        const res = await axios.post(
          "https://backendapp-production.up.railway.app/api/vehicle",
          valores,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        console.log("Vehiculo", res.data);
        setIdVehiculo(res.data._id);
        // toast({
        //   title: `Vehiculo creado correctamente`,
        //   description: "Estado : OK",
        //   status: "success",
        //   duration: 8000,
        //   isClosable: true,
        // });

        resetForm();
      } catch (e) {
        toast({
          title: "error creando vehiculo",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      }
    },
  });

  return (
    <Box w="50%" fontFamily="Montserrat">
      <Box mb={2} border="1px" borderColor="blue.600" borderRadius={10} p={3}>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Vehiculo
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Flex gap={3}>
            <Box mb={2}>
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Placa
              </Text>
              <Input
                id="placa"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.placa}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
            <Box mb={2}>
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Marca
              </Text>
              <Input
                id="marca"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.marca}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
            <Box mb={2}>
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Modelo
              </Text>
              <Input
                id="modelo"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.modelo}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
          </Flex>

          <Button
            mt={2}
            colorScheme="red"
            variant="outline"
            size="sm"
            onClick={() => {
              formik.resetForm();
            }}
          >
            Cancelar
          </Button>
          <Button type="submit" mt={2} ml={4} colorScheme="blue" size="sm">
            Añadir Vehiculo
          </Button>
        </form>
      </Box>
      {idVehiculo && (
        <FormCrearPropietario
          idVehiculo={idVehiculo}
          setIdVehiculo={setIdVehiculo}
        />
      )}
    </Box>
  );
};

export default FormCrearVehiculo;
