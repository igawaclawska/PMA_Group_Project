import { StyleSheet, TextInput } from "react-native";

export const AuthenticationInputField = ({
  placeholder,
  hiddenInput,
  input,
  setInput,
}) => {
  const handleInputAdded = (inputText) => {
    setInput(inputText);
  };

  return (
    <TextInput
      style={styles.input}
      secureTextEntry={hiddenInput}
      placeholder={placeholder}
      value={input}
      onChangeText={handleInputAdded}
    ></TextInput>
  );
};

//TODO: this styling is temporary and will be improved
const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
