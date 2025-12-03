import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Search from "../../components/Search/Search";
import { Box, Stack, Container } from '@mui/material';
import HospitalCard from "../../components/HospitalCard/HospitalCard";

const hospitals = [
    {
        "Provider ID": "020026",
        "Hospital Name": "ALASKA NATIVE MEDICAL CENTER",
        "Address": "4315 DIPLOMACY DR",
        "City": "ANCHORAGE",
        "State": "Alaska",
        "ZIP Code": 99508,
        "County Name": "ANCHORAGE",
        "Phone Number": 9075632662,
        "Hospital Type": "Acute Care Hospitals",
        "Hospital Ownership": "Government - Federal",
        "Emergency Services": "Yes",
        "Meets criteria for meaningful use of EHRs": "Y",
        "Hospital overall rating": 2,
        "Hospital overall rating footnote": "This hospital�s star rating only includes data reported on inpatient services",
        "Mortality national comparison": "Same as the national average",
        "Mortality national comparison footnote": "",
        "Safety of care national comparison": "Below the national average",
        "Safety of care national comparison footnote": "",
        "Readmission national comparison": "Same as the national average",
        "Readmission national comparison footnote": "",
        "Patient experience national comparison": "Below the national average",
        "Patient experience national comparison footnote": "",
        "Effectiveness of care national comparison": "Below the national average",
        "Effectiveness of care national comparison footnote": "",
        "Timeliness of care national comparison": "Not Available",
        "Timeliness of care national comparison footnote": "Results are not available for this reporting period",
        "Efficient use of medical imaging national comparison": "Not Available",
        "Efficient use of medical imaging national comparison footnote": "Results are not available for this reporting period"
    },
];

export default function SearchPage() {
    console.log("welcome to searchpage")
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
                    width: "100%",
                    pl: 0,
                }}
                
            >
                <Box
                    sx={{
                        position: "relative",
                        background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                    }}
                >
                    <Container
                        maxWidth="xl"
                        sx={{
                            background: "#fff",
                            p: 3,
                            borderRadius: 2,
                            transform: "translatey(50px)",
                            mb: "50px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Search />
                    </Container>
                </Box>

                    <HospitalCard details={hospitals[0]}/>

            </Box>
        </>
    );
}