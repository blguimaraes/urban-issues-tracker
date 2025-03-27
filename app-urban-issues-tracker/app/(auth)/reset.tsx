import AuthView from "@/components/auth/AuthView";
import LoginRegisterSwitch from "@/components/auth/LoginRegisterSwitch";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function login() {
  const { signIn } = useSession();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  return (
    <AuthView>
      <View style={{ gap: 16, padding: 24 }}>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Button
          mode={"contained"}
          dark={true}
          loading={loading === true ? true : false}
          onPress={() => {
            try {
              setLoading(true);
              signIn();
              // Navigate after signing in. You may want to tweak this to ensure sign-in is
              // successful before navigating.
              router.replace("/login");
            } catch {}
          }}
        >
          Recuperar Senha
        </Button>
        <LoginRegisterSwitch />
      </View>
    </AuthView>
  );
}
