import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { styles } from "./styles";
import { Header, Skill } from "../../Components";

export function SkillScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Skill label="C#:" points={5} />
        <Skill label="PHP:" points={4} />
        <Skill label="React JS:" points={3} />
        <Skill label="React Native:" points={2} />
        <Skill label="SQL Server:" points={4} />
        <Skill label="MySQL:" points={5} />
        <Skill label="C#:" points={5} />
        <Skill label="PHP:" points={4} />
        <Skill label="React JS:" points={3} />
        <Skill label="React Native:" points={2} />
        <Skill label="SQL Server:" points={4} />
        <Skill label="MySQL:" points={5} />
        <Skill label="C#:" points={5} />
        <Skill label="PHP:" points={4} />
        <Skill label="React JS:" points={3} />
        <Skill label="React Native:" points={2} />
        <Skill label="SQL Server:" points={4} />
        <Skill label="MySQL:" points={5} />
      </ScrollView>
    </SafeAreaView>
  );
}
