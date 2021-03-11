import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 40,
  },
  textSecondary: {
    color: "#060606",
    fontWeight: "500",
  },
  textAccent: {
    fontSize: 50,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 14),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  buttonDouble: {
    flex: 0,
    width: screen.width / 2 - 14,
    alignItems: "flex-start",
    paddingLeft: 34,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#F09A36",
  },
});

export default ({ onPress, text, size, theme, appTheme }) => {
  const buttonStyles = [styles.button, appTheme.button];
  const textStyles = [styles.text, appTheme.buttonText];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    buttonStyles.push(appTheme.buttonSecondary);
    textStyles.push(styles.textSecondary);
    textStyles.push(appTheme.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    buttonStyles.push(appTheme.buttonAccent);
    textStyles.push(styles.textAccent);
    textStyles.push(appTheme.textAccent);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
