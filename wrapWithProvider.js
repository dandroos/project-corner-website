import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import theme from "./src/theme"
import { Helmet } from "react-helmet"
import { store } from "./src/state"
import { font } from "./src/style"

const wrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${font.replace(
            / /gi,
            "+"
          )}&display=swap`}
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  )
}

export default wrapWithProvider
