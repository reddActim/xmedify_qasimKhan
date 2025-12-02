import { Box, Stack, Typography } from '@mui/material';
import icon1 from '../../assets/card_service.png';
import icon2 from '../../assets/card_service (1).png';
import icon3 from '../../assets/card_service (2).png';
import icon4 from '../../assets/card_service (3).png';
import icon5 from '../../assets/card_service (4).png';

export default function HeroServices() {
    return (
        <Stack gap={4} sx={{alignItems:"center"}}>
            <Typography
                color='#102851'
                variant='h5'
                sx={{
                    fontWeight: "500",
                    fontStyle: "Medium",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                }}
            >
            You may be looking for
            </Typography>
            <Stack
            direction="row"
            gap={2}>
                <Box component="img" src={icon1} sx={{width: "203px", height:"150px"}} />
                <Box component="img" src={icon2} sx={{width: "203px", height:"150px"}} />
                <Box component="img" src={icon3} sx={{width: "203px", height:"150px"}} />
                <Box component="img" src={icon4} sx={{width: "203px", height:"150px"}} />
                <Box component="img" src={icon5} sx={{width: "203px", height:"150px"}} />
            </Stack>
        </Stack>
    )
}