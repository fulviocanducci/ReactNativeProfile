import React from "react";
import { Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";

import { styles } from "./styles";

interface ISkill {
  label?: string;
  points?: number;
}

export function Skill({ label, points }: ISkill) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label || ""}</Text>
      <Text style={styles.points}>
        <AirbnbRating showRating={false} size={16} defaultRating={points} count={5} />
      </Text>
    </View>
  );
}
