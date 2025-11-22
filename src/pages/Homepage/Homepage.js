import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Box , Container, Stack, } from "@mui/material";
import Hero from "../../components/Hero/Hero";

export default function Homepage(){
    return (
        <>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <Hero />

        </Container>
      </Box>
        </>
    )
}