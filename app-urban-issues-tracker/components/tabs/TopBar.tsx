import { backgroundColors } from "@/constants/theme";
import { router } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Text } from "react-native-paper";

export default function TopBar({
  title,
  isIndex = false,
}: {
  title: string;
  isIndex?: boolean;
}) {
  return (
    <Appbar.Header style={styles.header}>
      {isIndex ? (
        <Appbar.Action icon="map" onPress={() => {}} />
      ) : (
        <Appbar.BackAction
          onPress={() => {
            router.replace("/");
          }}
        />
      )}
      <Text variant="headlineSmall">{title}</Text>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: backgroundColors.default.default,
  },
});
