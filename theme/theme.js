import { Palette } from "@mui/icons-material";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    Palette:{
        mode: "light",
        primary:{
            main:"#1976d2",
        },
        secondary:{
            main:"#dc004e",
        },
        background:{
            default:"#f5f5f5",
            paper:"#fff",
        },
    }
})
export default theme;