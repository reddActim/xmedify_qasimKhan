import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/heroImg.png"

export default function Hero() {
    return (
        <>
            <Stack direction={{ xs: 'column', md: "row" }} alignItems="center" sx={{mt: "1em",  paddingRight: "1.8rem"}}>
                <Box>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontStyle: "Medium",
                        fontSize: "31px",
                        leadingTrim: "NONE",
                        lineHeight: "68px",
                        letterSpacing: "2%",
                        color: "#102851"
                    }} >Skip the travel! Find Online</Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        fontStyle: "Bold",
                        fontSize: "56px",
                        leadingTrim: "NONE",
                        lineHeight: "68px",
                        letterSpacing: "2%",
                    }} mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
                    <Typography sx={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontStyle: "Regular",
                        fontSize: "20px",
                        leadingTrim: "NONE",
                        lineHeight: "32px",
                        letterSpacing: "2%",
                        color: "#5C6169"
                    }} fontSize={{ md: 20 }} mb={3}>
                        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                    </Typography>
                    <Link to='/search'>
                        <Button variant='contained' size="large" sx={{ backgroundColor: "#2AA8FF", borderRadius: "8px" }} disableElevation>
                            Find Centers
                        </Button>
                    </Link>
                </Box>
                <Box
                    component={'img'}
                    src={img}
                    width={{ xs: 1, md: "50%" }}
                    sx={{}}
                />
            </Stack>
        </>
    )
}