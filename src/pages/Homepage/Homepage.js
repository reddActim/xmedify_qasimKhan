import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Box, Container, Stack, } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Offers from '../../components/Offers'
import Specialization from "../../components/Specialization";
import Specialist from "../../components/Specialist/Specialist";
import PatientCare from "../../components/PatientCare/PatientCare";
import Blogs from "../../components/Sections/Blogs/Blogs";
import { CssBaseline } from "@mui/material";
import OurFamilies from "../../components/Sections/OurFamilies/OurFamilies";
import FAQs from "../../components/Sections/FAQs/FAQs";
import Search from "../../components/Search/Search";
import HeroServices from "../../components/heroServices/HeroServices";


export default function Homepage() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
      >
        <Navbar />
        <Container maxWidth={false} sx={{ width: "90%", }}>
          <Hero />
          <Stack 
                      p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }} 
                      position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
                 >
            <Search />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialist />

      <PatientCare />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </>
  )
}