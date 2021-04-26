import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { setCurrentPage } from "../state"
import {
  Toolbar,
  Box,
  Container,
  Link,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"
import { Phone, Email } from "mdi-material-ui"
import Seo from "../components/seo"
import LocationMap from "../components/LocationMap"
import ContactForm from "../components/ContactForm"
import { email, tel, tel_display, address } from "../contact-config"

const ContactoPage = ({ dispatch, isMobile }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    dispatch(setCurrentPage("contacto"))
    //eslint-disable-next-line
  }, [])
  return (
    <>
      <Seo title="Contacto" />
      <Toolbar />
      <Box align={isMobile ? "center" : "left"}>
        <Container maxWidth="md">
          <Typography variant="h2">Contacto</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box align="center">
                <Typography variant="h5">
                  {data.site.siteMetadata.title}
                </Typography>
                <Typography paragraph>
                  {address.map((i, ind) => (
                    <span key={ind}>
                      {i}
                      <br />
                    </span>
                  ))}
                </Typography>
                <Button
                  size="large"
                  fullWidth
                  startIcon={<Phone />}
                  component={Link}
                  href={`tel:34${tel}`}
                >
                  {tel_display}
                </Button>
                <Button
                  size="large"
                  fullWidth
                  startIcon={<Email />}
                  component={Link}
                  href={`mailto:${email}`}
                  style={{ textTransform: "inherit" }}
                >
                  {email}
                </Button>
                <Box>
                  <Typography variant="h5">Horario</Typography>
                  <Typography>Lunes a Jueves : 16:00 - 19:00</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <LocationMap />
            </Grid>
          </Grid>
          <Box my={3}>
            <Typography paragraph>
              Póngase en contacto con nosotros mediante el siguiente formulario.
            </Typography>

            <ContactForm />
          </Box>
        </Container>
      </Box>
    </>
  )
}
const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ContactoPage)
