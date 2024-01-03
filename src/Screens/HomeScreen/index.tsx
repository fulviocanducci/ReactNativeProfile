import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Header, Button, Hr } from "../../Components";

import { styles } from "./styles";

export function HomeScreen({ navigation }: any) {
  const onPressHandleSkill = () => {
    navigation.navigate("SkillScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Button label="LINKEDIN" />
        <Button label="GITHUB" />
        <Button label="E-MAIL" />
        <Hr marginBottom={14} />
        <Button label="MINHAS HABILIDADES" onPress={onPressHandleSkill} />
      </ScrollView>
    </SafeAreaView>
  );
}
