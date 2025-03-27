import ListItem from "@/components/tabs/ListItem";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const mockData = [
  {
    id: "1",
    imageSource: "../assets/example1.png",
    category: "Buraco na Rua",
    status: "Pendente",
    description: "Buraco grande na avenida principal",
    location: {
      coords: {
        latitude: -19.9178,
        longitude: -43.9456,
        altitude: 780,
        accuracy: 4,
        altitudeAccuracy: 2,
        heading: 180,
        speed: 2.0,
      },
      timestamp: Date.now(),
    },
  },
  {
    id: "2",
    imageSource: "../assets/example2.png",
    category: "Luz Queimada",
    status: "Resolvido",
    description: "Poste apagado na rua central",
    location: {
      coords: {
        latitude: -19.9167,
        longitude: -43.9345,
        altitude: 850,
        accuracy: 5,
        altitudeAccuracy: 3,
        heading: 90,
        speed: 1.5,
      },
      timestamp: Date.now(),
    },
  },
];
export default function Issues() {
  const repeatedData = Array.from({ length: 10 }, (_, index) => ({
    ...mockData[index % mockData.length],
    id: (index + 1).toString(),
  }));
  return (
    <View style={styles.container}>
      <FlatList
        data={repeatedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});
