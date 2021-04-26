import React, { useState } from "react"
import { connect } from "react-redux"
import {
  Typography,
  ListItemIcon,
  Fab,
  Menu,
  MenuItem,
} from "@material-ui/core"
import { Phone, Whatsapp } from "mdi-material-ui"
import { tel_display, tel } from "../contact-config"

const MobileContact = ({ isMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const NumberSuffix = () => (
    <Typography style={{ marginLeft: 10 }} variant="caption">
      ({tel_display})
    </Typography>
  )

  return (
    isMobile && (
      <>
        <Fab
          style={{
            backgroundColor: "#25D366",
            color: "#fafafa",
            position: "fixed",
            bottom: 15,
            right: 15,
            zIndex: 1000,
          }}
          onClick={handleClick}
        >
          <Phone />
        </Fab>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              window.open(`tel:34${tel}`)
              handleClose()
            }}
          >
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <Typography>Llamar</Typography>
            <NumberSuffix />
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.open(`https://wa.me/34${tel}`)
              handleClose()
            }}
          >
            <ListItemIcon>
              <Whatsapp />
            </ListItemIcon>
            <Typography>WhatsApp</Typography>
            <NumberSuffix />
          </MenuItem>
        </Menu>
      </>
    )
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(MobileContact)
