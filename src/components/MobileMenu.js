import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import {
  Dialog,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Fab,
  Slide,
} from "@material-ui/core"
import { Close } from "mdi-material-ui"

import { internal, external } from "../navigation"
import { setShowMobileMenu } from "../state"

const MobileMenu = ({ dispatch, isOpen }) => {
  const handleClose = () => {
    dispatch(setShowMobileMenu(false))
  }
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Fab
          style={{ position: "absolute", top: 15, right: 15 }}
          onClick={handleClose}
        >
          <Close />
        </Fab>
        <StaticImage
          src="../images/logo.png"
          alt="Logo"
          width={150}
          placeholder="none"
        />
        <List style={{ width: "100%" }}>
          {internal.map((i, ind) => (
            <ListItem
              key={ind}
              component={Link}
              to={i.link}
              button
              onClick={handleClose}
              activeStyle={{ fontWeight: "bold" }}
            >
              <ListItemText
                primary={i.label}
                primaryTypographyProps={{
                  variant: "button",
                  align: "center",
                  style: { fontWeight: "inherit" },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box mt={2}>
          {external.map((i, ind) => (
            <IconButton key={ind} onClick={() => window.open(i.link, "_blank")}>
              <i.icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.showMobileMenu,
})

export default connect(mapStateToProps)(MobileMenu)
