import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const AuthenticationInputField = ({
  placeholder,
  hiddenInput,
  input,
  setInput,
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputAdded = (inputText) => {
    setInput(inputText);
  };

  return (
    <TextInput
      style={[styles.input, isFocused === true && styles.focused]}
      secureTextEntry={hiddenInput}
      placeholder={placeholder}
      value={input}
      onChangeText={handleInputAdded}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    ></TextInput>
  );
};

//TODO: this styling is temporary and will be improved
const styles = StyleSheet.create({
  input: {
    width: "100%",
    margin: 12,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#EDEDED",
  },

  focused: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
});
