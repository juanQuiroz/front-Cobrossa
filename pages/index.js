import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Grid,
  GridItem,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import Login from "../assets/login.svg";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Home() {
  const [value, setValue] = React.useState("");
  const handleChange = event => setValue(event.target.value);
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={1}
      height="100vh"
      bg="blackAlpha.100"
    >
      <GridItem minHeight="100%" display="flex" alignItems="center">
        <Box w="full">
          <Text fontWeight={700} color="blue.600" fontSize="4xl" align="center">
            Cobros SA
          </Text>
          <Text color="blackAlpha.700" fontSize="3xl" align="center" mb={6}>
            Software de recaudacion
          </Text>

          <Login />
        </Box>
      </GridItem>
      <GridItem display="flex" px={"28"} py={"36"}>
        <FormControl bg="white" borderRadius={8} py={2} px={6}>
          <Text
            fontWeight={700}
            color="blue.500"
            fontSize="4xl"
            align="center"
            mb={8}
          >
            Iniciar Sesión
          </Text>
          <Box>
            <Text fontWeight={500} mb="4px">
              Usuario
            </Text>
            <Input onChange={handleChange} size="md" />
          </Box>
          <Box mt={5}>
            <Text fontWeight={500} mb="4px">
              Contraseña
            </Text>
            <Input type="password" onChange={handleChange} size="md" />
          </Box>

          <Button mt={8} w="full" colorScheme="blue">
            <Link href="/administrados">
              <a>Ingresar</a>
            </Link>
          </Button>
        </FormControl>
      </GridItem>
    </Grid>
  );
}
