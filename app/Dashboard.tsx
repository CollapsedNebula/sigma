// Dashboard.tsx
import Calendar from "@/components/Calendar"; // Calendar 컴포넌트 경로 확인 (만약 같은 폴더라면 './Calendar')
import { useRouter } from 'expo-router'; // 변경: useRouter 훅 임포트
import { StyleSheet, View } from "react-native"; // StyleSheet 임포트 추가
import { ThemedText } from "../components/ThemedText"; // 현재 위치에 따라 상대경로 조정
import { useCalendar } from "./CalendarContext"; // CalendarContext 경로 확인 (만약 같은 폴더라면 './CalendarContext')

export default function Dashboard() {
  const { year, month } = useCalendar();
  const router = useRouter(); // 변경: useRouter 훅 사용

  // 변경: onDayPress 프롭으로 전달할 함수
  const handleDayPress = (dateTag: string) => {
    // router.push()를 사용하여 /date/[date] 경로로 이동
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
      {/* 변경: onDayPress 프롭 추가 및 handleDayPress 연결 */}
      <Calendar year={year} month={month} onDayPress={handleDayPress} />
    </View>
  );
}

// 스타일 시트 추가 (기존 Dashboard 코드에 없었음)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});