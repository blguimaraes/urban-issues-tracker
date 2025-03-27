import AuthView from "@/components/auth/AuthView";
import LoginRegisterSwitch from "@/components/auth/LoginRegisterSwitch";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";

export default function login() {
  const { signIn } = useSession();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthView>
      <View style={{ gap: 16, padding: 24 }}>
        <Button
          mode={"contained"}
          dark={true}
          loading={loading === true ? true : false}
          icon={"google"}
          onPress={() => {
            try {
              setLoading(true);
              signIn();
              // Navigate after signing in. You may want to tweak this to ensure sign-in is
              // successful before navigating.
              router.replace("/");
            } catch {}
          }}
        >
          Entrar com Google
        </Button>
        <Divider />
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          value={password}
          onChangeText={(password) => setPassword(password)}
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
              router.replace("/");
            } catch {}
          }}
        >
          Entrar
        </Button>
        <Button
          style={{ alignSelf: "flex-start" }}
          onPress={() => {
            router.replace("/(auth)/reset");
          }}
        >
          Esqueceu sua senha?
        </Button>
        <LoginRegisterSwitch />
      </View>
    </AuthView>
  );
}
