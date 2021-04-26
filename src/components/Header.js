import React from "react"
import { connect } from "react-redux"
import { setShowMobileMenu } from "../state"
import { navigate, useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@material-ui/core"
import { Menu } from "mdi-material-ui"
import { internal, external } from "../navigation"

const Header = ({ dispatch, atTop, isMobile }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppBar color={atTop ? "transparent" : "primary"}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <Box mr={1}>
            {atTop ? (
              <StaticImage
                src="../images/logo.png"
                alt="Logo"
                width={45}
                placeholder="none"
              />
            ) : (
              <StaticImage
                src="../images/logo-white.png"
                alt="Logo in white"
                width={45}
                placeholder="none"
              />
            )}
          </Box>
          <Typography variant="h5" variantMapping={{ h5: "h1" }}>
            {data.site.siteMetadata.title}
          </Typography>
        </Box>
        <Box flexGrow={1} />
        {isMobile ? (
          <IconButton
            onClick={() => dispatch(setShowMobileMenu(true))}
            color={atTop ? "default" : "inherit"}
            edge="end"
          >
            <Menu />
          </IconButton>
        ) : (
          <>
            {internal.map((i, ind) => (
              <Button
                key={ind}
                color={atTop ? "default" : "inherit"}
                component={Link}
                to={i.link}
              >
                {i.label}
              </Button>
            ))}
            <Box ml={1}>
              {external.map((i, ind) => (
                <a href={i.link} key={ind} style={{ color: "inherit" }}>
                  <IconButton
                    target="_blank"
                    rel="noopener noreferrer"
                    edge={ind === external.length - 1 ? "end" : false}
                    color={atTop ? "default" : "inherit"}
                  >
                    <i.icon />
                  </IconButton>
                </a>
              ))}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  atTop: state.atTop,
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Header)
