import { Text } from "react-native";
import React, { FC } from "react";

type Props = {
  text: string;
  color?: string;
  bold?: boolean;
  size?: number;
  style?: any;
};
const Typography: FC<Props> = ({ text, color, bold, size, style }) => {
  return (
    <Text
      style={{
        color: color ? color : "#fff",
        fontWeight: bold ? "bold" : "400",
        fontSize: size ? size : 14,
        ...style
      }}
    >
      {text}
    </Text>
  );
};

export default Typography;
