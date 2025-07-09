import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "../components/ThemedText";

export default function SignIn() {
  const [text, setText] = useState('');
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>로그인</ThemedText>
      <ThemedText>아이디</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="아이디를 입력하세요"
        keyboardType="default"
      />
      <ThemedText>비밀번호</ThemedText>
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
  input: {
    height: 40,
    width: '80%', // 너비
    maxWidth: 300, // 최대 너비
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10, // 좌우 패딩
    borderRadius: 20, // 모서리 둥글게
  },
});