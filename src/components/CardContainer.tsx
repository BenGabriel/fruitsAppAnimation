import { Animated, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import Typography from "../common/Typography";
import { useNavigation } from "@react-navigation/native";

const CardContainer = (props: any) => {
  const { item, item_width, scrollX, index } = props;
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate("Details", {
      item
    });
  };

  const inputRange = [
    (index - 1) * item_width,
    index * item_width,
    (index + 1) * item_width
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0]
  });

  const scaleY = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1.1, 0.8]
  });

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [60, 0, 60]
  });

  return (
    <Pressable
      style={{
        width: item_width,
        padding: 20
      }}
      onPress={navigate}
    >
      <Animated.View
        style={{
          opacity
        }}
      >
        <Typography
          text={item.name}
          size={18}
          style={{
            marginLeft: 10
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          height: 300,
          borderRadius: 20,
          padding: 30,
          backgroundColor: "#181d23",
          marginTop: 30,
          overflow: "hidden",
          transform: [
            {
              scaleY
            },
            {
              translateY
            }
          ]
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
        />
      </Animated.View>
    </Pressable>
  );
};

export default CardContainer;

const styles = StyleSheet.create({});
