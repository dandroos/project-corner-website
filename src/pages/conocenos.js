import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setCurrentPage } from "../state"
import { Link } from "gatsby"
import { Button, Toolbar, Box, Container, Typography } from "@material-ui/core"
import { Calendar } from "mdi-material-ui"
import YouTube from "react-youtube-embed"
import Seo from "../components/seo"

const ConocenosPage = ({ dispatch, isMobile }) => {
  useEffect(() => {
    dispatch(setCurrentPage("conócenos"))
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Seo title="Conócenos" />
      <Toolbar />
      <Box mb={3} align={isMobile ? "center" : "left"}>
        <Container maxWidth="md">
          <Typography variant="h2">Conócenos</Typography>
          <Typography paragraph>
            Nuestra academia de Inglés El Rincón de Idiomas lleva impartiendo
            clases en la isla de Fuerteventura desde el 20 de Junio de 2016. Al
            frente su Directora Jo Bowker con una experiencia docente de 15 años
            junto a un profesorado nativo que ofrecen la mejor preparación para
            aprender y domina el idioma.
          </Typography>
          <YouTube id="hFPC3gFwNCs" />
          <Box mt={3} align="center">
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
          </Box>
        </Container>
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ConocenosPage)
