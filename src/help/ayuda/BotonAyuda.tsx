import { Button, Stack } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";


const boton = ()=>{
    const router = useRouter();
    const handleLoginClick = () => {
        router.push("/login");
      };
return <><></><Stack sx={{ flexDirection: "row", marginLeft: "auto" }}>
    <Button
        onClick={handleLoginClick}
        sx={{
            bgcolor: "#285b99",
            color: "#fff",
            "&:hover": {
                bgcolor: "#1e4a76",
            }
        }}
    >
        <PersonIcon sx={{ color: "#fff", marginRight: 1 }} />
        Iniciar sesión
    </Button>
</Stack></>}
export default boton