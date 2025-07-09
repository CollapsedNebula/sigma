import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface ThemedInputProps extends TextInputProps {}

export function ThemedInput(props: ThemedInputProps) {
    const { style, ...otherProps } = props;
    
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    width: '80%',
    maxWidth: 300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});