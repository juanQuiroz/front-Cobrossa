import {
  Box,
  Button,
  Input,
  Select,
  Text,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const FormCrearPropietario = ({ idVehiculo, setIdVehiculo }) => {
  const [value, setValue] = React.useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      dni: "",
      name: "",
      lastname: "",
      address: "",
      email: "",
      phone: "",
      vehicle: idVehiculo,
      domiciliado: "",
    },

    onSubmit: async (valores, { resetForm }) => {
      // Avisar al componente hijo que se esta creando un nuevo producto

      try {
        const res = await axios.post(
          "https://backendapp-production.up.railway.app/api/owner",
          {
            dni: valores.dni,
            name: valores.name,
            lastname: valores.lastname,
            address: valores.address,
            email: valores.email,
            phone: valores.phone,
            vehicle: valores.vehicle,
            domiciliado: value,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        console.log("Propietario", res.data);
        // setIdVehiculo(res.data._id);
        toast({
          title: `Propietario creado correctamente`,
          description: "Estado : OK",
          status: "success",
          duration: 8000,
          isClosable: true,
        });

        resetForm();
      } catch (e) {
        toast({
          title: "error creando propietario",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(e);
      }

      setIdVehiculo(null);
    },
  });

  return (
    <Box
      display="flex"
      fontFamily="Montserrat"
      border="1px"
      borderColor="blue.600"
      borderRadius={10}
      p={3}
      w="full"
    >
      <Box mr={4} w="full">
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Propietario
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Flex w="full" gap={3} mb={2}>
            <Box w="100%">
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Nombres
              </Text>
              <Input
                id="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
            <Box w="100%">
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Apellidos
              </Text>
              <Input
                id="lastname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
          </Flex>

          <Box mb={2}>
            <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
              Dirección
            </Text>
            <Input
              id="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              variant="filled"
              size="sm"
              borderRadius={6}
              background="gray.200"
            />
          </Box>
          <Flex w="100%" mb={2} gap={3}>
            {" "}
            <Box w="100%">
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                Teléfono
              </Text>
              <Input
                id="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
            <Box w="100%">
              <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
                DNI
              </Text>
              <Input
                id="dni"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dni}
                variant="filled"
                size="sm"
                borderRadius={6}
                background="gray.200"
              />
            </Box>
          </Flex>
          <Box mb={2}>
            <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
              Correo
            </Text>
            <Input
              id="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="filled"
              size="sm"
              borderRadius={6}
              background="gray.200"
            />
          </Box>

          <Box mb={2}>
            <Text fontSize="sm" textColor="gray.900" fontWeight="600" mb={0}>
              Método de pago
            </Text>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio colorScheme="blue" value="true">
                  Domiciliado
                </Radio>
                <Radio colorScheme="blue" value="false">
                  No Domiciliado
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

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
            Crear Propietario
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default FormCrearPropietario;
