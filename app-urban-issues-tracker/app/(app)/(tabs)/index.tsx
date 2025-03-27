import MapComponent from "@/components/tabs/MapComponent";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Text } from "react-native-paper";
import * as Location from "expo-location";

export default function Index() {
  const [map, setMap] = useState(<></>);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, [location]);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  useEffect(
    () =>
      /* Platform.OS === "web"
        ? setMap(
            <View style={styles.container}>
              <Text>Map is not available on web</Text>
            </View>
          )
        : */ setMap(<View style={styles.container}>{<MapComponent />}</View>),
    []
  );

  return (
    <View>
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        loadingEnabled={true}
        region={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : undefined
        }
      />
      {map}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
