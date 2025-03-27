import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Dialog,
  Divider,
  Menu,
  Portal,
  Switch,
} from "react-native-paper";

export default function Settings() {
  const { signOut } = useSession();

  const [isSwitch1On, setIsSwitch1On] = useState(false);
  const [isSwitch2On, setIsSwitch2On] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const onToggleSwitch1 = () => setIsSwitch1On(!isSwitch1On);
  const onToggleSwitch2 = () => setIsSwitch2On(!isSwitch2On);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Menu.Item
          leadingIcon="account"
          onPress={() => {}}
          title="Dados do usuário"
          style={styles.menuItem}
        />
        <Menu.Item
          leadingIcon="security"
          onPress={() => {}}
          title="Segurança e Privacidade"
          style={styles.menuItem}
        />
        <Menu.Item
          leadingIcon="connection"
          onPress={() => {}}
          title="Conexões"
          style={styles.menuItem}
          disabled
        />
        <Divider />
        <View style={styles.switchContainer}>
          <Text>{`Alertas de Sistema: ${isSwitch1On ? "ON" : "OFF"}`}</Text>
          <Switch value={isSwitch1On} onValueChange={onToggleSwitch1} />
        </View>
        <View style={styles.switchContainer}>
          <Text>{`Compartilhar Dados de Uso: ${
            isSwitch2On ? "ON" : "OFF"
          }`}</Text>
          <Switch value={isSwitch2On} onValueChange={onToggleSwitch2} />
        </View>
      </View>
      <View>
        <Divider />
        <Menu.Item
          leadingIcon="logout"
          onPress={() => showDialog()}
          style={{ justifyContent: "flex-end" }}
          title="Sair"
        />
      </View>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => hideDialog()}>
          <Dialog.Title>Confirmação</Dialog.Title>
          <Dialog.Content>
            <Text>Deseja mesmo sair?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>Cancelar</Button>
            <Button
              onPress={() => {
                hideDialog();
                return signOut();
              }}
            >
              Sair
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  container: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    padding: 8,
  },
  menuItem: {
    width: "90%",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 12,
  },
  switch: {
    marginLeft: 10,
  },
});
