import { View } from "react-native";
import { ThemedText } from "../components/ThemedText";

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>대시보드</ThemedText>
    </View>
  );
}