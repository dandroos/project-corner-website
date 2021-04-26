import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { primary, secondary, background, font, headingFont } from "./style"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      default: background,
    },
  },
  typography: {
    fontFamily: font,
    fontSize: 15,
    h1: {
      fontFamily: headingFont,
    },
    h2: {
      fontFamily: headingFont,
    },
    h3: {
      fontFamily: headingFont,
    },
    h4: {
      fontFamily: headingFont,
    },
    h5: {
      fontFamily: headingFont,
    },
    h6: {
      fontFamily: headingFont,
    },
  },
  overrides: {
    MuiAppBar: {
      colorTransparent: {
        boxShadow: "none",
      },
    },
  },
  spacing: 12,
})

export default responsiveFontSizes(theme)
