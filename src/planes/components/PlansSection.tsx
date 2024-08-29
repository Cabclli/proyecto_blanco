import {
  Stack,
  OutlinedInput,
  InputAdornment,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "@mui/icons-material/Tune";

const PlansSection = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        borderRadius={"0px 0px 32px 32px"}
        p={4}
        bgcolor="#2e47ad"
      >
        <Stack spacing={2} sx={{ width: 350 }} bgcolor="#2e47ad">
          <Box bgcolor={"white"} borderRadius={"8px"}>
            <OutlinedInput
              id="outlined-search"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <TuneIcon />
                </InputAdornment>
              }
              fullWidth
            />
          </Box>
          <Box bgcolor={"white"} borderRadius={"8px"}>
            <OutlinedInput
              id="outlined-person"
              startAdornment={
                <InputAdornment position="start">
                  <PersonAddAlt1Icon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <ExpandMoreIcon />
                </InputAdornment>
              }
              fullWidth
            />
          </Box>
          <Box bgcolor={"white"} borderRadius={"8px"}>
            <OutlinedInput
              id="outlined-calendar"
              startAdornment={
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              }
              fullWidth
            />
          </Box>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        width={100}
        sx={{
          position: "relative",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button variant="contained">Buscar</Button>
      </Stack>

      <Stack
        borderTop={"solid 2px lightgray"}
        margin={2}
        paddingTop={2}
        borderBottom={"solid 2px lightgray"}
        paddingBottom={2}
      >
        <Typography paddingLeft={2} color={"#2e47ad"}>
          Visitados recientemente
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Card sx={{ maxWidth: 345, p: 2, boxShadow: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://hips.hearstapps.com/hmg-prod/images/habitacion-hotel-revolve2-1546271048.jpeg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Habitacion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hola y chau
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginTop: 20, p: 2, boxShadow: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://hips.hearstapps.com/hmg-prod/images/habitacion-hotel-revolve2-1546271048.jpeg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Habitacion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hola y chau
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginTop: 20, p: 2, boxShadow: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://hips.hearstapps.com/hmg-prod/images/habitacion-hotel-revolve2-1546271048.jpeg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Habitacion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  hola y chau
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default PlansSection;
