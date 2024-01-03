import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, SkillScreen } from "../Screens";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="HomeScreen" component={HomeScreen} options={{ title: "Página Inicial", headerTitleAlign: "center" }} />
      <Screen name="SkillScreen" component={SkillScreen} options={{ title: "Conhecimento e Habilidades", headerTitleAlign: "center" }} />
    </Navigator>
  );
}
