import { Link } from 'expo-router';
import { useState } from "react";
import { View } from "react-native";
import { ThemedButton } from "../components/ThemedButton";
import { ThemedInput } from "../components/ThemedInput";
import { ThemedText } from "../components/ThemedText";

export default function SignIn() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log("회원가입 시도:", { id, password });
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>아이디</ThemedText>
      <ThemedInput
        onChangeText={setId}
        value={id}
        placeholder="아이디를 입력하세요"
        keyboardType="default"
        style={{ marginBottom: 24 }}
      />
      <ThemedText>비밀번호</ThemedText>
      <ThemedInput
        onChangeText={setPassword}
        value={password}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry
        keyboardType="default"
      />
      <Link href="/SignIn" style={{ padding: 8 }}>
        <ThemedText style={{ color: '#4B72FA', marginTop: 16, fontSize: 16 }}>이미 계정이 있다면 로그인</ThemedText>
      </Link>
      <ThemedButton
        title="회원가입"
        onPress={handleSignUp}
        disabled={!id || !password}
        />
    </View>
  );
}