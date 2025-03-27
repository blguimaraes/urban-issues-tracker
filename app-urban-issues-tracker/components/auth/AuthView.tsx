import { backgroundColors } from "@/constants/theme";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function AuthView({ children }: PropsWithChildren) {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text variant="titleSmall" style={styles.text}>
          App Buraco
        </Text>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColors.brand.default,
  },
  container: {
    margin: "auto",
    maxHeight: "80%",
    padding: 24,
    borderRadius: 8,
    gap: 16,
    backgroundColor: backgroundColors.default.default,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#d9d9d9",
  },
  text: {
    textAlign: "center",
    fontSize: 72,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 86.4,
    letterSpacing: -2.16,
  },
});
