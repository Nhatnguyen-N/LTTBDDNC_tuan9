import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/donut_red.png";

export default function App() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });
  const [location1, setLocation1] = useState({
    x: Math.random() * 10,
    y: Math.random() * 10,
    marginLeft1: new Animated.Value(Math.random() * 10),
    marginTop1: new Animated.Value(Math.random() * 10),
  });
  const [location2, setLocation2] = useState({
    x: Math.random() * 10,
    y: Math.random() * 10,
    marginLeft2: new Animated.Value(Math.random() * 10),
    marginTop2: new Animated.Value(Math.random() * 10),
  });
  const [location3, setLocation3] = useState({
    x: Math.random() * 10,
    y: Math.random() * 10,
    marginLeft3: new Animated.Value(Math.random() * 10),
    marginTop3: new Animated.Value(Math.random() * 10),
  });
  function random() {
    setLocation1({
      x: Math.random() * 10,
      y: Math.random() * 10,
      marginLeft1: x,
      marginTop1: y,
    });
    setLocation2({
      x: Math.random() * 10,
      y: Math.random() * 10,
      marginLeft2: x,
      marginTop2: y,
    });
    setLocation3({
      x: Math.random() * 10,
      y: Math.random() * 10,
      marginLeft3: x,
      marginTop3: y,
    });
  }
  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onPress1(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation1({
      x: x,
      y: y,
      marginLeft1: x,
      marginTop1: y,
    });
  }
  function onPress2(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation1({
      x: x,
      y: y,
      marginLeft2: x,
      marginTop2: y,
    });
  }
  // function onPress1(evt) {
  //   console.log("====================================");
  //   var x = evt.nativeEvent.locationX;
  //   console.log("====================================");
  //   console.log(x);
  //   console.log("====================================");
  //   var y = evt.nativeEvent.locationY;
  //   console.log("====================================");
  //   setLocation({
  //     x: x,
  //     y: y,
  //     marginLeft: x,
  //     marginTop: y,
  //   });
  // }
  // function onMove(evt) {
  //   console.log("====================================");
  //   console.log(location);
  //   console.log("====================================");
  //   //setLocation({marginLeft: x, marginTop: y })
  // }
  // function onRelease() {
  //   console.log("Realse!");
  // }
  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  return (
    <View
      onStartShouldSetResponder={() => true}
      // onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      // onResponderMove={onMove}
      // onResponderRelease={onRelease}
      style={styles.container}
    >
      <Animated.Image
        source={{
          uri: "https://i.pinimg.com/originals/64/aa/17/64aa17d64b3784e5317f040b673220c0.png",
        }}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: 100,
          height: 100,
          position: "absolute",
        }}
      ></Animated.Image>

      <Animated.Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvewmtIDDpye7ddG0j264f8TKpTLK79ah1qw&usqp=CAU",
        }}
        style={{
          marginLeft: marginLeft1,
          marginTop: marginTop1,
          width: 100,
          height: 100,
        }}
        onClick={random}
      ></Animated.Image>

      <Animated.Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvewmtIDDpye7ddG0j264f8TKpTLK79ah1qw&usqp=CAU",
        }}
        style={{
          marginLeft: marginLeft2,
          marginTop: marginTop2,
          width: 100,
          height: 100,
        }}
      ></Animated.Image>

      <Animated.Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvewmtIDDpye7ddG0j264f8TKpTLK79ah1qw&usqp=CAU",
        }}
        style={{
          marginLeft: marginLeft3,
          marginTop: marginTop3,
          width: 100,
          height: 100,
        }}
        onClick={random}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
