// app/date/[date].tsx
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router'; // expo-router에서 useLocalSearchParams 훅 임포트
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DateDetailScreen() {
  // `useLocalSearchParams` 훅을 사용하여 URL 파라미터를 가져옵니다.
  // 파일 이름이 `[date].tsx`이므로, 파라미터 이름은 'date'가 됩니다.
  const { date } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>선택된 날짜: {date}</ThemedText>
      <ThemedText style={styles.description}>이곳에 {date} 날짜에 대한 상세 정보를 표시합니다.</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  }
});