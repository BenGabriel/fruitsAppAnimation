import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Typography from "./Typography";

type Props = {
  text: string;
  style?: any;
  textSize?: number;
};
const Button: FC<Props> = ({ text, style, textSize }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#69e97a",
        ...style
      }}
      activeOpacity={0.7}
    >
      <Typography text={text} color="#000" size={textSize} bold />
    </TouchableOpacity>
  );
};

export default Button;
