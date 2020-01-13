import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';
import { styles } from "./styles";

class Welcome extends Component {

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.header}>Munchkin Counter</Text>
        <Text>{"\n"}</Text>
        <Image
          style={{ maxHeight: 285, maxWidth: 200 }}
          source={require("./img/munchkin.jpg")}
        />
        <Text>{"\n"}</Text>
      </View>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.header}>Game</Text>
      </View>
    );
  }
}

export default class App extends Component {

  toggleGame = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying }));
  };

  state = {isPlaying : true};

  render() {
    const isPlaying = this.state.isPlaying;
    return (
      <View style={styles.container}>
        {isPlaying ? <Welcome/> : <Game/>}
        <Button
          title="start playing"
          color="#841584"
          onPress = {this.toggleGame}
        />
      </View>

    );
  }
}


