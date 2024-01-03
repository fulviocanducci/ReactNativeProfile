import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./base";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
