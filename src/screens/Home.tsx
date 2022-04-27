import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import React, { FC } from "react";
import Container from "../common/Container";
import Typography from "../common/Typography";
import { Ionicons } from "@expo/vector-icons";
import { Fruits } from "../data/data";
import CardContainer from "../components/CardContainer";

const { width } = Dimensions.get("window");
const item_width = width * 0.8;

const Home: FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <View style={styles.nav}>
        <Typography text="Fruits" size={30} />
        <Pressable style={styles.icon}>
          <Ionicons name="menu" color="#fff" size={15} />
        </Pressable>
      </View>

      <Typography
        text="WHAT'S NEW"
        size={10}
        color="#69e688"
        style={{
          marginLeft: 28,
          marginTop: 30
        }}
      />
      <View>
        <Animated.FlatList
          data={Fruits}
          renderItem={({ item, index }) => (
            <CardContainer
              item={item}
              scrollX={scrollX}
              item_width={item_width}
              index={index}
            />
          )}
          snapToInterval={item_width}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } }
              }
            ],
            {
              useNativeDriver: false
            }
          )}
        />
      </View>
      <Typography
        text="Made by Ben"
        size={18}
        style={{
          marginLeft: 28,
          marginTop: 30
        }}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
    marginVertical: 20
  },
  icon: {
    backgroundColor: "#181d23",
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
