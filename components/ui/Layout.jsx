/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";

//Componentes
import NavBar from "./NavBar";
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cobros SA</title>

        <meta
          name="viewport"
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Mitr:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box height="100vh" width="100%" bg="blackAlpha.200" p={2}>
        <Box width="full">
          <NavBar />
        </Box>
        <Box width="full">{children}</Box>
      </Box>
    </>
  );
};

export default Layout;
