import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { router, usePathname } from "expo-router";

export default function LoginRegisterSwitch() {
  const pathname: string = usePathname();
  return (
    <View style={styles.group}>
      <Button
        mode={pathname === "/login" ? "contained" : "outlined"}
        disabled={pathname === "/(auth)/login" ? true : false}
        onPress={() => {
          router.replace("/(auth)/login");
        }}
      >
        Entrar
      </Button>
      <Button
        mode={pathname === "/register" ? "contained" : "outlined"}
        disabled={pathname === "/(auth)/register" ? true : false}
        onPress={() => {
          router.replace("/(auth)/register");
        }}
      >
        Registrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 8,
  },
});
