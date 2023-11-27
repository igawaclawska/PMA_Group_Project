import { StyleSheet, Pressable, Text } from "react-native";
import typography from "../globalStyles/typography";

//This button detects the value of "pressed" provided by the Pressable and changes its look accordingly.
//This button has a "theme" prop that takes the following string values: "primary" and "secondary".
//The button can take an icon as a prop

export const CustomButton = ({ value, onPress, theme, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [
              [styles.btn],
              theme !== "secondary"
                ? [styles.primaryPressed]
                : [styles.secondaryPressed],
            ]
          : [
              [styles.btn],
              theme !== "secondary" ? [styles.primary] : [styles.secondary],
            ]
      }
    >
      {icon}
      {value && (
        <Text
          style={[
            typography.button,
            typography.boldFont,
            theme !== "secondary"
              ? typography.whiteText
              : typography.darkGrayText,
          ]}
        >
          {value}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
    gap: 6,
  },

  primary: {
    backgroundColor: "#3FC76D",
  },

  primaryPressed: {
    backgroundColor: "#3E9C27",
  },

  secondaryPressed: {
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderWidth: 1,
  },

  secondary: {
    borderColor: "#D7D7D7",
    borderWidth: 1,
  },
});
