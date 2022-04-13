// import { createTheme } from "@material-ui/core"
import { createTheme } from "@mui/material"
import { blue, orange, purple } from "@mui/material/colors"

export default createTheme({
  status: {
    // primary: purple[500],
  },
  typography: {
    fontFamily: [

    ],
    h1: {
      fontSize: 100,
    },
    h2: {
      fontSize: 100
    }
  },
  palette: {
    primary: {
      main: purple[500],
      dark: purple[100],
      light: purple[900],
    },
    secondary: {
      main: orange[200],
    },
    success: {
      main: orange[200],
    },
    info: {
      main: '#efefef',
    }
  },
})