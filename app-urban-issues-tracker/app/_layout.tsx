import { theme } from "@/constants/theme";
import { SessionProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </PaperProvider>
  );
}
