import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const TestMaterial = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            sx={{
              backgroundColor: {
                xs: "red",
                sm: "yellow",
                md: "peru",
              },
              marginTop: { xs: "10px", sm: "30px", md: "50px" },
            }}
          >
            caja 1
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography sx={{ backgroundColor: "blue" }}>caja 2</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography sx={{ backgroundColor: "green" }}>caja 3</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestMaterial;
