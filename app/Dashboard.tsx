import Calendar from "@/components/Calendar";
import { View } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { useCalendar } from "./CalendarContext";

export default function Dashboard() {
  const { year, month } = useCalendar();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText
        style={{
          paddingBottom: 24
        }}
      >대시보드</ThemedText>
      <Calendar year={year} month={month} />
    </View>
  );
}