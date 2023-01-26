import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan="1"
        bg="purple.400"
        minHeight="100vh"
        p="1.5rem"
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem as="main" colSpan="5" p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
