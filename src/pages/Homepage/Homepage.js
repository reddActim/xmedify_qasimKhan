import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Box, Container, Stack, } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Offers from '../../components/Offers'

export default function Homepage() {
  return (
    <>
      <Box>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
            paddingBottom: "30vh"
          }}
        >
          <Navbar />
          <Container sx={{ maxWidth: "90%" }}>
            <Hero />

          </Container>
        </Box>
        <Offers />
      </Box>
    </>
  )
}