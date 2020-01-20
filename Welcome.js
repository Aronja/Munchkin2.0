import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import React, {Component} from 'react';

export default class Welcome extends Component {

  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Text style={styles.header}>Munchkin Counter</Text>
        <Text>{"\n"}</Text>
        <Image
          style={{maxHeight: 285, maxWidth: 200}}
          source={require("./img/munchkin.jpg")}
        />
        <Text>{"\n"}</Text>
      </View>
    );
  }
}