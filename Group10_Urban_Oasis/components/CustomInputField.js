import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export const CustomInputField = ({
  placeholder,
  hiddenInput,
  input,
  setInput,
  icon,
  isMultiline,
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputAdded = (inputText) => {
    setInput(inputText);
  };

  return (
    <View
      style={[
        styles.inputWrapper,
        isFocused === true && styles.focused,
        isMultiline !== true ? styles.singleLineInput : styles.multiLineInput,
      ]}
    >
      <TextInput
        style={[styles.input]}
        multiline={isMultiline === true ? true : false}
        secureTextEntry={hiddenInput}
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputAdded}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        blurOnSubmit={true}
      ></TextInput>
      {icon && <View>{icon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    paddingRight: 12,
    borderRadius: 8,
    backgroundColor: "#EDEDED",
  },

  singleLineInput: {
    alignItems: "center",
    height: 48,
  },

  multiLineInput: {
    paddingTop: 8,
    height: 80,
    maxHeight: 80,
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
