import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import { Divider, Text } from "react-native-paper";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>Esse local não existe.</Text>
        <Text>Você não deveria estar aqui.</Text>
        <Divider />
        <Link href="/" style={styles.link}>
          <Text>Voltar para tela inicial!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
