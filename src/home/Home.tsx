import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Siguiente
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Home;
