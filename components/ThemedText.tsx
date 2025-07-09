import React from 'react';
import { StyleSheet, Text, TextInputProps } from 'react-native';

interface ThemedTextProps extends TextInputProps {}

export function ThemedText(props: ThemedTextProps) {
  const { style, ...otherProps } = props;

  return (
    <Text
      {...props}
      style={[styles.defaultFont, style]}
    />
  );
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'NoonnuBasicGothicRegular',
    fontSize: 20
  },
});