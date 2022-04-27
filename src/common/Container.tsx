import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

type Props = {
  children: any;
  color?: string;
  style?: any;
};
const Container: FC<Props> = ({ children, color, style }) => {
  return (
    <View
      style={{
        backgroundColor: color ? color : "#262d35",
        flex: 1,
        paddingTop: 30,
        ...style
      }}
    >
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});
