import React from "react";
import MapView from "react-native-maps";

import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Callout } from "react-native-maps";
class CityMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: this.props.coordinates[0].latitude,
            longitude: this.props.coordinates[0].longitude,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035,
          }}
        >
          {this.props.events !== null &&
            this.props.events.map((event) => (
              <Marker
                key={event.id}
                coordinate={{
                  latitude: parseFloat(event.location.split(",")[0]),
                  longitude: parseFloat(
                    event.location.split(",")[1].split(" ")[1]
                  ),
                }}
              >
                <Callout>
                  <View>
                    <Text style={styles.titleStyle}>{event.name}</Text>
                    <Text style={styles.subtitleDateStyle}>
                      {event.date}
                      <Text style={styles.subtitleHourStyle}>
                        {"   "}
                        {event.time}
                      </Text>
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))}
        </MapView>
      </View>
    );
  }
}

export default CityMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitleDateStyle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  subtitleHourStyle: {
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 12,
  },
});
