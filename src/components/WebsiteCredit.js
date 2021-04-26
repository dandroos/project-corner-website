import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Typography } from "@material-ui/core"

const WebsiteCredit = () => {
  return (
    <Box p={1} align="center">
      <Typography variant="caption" display="block" align="center">
        Site by
      </Typography>
      <StaticImage
        src="../images/prospr.png"
        width={110}
        placeholder="none"
        alt="Prospr logo"
      />
    </Box>
  )
}

export default WebsiteCredit
