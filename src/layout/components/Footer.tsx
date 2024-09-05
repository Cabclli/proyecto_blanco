import * as React from "react";
import { Button, ButtonProps, Stack } from "@mui/material";
import styled from "@emotion/styled";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    "&:hover": {
      color: "#fff",
      backgroundColor: "#486c99",
    },
  }));

  return (
    <footer>
      <Stack
        sx={{
          bgcolor: "#153f73",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "#fff",
          paddingBottom: 1,
          paddingTop: 1,
        }}
      >
        <ColorButton variant="text" sx={{ color: "white" }}>
          Contactanos
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          Nuestras redes
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          Sobre nosotros
        </ColorButton>
        <ColorButton variant="text" sx={{ color: "white" }}>
          Ayuda
        </ColorButton>
      </Stack>
    </footer>
  );
}
