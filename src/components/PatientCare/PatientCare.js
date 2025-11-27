import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../assets/patientcaring.png'
import tick from '../../assets/tick-blue.png'

export default function PatientCare() {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography fontWeight={600} color="#2AA7FF">
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography variant="h2" mb={1}>
                Patient <Box component="span" color="primary.main">Caring</Box>
              </Typography>
              <Typography color="#77829D" lineHeight={1.8} mb={3}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner...
              </Typography>

              <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                {["Stay Updated About Your Health", "Check Your Results Online", "Manage Your Appointments"].map((text, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box component="img" src={tick} height={22} width={22} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        color: "#1B3C74"
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
