import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Box, Container, Stack, } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Offers from '../../components/Offers'
import Specialization from "../../components/Specialization";
import Specialist from "../../components/Specialist/Specialist";
import PatientCare from "../../components/PatientCare/PatientCare";

export default function Homepage() {
  return (
    <>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
            paddingBottom: "30vh"
          }}
        >
          <Navbar />
          <Container maxWidth={false} sx={{ width: "90%" }}>
            <Hero />

          </Container>
        </Box>

        <Offers />

        <Specialization />

        <Specialist />

        <PatientCare />
    </>
  )
}