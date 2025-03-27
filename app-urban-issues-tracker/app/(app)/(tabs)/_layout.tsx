import TopBar from "@/components/tabs/TopBar";
import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Mapa",
          headerTitle: (props) => <TopBar title="Mapa" isIndex={true} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name="issues"
        options={{
          title: "Minhas Denúncias",
          headerTitle: (props) => <TopBar title="Minhas Denúncias" />,
          tabBarIcon: () => <Icon source={"format-list-bulleted"} size={24} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Nova Denúncia",
          headerTitle: (props) => <TopBar title="Nova Denúncia" />,
          tabBarIcon: () => <Icon source={"bullseye"} size={24} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          headerTitle: (props) => <TopBar title="Configurações" />,
          tabBarIcon: () => <Icon source={"tune"} size={24} />,
        }}
      />
    </Tabs>
  );
}
