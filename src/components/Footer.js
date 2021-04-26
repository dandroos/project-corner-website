import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box, Typography, Link } from "@material-ui/core"
import LocationMap from "./LocationMap"
import WebsiteCredit from "./WebsiteCredit"
import { address, tel, tel_display, email } from "../contact-config"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const getCopyrightYear = () => {
    const currentYear = new Date().getFullYear()
    if (currentYear !== 2021) {
      return `2021 - ${currentYear}`
    }
    return 2021
  }

  const Section = ({ children, title }) => (
    <Box py={3}>
      {title && (
        <Typography variant="h3" paragraph>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  )

  return (
    <Box bgcolor="secondary.main" color="common.white" align="center">
      <Section>
        <Container>
          <StaticImage
            src="../images/logo-white.png"
            alt="Logo"
            width={150}
            placeholder="none"
          />
          <Typography>{address.join(", ")}</Typography>
          <Typography>
            <Link color="inherit" href={`tel:${tel}`}>
              {tel_display}
            </Link>
          </Typography>
          <Typography>
            <Link color="inherit" href={`mailto:${email}`}>
              {email}
            </Link>
          </Typography>
        </Container>
      </Section>
      <Section title="Horario">
        <Container>
          <Typography>Lunes a Jueves</Typography>
          <Typography>16:00 - 19:00</Typography>
        </Container>
      </Section>
      {typeof window !== "undefined" ? (
        <Section title="Donde estamos">
          <LocationMap />
        </Section>
      ) : null}
      <Box>
        <Typography variant="caption" display="block" align="center">
          Todos los contenidos son Copyright &copy; {getCopyrightYear()}
          {` ${data.site.siteMetadata.title}`}
        </Typography>
        <WebsiteCredit />
      </Box>
    </Box>
  )
}

export default Footer
