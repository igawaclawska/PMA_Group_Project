import { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export const AuthenticationInputField = ({
  placeholder,
  hiddenInput,
  input,
  setInput,
  icon,
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputAdded = (inputText) => {
    setInput(inputText);
  };

  return (
    <View style={[styles.inputWrapper, isFocused === true && styles.focused]}>
      <TextInput
        style={[styles.input]}
        secureTextEntry={hiddenInput}
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputAdded}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      ></TextInput>
      {icon && <View>{icon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    paddingRight: 12,
    borderRadius: 8,
    backgroundColor: "#EDEDED",
  },

  input: {
    flex: 1,
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
