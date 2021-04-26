import React from "react"
import { Box } from "@material-ui/core"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { Icon } from "leaflet"
import logoPin from "../images/logopin.png"

const LocationMap = () => {
  const latLong = [28.508272547985342, -13.85802176745168]
  return (
    <Box width="100%">
      <MapContainer
        center={latLong}
        zoom={15}
        style={{
          height: "20rem",
          width: "100%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          position={latLong}
          icon={
            new Icon({
              iconUrl: logoPin,
              iconAnchor: [20, 80],
            })
          }
        />
      </MapContainer>
    </Box>
  )
}

export default LocationMap
