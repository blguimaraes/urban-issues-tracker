import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";
import * as Location from "expo-location";

export default function ListItem({
  imageSource,
  category,
  status,
  description,
  location,
}: {
  imageSource: string;
  category: string;
  status: string;
  description: string;
  location: Location.LocationObject;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.chipContainer}>
          <Chip>{category}</Chip>
          <Chip>{status}</Chip>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Chip>
          {`${location.coords.latitude.toFixed(
            5
          )}, ${location.coords.longitude.toFixed(5)}`}
        </Chip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  chipContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
});
