import CameraComponent from "@/components/tabs/CameraComponent";
import { backgroundColors } from "@/constants/theme";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Button,
  Dialog,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";

import * as Location from "expo-location";
import { router } from "expo-router";

export default function Report() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <View style={{ gap: 16 }}>
          <TextInput
            mode={"outlined"}
            label="Local"
            value={`${location?.coords.latitude}, ${location?.coords.longitude}`}
            editable={false}
          />
          <Image source={require("@/assets/images/imagePlaceholder.png")} />
          <Button mode="contained" onPress={() => showModal()}>
            Anexar Foto
          </Button>
          <TextInput mode="outlined" label="Categoria" maxLength={30} />
          <TextInput
            mode="outlined"
            label="Descrição"
            multiline={true}
            maxLength={180}
            right={<TextInput.Affix text="/180" />}
          />
          <Button mode="contained" onPress={showDialog}>
            Enviar
          </Button>
        </View>
      </View>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <CameraComponent />
        </Modal>
        <Dialog visible={dialogVisible} onDismiss={() => hideDialog()}>
          <Dialog.Title>Confirmação</Dialog.Title>
          <Dialog.Content>
            <Text>Deseja registrar essa denúncia?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>Cancelar</Button>
            <Button
              onPress={() => {
                hideDialog();
                return router.push("/");
              }}
            >
              Enviar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
    margin: "auto",
    maxHeight: "90%",
    padding: 24,
    borderRadius: 8,
    gap: 16,
    backgroundColor: backgroundColors.default.default,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#d9d9d9",
  },
  img: {
    width: 272,
    height: 247,
    resizeMode: "contain",
  },
});
