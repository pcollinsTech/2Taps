import React from "react"
import { Gmaps, Marker } from "react-gmaps"

const coords = {
  lat: 54.6027802,
  lng: -5.9233891,
}

const params = { v: "3.exp", key: "AIzaSyCWsvaGkc3CpZ6lNUABU0zltJq7-ww9RsA" }

class Gmap extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      //   disableDefaultUI: true,
    })
  }

  onDragEnd(e) {
    console.log("onDragEnd", e)
  }

  onCloseClick() {
    console.log("onCloseClick")
  }

  onClick(e) {
    console.log("onClick", e)
  }

  render() {
    return (
      <Gmaps
        width={"800px"}
        height={"400px"}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={"Be happy"}
        params={params}
        onMapCreated={this.onMapCreated}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd}
        />
      </Gmaps>
    )
  }
}

export default Gmap
