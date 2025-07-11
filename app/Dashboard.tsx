import Calendar from "@/components/Calendar"; // Calendar 컴포넌트 경로 확인 (만약 같은 폴더라면 './Calendar')
import { useRouter } from 'expo-router'; // 변경: useRouter 훅 임포트
import { StyleSheet, View } from "react-native"; // StyleSheet 임포트 추가
import { ThemedText } from "../components/ThemedText"; // 현재 위치에 따라 상대경로 조정
import { useCalendar } from "./CalendarContext"; // CalendarContext 경로 확인 (만약 같은 폴더라면 './CalendarContext')

export default function Dashboard() {
  const { year, month } = useCalendar();
  const router = useRouter(); // 변경: useRouter 훅 사용

  const handleDayPress = (dateTag: string) => {
    router.push(`/date/${dateTag}`);
  };

  return (
    <View
      style={styles.container} // style을 StyleSheet에서 가져오도록 변경
    >
      <ThemedText
        style={{
          paddingBottom: 24
        }}
      >대시보드</ThemedText>
      <Calendar year={year} month={month} onDayPress={handleDayPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});