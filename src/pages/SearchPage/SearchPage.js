import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar"
import Search from "../../components/Search/Search";
import { Box, Stack, Container, Typography } from '@mui/material';
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import icon from '../../assets/tickIcon.png';
import banner from '../../assets/advBanner.png';
import { useSearchParams } from "react-router-dom";
import AutohideSnackbar from "../../components/BookingModal/AutohideSnackbar";
import BookingModal from "../../components/BookingModal/BookingModal";


// const hospitals = [
//     {
//         "Provider ID": "020026",
//         "Hospital Name": "ALASKA NATIVE MEDICAL CENTER",
//         "Address": "4315 DIPLOMACY DR",
//         "City": "ANCHORAGE",
//         "State": "Alaska",
//         "ZIP Code": 99508,
//         "County Name": "ANCHORAGE",
//         "Phone Number": 9075632662,
//         "Hospital Type": "Acute Care Hospitals",
//         "Hospital Ownership": "Government - Federal",
//         "Emergency Services": "Yes",
//         "Meets criteria for meaningful use of EHRs": "Y",
//         "Hospital overall rating": 2,
//         "Hospital overall rating footnote": "This hospital�s star rating only includes data reported on inpatient services",
//         "Mortality national comparison": "Same as the national average",
//         "Mortality national comparison footnote": "",
//         "Safety of care national comparison": "Below the national average",
//         "Safety of care national comparison footnote": "",
//         "Readmission national comparison": "Same as the national average",
//         "Readmission national comparison footnote": "",
//         "Patient experience national comparison": "Below the national average",
//         "Patient experience national comparison footnote": "",
//         "Effectiveness of care national comparison": "Below the national average",
//         "Effectiveness of care national comparison footnote": "",
//         "Timeliness of care national comparison": "Not Available",
//         "Timeliness of care national comparison footnote": "Results are not available for this reporting period",
//         "Efficient use of medical imaging national comparison": "Not Available",
//         "Efficient use of medical imaging national comparison footnote": "Results are not available for this reporting period"
//     },
//     {
//         "Provider ID": "020026",
//         "Hospital Name": "ALASKA NATIVE MEDICAL CENTER",
//         "Address": "4315 DIPLOMACY DR",
//         "City": "ANCHORAGE",
//         "State": "Alaska",
//         "ZIP Code": 99508,
//         "County Name": "ANCHORAGE",
//         "Phone Number": 9075632662,
//         "Hospital Type": "Acute Care Hospitals",
//         "Hospital Ownership": "Government - Federal",
//         "Emergency Services": "Yes",
//         "Meets criteria for meaningful use of EHRs": "Y",
//         "Hospital overall rating": 2,
//         "Hospital overall rating footnote": "This hospital�s star rating only includes data reported on inpatient services",
//         "Mortality national comparison": "Same as the national average",
//         "Mortality national comparison footnote": "",
//         "Safety of care national comparison": "Below the national average",
//         "Safety of care national comparison footnote": "",
//         "Readmission national comparison": "Same as the national average",
//         "Readmission national comparison footnote": "",
//         "Patient experience national comparison": "Below the national average",
//         "Patient experience national comparison footnote": "",
//         "Effectiveness of care national comparison": "Below the national average",
//         "Effectiveness of care national comparison footnote": "",
//         "Timeliness of care national comparison": "Not Available",
//         "Timeliness of care national comparison footnote": "Results are not available for this reporting period",
//         "Efficient use of medical imaging national comparison": "Not Available",
//         "Efficient use of medical imaging national comparison footnote": "Results are not available for this reporting period"
//     },
// ];

const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
};

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(false);
    const [state, setState] = useState(searchParams.get("state"));
    const [city, setCity] = useState(searchParams.get("city"));
    const [hospitals, setHospitals] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);

    console.log("bookingDetails: ", bookingDetails);
    //set city and state onchange of url
    useEffect(() => {
        setState(searchParams.get("state"));
        setCity(searchParams.get("city"));
    }, [searchParams]);

    //calls api to fetch hospitals
    useEffect(() => {
        setHospitals([]);
        setIsLoading(true);
        try {
            if (city && state) {
                fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json()
                    })
                    .then(hospitals => {
                        setHospitals(hospitals)
                        setIsLoading(false);

                        console.log(hospitals);
                    }
                    )
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);

        }
    }, [state, city]);

    const handleBookingModal = (details) => {
        setBookingDetails(details);
        setIsModalOpen(true);
    };

    // console.log(searchParams.get("state"))
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

                <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
                    {hospitals.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                            <Typography
                                component="h1"
                                fontSize={24}
                                lineHeight={1.1}
                                mb={2}
                                fontWeight={500}
                            >
                                {`${hospitals.length} medical centers available in `}
                                <span style={{ textTransform: "capitalize" }}>
                                    {city.toLocaleLowerCase()}
                                </span>
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Box component="img" src={icon} height={24} width={24} alt="icon" />
                                <Typography color="#787887" lineHeight={1.4} >
                                    Book appointments with minimum wait-time & verified doctor
                                    details
                                </Typography>
                            </Stack>
                        </Box>
                    )}
                    <Stack alignItems="flex-start" direction={{ md: "row" }}>
                        <Stack
                            mb={{ xs: 4, md: 0 }}
                            spacing={3}
                            width={{ xs: 1, md: "calc(100% - 384px)" }}
                            mr="24px"
                        >
                            {hospitals.length > 0 &&
                                hospitals.map((hospital) => (
                                    <HospitalCard
                                        key={hospital["Hospital Name"]}
                                        details={hospital}
                                        availableSlots={availableSlots}
                                        handleBooking={handleBookingModal}
                                    />
                                ))}

                            {isLoading && (
                                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                                    Loading...
                                </Typography>
                            )}

                            {!state && (
                                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                                    Please select a state and city
                                </Typography>
                            )}
                        </Stack>

                        <img src={banner} width={360} height="auto" alt="banner" />
                    </Stack>

                </Container>
                <BookingModal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    bookingDetails={bookingDetails}
                    showSuccessMessage={setShowBookingSuccess}
                />

                <AutohideSnackbar
                    open={showBookingSuccess}
                    setOpen={setShowBookingSuccess}
                    message="Booking Successful"
                />

            </Box>
        </>
    );
}