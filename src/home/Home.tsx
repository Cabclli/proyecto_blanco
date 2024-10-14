import React from "react";
import { Container, Stack } from "@mui/material";
import Carousel from "./components/carrusel";
import MediaCard from "./components/card";
const slides = [
  { image: "https://via.placeholder.com/600x300?text=Image+1", url: "/planes" },
  { image: "https://via.placeholder.com/600x300?text=Image+2", url: "/planes" },
  { image: "https://via.placeholder.com/600x300?text=Image+3", url: "/planes" },
];

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Carousel slides={slides} />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
