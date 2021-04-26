import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setCurrentPage } from "../state"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container, Typography, Button } from "@material-ui/core"
import { Information, Calendar } from "mdi-material-ui"

import Seo from "../components/seo"

const IndexPage = ({ dispatch, isMobile }) => {
  useEffect(() => {
    dispatch(setCurrentPage("inicio"))
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Seo title="Home" />
      <Box height="100vh" width="100%">
        <Box
          position="absolute"
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          zIndex={750}
          align="center"
        >
          <Container>
            <StaticImage
              src="../images/logo.png"
              alt="Big logo"
              width={250}
              placeholder="blurred"
              style={{ marginBottom: 15 }}
            />
            <Typography variant="h2">¡Aprendamos inglés!</Typography>
            <Typography paragraph>
              Profesores nativos de inglés ayudando a la gente de Fuerteventura
              a hablar mejor inglés desde 2016.
            </Typography>

            <Button
              startIcon={<Information />}
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/conocenos"
              fullWidth={isMobile}
            >
              Quienes somos
            </Button>
            {!isMobile ? <Box mx={1} display="inline-block" /> : <Box my={1} />}
            <Button
              startIcon={<Calendar />}
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/cursos"
              fullWidth={isMobile}
            >
              Ver nuestros cursos
            </Button>
          </Container>
        </Box>
        <Box
          position="absolute"
          height="100%"
          width="100%"
          zIndex={500}
          style={{ opacity: 0.8 }}
          bgcolor="common.white"
        />
        <StaticImage
          alt="Union Jack"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            verticalAlign: "bottom",
          }}
          placeholder="blurred"
          transformOptions={{ cropFocus: "entropy" }}
          src="../images/hero.jpg"
        />
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(IndexPage)
