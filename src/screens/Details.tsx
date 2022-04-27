import { Animated, Pressable, StyleSheet } from "react-native";
import React, { FC, useEffect } from "react";
import Container from "../common/Container";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../common/Typography";
import Button from "../common/Button";

const Details: FC = (props: any) => {
  const {
    navigation,
    route: {
      params: { item }
    }
  } = props;

  const animateValue = React.useRef(new Animated.Value(0)).current;
  const clearValue = React.useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(animateValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false
    }).start();
  };

  const clearAnimation = () => {
    Animated.timing(clearValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const animateView = animateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0]
  });

  const animateView2 = clearValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300]
  });

  const goBack = () => {
    clearAnimation();
    setTimeout(() => {
      navigation.goBack();
    }, 700);
  };

  return (
    <Container color="#151a20">
      <Pressable style={styles.icon} onPress={goBack}>
        <Ionicons name="arrow-back" color="#fff" size={15} />
      </Pressable>
      <Animated.Image
        source={item.image}
        style={{
          alignSelf: "center",
          marginTop: 70,
          transform: [
            {
              translateX: animateView
            },
            {
              translateX: animateView2
            }
          ]
        }}
      />
      <Animated.View
        style={[
          styles.bottom,
          {
            transform: [
              {
                translateY: animateView
              },
              {
                translateY: animateView2
              }
            ]
          }
        ]}
      >
        <Typography text={item.name} size={22} />
        <Typography
          text={`$${item.price}.00`}
          style={{
            marginVertical: 20
          }}
        />
        <Typography text={item.description} color="#717880" />
        <Button
          text="ADD TO BAG"
          textSize={12}
          style={{
            marginTop: 30,
            width: "50%"
          }}
        />
      </Animated.View>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#272c32",
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 30
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    height: "40%",
    backgroundColor: "#262d35",
    right: 0,
    borderTopLeftRadius: 30,
    padding: 30
  }
});
