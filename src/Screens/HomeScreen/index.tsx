import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Header, Button, Hr } from "../../Components";

import { styles } from "./styles";

export function HomeScreen() {
  const navigation = useNavigation();
  const onPressHandleSkill = () => {
    navigation.navigate("SkillScreen");
  };
  return (
    <View style={styles.container}>
      <Header />
      <Button label="LINKEDIN" />
      <Button label="GITHUB" />
      <Button label="E-MAIL" />
      <Hr marginBottom={14} />
      <Button label="MINHAS HABILIDADES" onPress={onPressHandleSkill} />
    </View>
  );
}
