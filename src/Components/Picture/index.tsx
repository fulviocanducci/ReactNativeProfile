import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import picture from "./../../../assets/picture.jpg";

export function Picture() {
  return (
    <View style={styles.container}>
      <Image source={picture} />
    </View>
  );
}
